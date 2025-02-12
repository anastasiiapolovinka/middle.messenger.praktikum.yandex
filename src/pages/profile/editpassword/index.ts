import "./index.scss";
import Block, { Props } from "../../../modules/Block";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";

import template from "./index.tmpl";
export default class EditPassword extends Block {
  constructor(props: Props = {}) {
    const oldPasswordInput = new FormInput("div", {
      label: "Старый пароль:",
      name: "oldPassword",
      type: "password",
      value: "",
      pattern: "^(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,40}$",
      class: "inputWrapper",
    });
    const newPasswordInput = new FormInput("div", {
      label: "Новый пароль:",
      name: "newPassword",
      type: "password",
      value: "",
      pattern: "^(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,40}$",
      class: "inputWrapper",
    });
    const newPassword2Input = new FormInput("div", {
      label: "Повторите новый пароль:",
      name: "newPassword2",
      type: "password",
      value: "",
      pattern: "^(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,40}$",
      class: "inputWrapper",
    });
    const changePasswordBtn = new Button({
      class: "mainBtn",
      text: "Сохранить",
      type: "submit",
    });
    props.children = {
      oldPasswordInput,
      newPasswordInput,
      newPassword2Input,
      changePasswordBtn,
    };
    props.class = "container";
    super("div", props);
  }
  render() {
    return this.compile(template);
  }
}
