import Block, { Props } from "../../modules/Block";

import template from "./index.tmpl";

export default class ListItem extends Block {
  constructor(props: Props) {
    super("li", props);
  }
  render() {
    return this.compile(template);
  }
}
