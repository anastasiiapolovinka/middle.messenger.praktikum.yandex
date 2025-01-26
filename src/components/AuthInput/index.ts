import Block, { Props } from "../../modules/Block";

import template from "./index.tmpl";

export default class AuthInput extends Block {
  constructor(props: Props) {
    super("div", props);
  }
  render() {
    return this.compile(template);
  }
}
