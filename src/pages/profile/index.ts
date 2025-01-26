import "./index.scss";
import Link from "../../components/Link";
import avatar from "../../images/avatar.png";
import Block, { Props } from "../../modules/Block";

import template from "./index.tmpl";

const changeDataBtn = new Link({
  href: "/edituserdata",
  text: "Изменить данные",
  class: "linkBtn",
});
const changePasswordBtn = new Link({
  href: "/editpassword",
  text: "Изменить пароль",
  class: "linkBtn",
});
const logoutBtn = new Link({
  href: "/signin",
  text: "Выйти",
  class: "logoutBtn",
});
const title = "Иван";
export default class Profile extends Block {
  constructor(props: Props = {}) {
    props.children = { changeDataBtn, changePasswordBtn, logoutBtn };
    super("div", { ...props, avatar, title, class: "container" });
  }
  render() {
    return this.compile(template);
  }
}
