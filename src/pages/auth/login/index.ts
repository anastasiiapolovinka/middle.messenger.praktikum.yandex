import Block, { Props } from "../../../modules/Block";
import AuthInput from "../../../components/AuthInput";
import Link from "../../../components/Link";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Wrapper from "../../../components/Wrapper";

import template from "./index.tmpl";

const loginInput = new AuthInput({
  name: "login",
  class: "formItem",
  value: "",
  label: "Логин",
  pattern: "[a-zA-Z0-9\_-].{2,20}",
});
const paswordInput = new AuthInput({
  name: "password",
  class: "formItem",
  type: "password",
  value: "",
  label: "Пароль",
  pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,40}",
});
const loginBtn = new Button({
  class: "mainBtn",
  type: "submit",
  text: "Авторизоваться",
});
const loginlinkBtn = new Link({
  href: "/register",
  text: "Нет аккаунта?",
  class: "linkBtn",
});
const btnsWrapper = new Wrapper({
  class: "loginBtns",
  elements: [loginBtn, loginlinkBtn],
});
const form = new Form({
  id: "loginForm",
  class: "formContent",
  elements: [loginInput, paswordInput, btnsWrapper],
});

export default class Login extends Block {
  constructor(props: Props = {}) {
    props.children = { form };
    props.class = "formContainer";
    super("div", props);
  }
  render() {
    return this.compile(template);
  }
}
