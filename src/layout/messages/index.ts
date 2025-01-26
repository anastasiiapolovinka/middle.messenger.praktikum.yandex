import Block, { Props } from "../../modules/Block";
import Chat from "../../pages/chat";
import EmptyChatScreen from "../../components/EmptyChatScreen";
import SideBar from "../../components/SideBar";
import Input from "../../components/Input";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import "./index.scss";
import { getLocation } from "../../utils";

import template from "./index.tmpl";

const emptyMessageScreen = new EmptyChatScreen({
  class: "emptyMessage",
});
const { params } = getLocation();
const { chat: chatId } = params;
const chat = new Chat({ chatId, class: "chat-container" });
const content = params.chat ? chat : emptyMessageScreen;
const searchInput = new Input();
const link = new Link({
  href: "/profile",
  text: "Профиль",
  linkClass: "profileButton",
});
const listItem_1 = new ListItem({
  class: "chatItem",
  url: "./?chat=1",
  name: "Андрей",
  preview: "Изображение",
  time: "10:49",
  unread: "2",
});
const listItem_2 = new ListItem({
  class: "chatItem",
  url: "./?chat=2",
  name: "Киноклуб",
  preview: "Вы: стикер",
  time: "12:00",
  unread: "4",
});
const listItem_3 = new ListItem({
  class: "chatItem",
  url: "./?chat=3",
  name: "Илья",
  preview: "Друзья, у меня для вас особенный выруск новостей!",
  time: "15:12",
  unread: "1",
});
const listItem_4 = new ListItem({
  class: "chatItem",
  url: "./?chat=4",
  name: "Вадим",
  preview: "Вы: круто!",
  time: "Пт",
  unread: "8",
});
const sidebar = new SideBar("aside", {
  class: "sidebar",
  children: {
    searchInput,
    link,
    listItem_1,
    listItem_2,
    listItem_3,
    listItem_4,
  },
});
export default class MessagesLayout extends Block {
  constructor(props: Props = {}) {
    props.children = {
      content,
      sidebar,
    };
    props.events = {
      clickOnTools: (e) => {
        e.preventDefault();
        const btn = e.target;
        if (btn instanceof HTMLButtonElement) {
          btn.classList.toggle("active");
        }
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

        console.log("Сообщение:", values);
      },
    };
    super("main", props);
  }
  render() {
    return this.compile(template);
  }

  addEvents() {
    const { events = {} } = this._props;

    const toolsBtn = this._element?.querySelector(".tools-btn")!;
    toolsBtn?.addEventListener("click", events?.clickOnTools);
    const form = this._element?.querySelector("form")!;
    form?.addEventListener("submit", events.submit);
  }
}
