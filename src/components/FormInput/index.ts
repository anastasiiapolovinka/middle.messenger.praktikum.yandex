import Block from "../../modules/Block";

import template from "./index.tmpl";

export default class FormInput extends Block {
  render() {
    return this.compile(template);
  }
}
