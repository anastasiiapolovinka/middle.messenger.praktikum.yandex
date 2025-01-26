import Block, { Props } from "../../modules/Block";

import template from "./index.tmpl";

export default class Form extends Block {
  constructor(props: Props) {
    props.action = "";
    super("form", props);
  }

  render() {
    return this.compile(template);
  }
}
