import Block, { Props } from "../../modules/Block";

import template from "./index.tmpl";

export default class Link extends Block {
  constructor(props: Props) {
    super("a", props);
  }
  render() {
    return this.compile(template);
  }
}
