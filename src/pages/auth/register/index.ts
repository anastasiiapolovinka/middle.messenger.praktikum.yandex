import AuthInput from "../../../components/AuthInput";
import Link from "../../../components/Link";
import Block, { Props } from "../../../modules/Block";
import Button from "../../../components/Button";
import "./index.scss";
import Form from "../../../components/Form";
import Wrapper from "../../../components/Wrapper";

import template from "./index.tmpl";

const emailInput = new AuthInput({
  name: "email",
  class: "formItem",
  type: "email",
  value: "",
  label: "Почта",
  pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
});
const loginInput = new AuthInput({
  name: "login",
  class: "formItem",
  type: "text",
  value: "",
  label: "Логин",
  pattern: "[a-zA-Z0-9\_-].{2,20}",
});
const firstNameInput = new AuthInput({
  name: "first_name",
  class: "formItem",
  type: "text",
  value: "",
  label: "Имя",
  pattern: "^[A-ZА-ЯЁ][a-zа-яё-]*$",
});
const secondNameInput = new AuthInput({
  name: "second_name",
  class: "formItem",
  type: "text",
  value: "",
  label: "Фамилия",
  pattern: "^[A-ZА-ЯЁ][a-zа-яё-]*$",
});
const passwordInput = new AuthInput({
  name: "password",
  class: "formItem",
  type: "password",
  value: "",
  label: "Пароль",
  pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,40}",
});
const password2Input = new AuthInput({
  name: "password2",
  class: "formItem",
  type: "password",
  value: "",
  label: "Пароль (ещё раз)",
  pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,40}",
});
const phoneInput = new AuthInput({
  name: "phone",
  class: "formItem",
  type: "tel",
  value: "",
  label: "Телефон",
  pattern: "^\\+?\\d{10,15}$",
});
const registerBtn = new Button({
  class: "mainBtn",
  type: "submit",
  text: "Зарегистрироваться",
});
const linkBtn = new Link({
  href: "/signin",
  text: "Войти",
  class: "linkBtn",
});
const btnsWrapper = new Wrapper({
  class: "registerBtns",
  elements: [registerBtn, linkBtn],
});
const form = new Form({
  id: "registerForm",
  elements: [
    emailInput,
    loginInput,
    firstNameInput,
    secondNameInput,
    phoneInput,
    passwordInput,
    password2Input,
    btnsWrapper,
  ],
});

export default class Register extends Block {
  constructor(props: Props = {}) {
    props.children = {
      form,
    };
    props.class = "formContainer";
    super("div", props);
  }
  render() {
    return this.compile(template);
  }
}
