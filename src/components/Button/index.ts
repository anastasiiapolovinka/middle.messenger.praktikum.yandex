import Block, { Props } from "../../modules/Block";

import template from "./index.tmpl";

export default class Button extends Block {
  constructor(props: Props) {
    super("button", props);
  }
  render() {
    return this.compile(template);
  }
}
