import Block, { Props } from "../../modules/Block";
import "./index.scss";
import { chatList } from "../../mocks/chat";

import template from "./index.tmpl";

export default class Chat extends Block {
  constructor(props: Props = {}) {
    const chatId = props.chatId;
    const activeChat = chatList.find(({ id }) => id === Number(chatId));
    props.messages = activeChat?.messages;
    props.sender = activeChat?.sender;
    props.avatar = activeChat?.avatar;
    super("main", props);
  }
  render() {
    return this.compile(template);
  }
}
