import Block, { Props } from "../../modules/Block";
import "./index.scss";
import { ChatAPI } from "../../api/chat";

import template from "./index.tmpl";

const chatApi = new ChatAPI();
export default class Chat extends Block {
  constructor(props: Props = {}) {
    const chatId = props.chatId;
    if (chatId) {
      chatApi.getChatToken(chatId).then(({ token }) => {
        localStorage.setItem("chatToken", token);
      });
    }
    super("main", props);
  }
  render() {
    return this.compile(template);
  }
}
