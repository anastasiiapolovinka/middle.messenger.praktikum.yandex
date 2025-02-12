import "./index.scss";
import Block, { Props } from "../../../modules/Block";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";

import template from "./index.tmpl";

export default class EditUsersData extends Block {
  constructor(props: Props = {}) {
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
    super("div", props);
  }
  render() {
    return this.compile(template);
  }
}
