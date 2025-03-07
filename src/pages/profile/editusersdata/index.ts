import "./index.scss";
import Block, { Props } from "../../../modules/Block";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";
import { AuthAPI } from "../../../api/auth";
import Router from "../../../modules/Router";

import template from "./index.tmpl";

const emailInput = new FormInput("div", {
  label: "Почта:",
  name: "email",
  placeholder: "Почта",
  type: "email",
  value: "",
  pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
  class: "inputWrapper",
});
const loginInput = new FormInput("div", {
  label: "Логин:",
  name: "login",
  placeholder: "Логин",
  type: "text",
  value: "",
  pattern: "^(?!\\d+$)[a-zA-Z0-9_-]{3,20}$",
  class: "inputWrapper",
});
const firstNameInput = new FormInput("div", {
  label: "Имя:",
  name: "first_name",
  placeholder: "Имя",
  type: "text",
  value: "",
  pattern: "^[A-ZА-ЯЁ][a-zа-яё-]*$",
  class: "inputWrapper",
});
const secondNameInput = new FormInput("div", {
  label: "Фамилия:",
  name: "second_name",
  placeholder: "Фамилия",
  type: "text",
  value: "",
  pattern: "^[A-ZА-ЯЁ][a-zа-яё-]*$",
  class: "inputWrapper",
});
const displayNameInput = new FormInput("div", {
  label: "Имя в чате:",
  name: "display_name",
  placeholder: "Имя в чате",
  type: "text",
  value: "",
  class: "inputWrapper",
});
const phoneInput = new FormInput("div", {
  label: "Телефон:",
  name: "phone",
  placeholder: "Телефон",
  type: "tel",
  value: "",
  pattern: "^\\+?\\d{10,15}$",
  class: "inputWrapper",
});
const changeDataBtn = new Button({
  class: "mainBtn",
  text: "Сохранить",
  type: "submit",
});

const authApi = new AuthAPI();
const router = new Router();
export default class EditUsersData extends Block {
  layout = "profile";
  constructor(props: Props = {}) {
    props.children = {
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      displayNameInput,
      phoneInput,
      changeDataBtn,
    };
    props.class = "container";
    authApi.getUserInfo().then((data) => {
      if (data) {
        this.setProps({ ...data, id: String(data.id) });
      }
    });
    super("div", props);
  }
  rerender() {
    router.replaceRoute("/edituserdata", this);
  }
  render() {
    return this.compile(template);
  }
}
