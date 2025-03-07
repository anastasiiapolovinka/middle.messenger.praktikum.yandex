import "./index.scss";
import Link from "../../components/Link";
import avatar from "../../images/avatar.png";
import Block, { Props } from "../../modules/Block";
import { AuthAPI } from "../../api/auth";
import Router from "../../modules/Router";

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

const authApi = new AuthAPI();
const router = new Router();
const first_name = "Иван";
export default class Profile extends Block {
  layout = "profile";
  constructor(props: Props = {}) {
    props.children = { changeDataBtn, changePasswordBtn, logoutBtn };
    authApi.getUserInfo().then((data) => {
      if (data) {
        this.setProps({ ...data, id: String(data.id) });
      }
    });
    super("div", { ...props, avatar, first_name, class: "container" });
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (Object.keys(oldProps).length < Object.keys(newProps).length) {
      return true;
    }
    return false;
  }

  rerender() {
    router.replaceRoute("/profile", this);
  }
  render() {
    return this.compile(template);
  }
}
