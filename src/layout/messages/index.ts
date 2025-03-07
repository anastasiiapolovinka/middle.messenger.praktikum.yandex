import Block, { Props } from "../../modules/Block";
import Chat from "../../pages/chat";
import EmptyChatScreen from "../../components/EmptyChatScreen";
import SideBar from "../../components/SideBar";
import "./index.scss";
import { getLocation } from "../../utils";
import { AuthAPI } from "../../api/auth";
import Router from "../../modules/Router";
import { ChatAPI } from "../../api/chat";
import ListItem from "../../components/ListItem";
import { WSTransport } from "../../modules/WSTransport";

import template from "./index.tmpl";

const emptyMessageScreen = new EmptyChatScreen({
  class: "emptyMessage",
});
const { params } = getLocation();
const { chat_id: chatId } = params;
const chat = new Chat({ chatId, class: "chat-container" });
const content = params.chat_id ? chat : emptyMessageScreen;

const sidebar = new SideBar({
  class: "sidebar",
});

const authApi = new AuthAPI();
const chatApi = new ChatAPI();
const router = new Router();
export default class MessagesLayout extends Block {
  constructor(props: Props = {}) {
    props.children = {
      content,
      sidebar,
    };
    let socketUrl = "wss://ya-praktikum.tech/ws/chats/";
    const token = localStorage.getItem("chatToken");
    authApi
      .getUserInfo()
      .then(
        (data: { id: number }) => `${socketUrl}${data?.id}/${chatId}/${token}`,
      );
    const socket = new WSTransport(socketUrl);
    socket.connect();
    props.events = {
      sendMessage: (e) => {
        e.preventDefault();
        const form = e.target;
        if (!(form instanceof HTMLFormElement)) return;
        const formData = new FormData(form);
        let values: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value, key: string) => {
          if (value) {
            values[key] = value;
          }
        });
        if (values.message) {
          socket.send(values.message);
        }
        const input = form.querySelector('[name="message"]');
        input?.setAttribute("value", "");
      },
      clickOnTools: (e) => {
        e.preventDefault();
        const btn = e.target;
        if (btn instanceof HTMLButtonElement) {
          btn.classList.toggle("active");
        }
      },
      createChat: (e) => {
        e.preventDefault();
        chatApi
          .createChat({ title: `chat #${(Math.random() * 100).toFixed()}` })
          .then((data) => console.log("Чат создан", data))
          .catch(console.error);
      },
      addUser: (e) => {
        e.preventDefault();
        chatApi
          .addUser({
            users: [Number((Math.random() * 100).toFixed())],
            chatId: Number(chatId),
          })
          .then((data) => console.log("Юзер добавлен", data))
          .catch(console.error);
      },
      deleteUser: (e) => {
        e.preventDefault();
        chatApi
          .deleteUser({
            users: [Number((Math.random() * 100).toFixed())],
            chatId: Number(chatId),
          })
          .then((data) => console.log("Юзер удалён", data))
          .catch(console.error);
      },
      submit: (e) => {
        e.preventDefault();

        const form = e.target;
        if (!(form instanceof HTMLFormElement)) return;

        const formData = new FormData(form);
        const values: Record<string, FormDataEntryValue> = {};

        formData.forEach((value, key: string) => {
          if (value) {
            values[key] = value;
          }
        });

        if (!values.message) return;

        socket.send(values.message);
        const input = form.querySelector('[name="message"]');
        input?.setAttribute("value", "Введите сообщение");
      },
    };
    chatApi.getChats().then((data) => {
      if (data) {
        const elements = data.map(
          ({ id: chatId, title, unread_count, last_message = {} }) => {
            const time = last_message?.time || "";
            const preparedTime =
              time &&
              new Date(time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
            return new ListItem({
              class: "chatItem",
              url: `/chats?chat_id=${chatId}`,
              name: title,
              preview: last_message?.content,
              time: preparedTime || "",
              unread: unread_count,
            });
          },
        );
        this.setProps({ elements });
      }
    });
    super("main", props);
  }
  render() {
    return this.compile(template);
  }

  rerender() {
    router.replaceRoute("/chats", this);
  }

  addEvents() {
    const { events = {} } = this._props;

    const toolsBtn = this._element?.querySelector(".tools-btn")!;
    toolsBtn?.addEventListener("click", events?.clickOnTools);
    const form = this._element?.querySelector("form")!;
    form?.addEventListener("submit", events.submit);

    const createChatBtn = this._element?.querySelector(".createChat");
    createChatBtn?.addEventListener("click", events?.createChat);

    const addUserBtn = this._element?.querySelector(".addUser");
    addUserBtn?.addEventListener("click", events?.addUser);

    const deleteUserBtn = this._element?.querySelector(".deleteUser");
    deleteUserBtn?.addEventListener("click", events?.deleteUser);
  }
}
