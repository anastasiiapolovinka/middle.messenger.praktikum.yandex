import Block, { Props } from "../../../modules/Block";

import template from "./index.tmpl";

export default class ErrorPage extends Block {
  constructor(props: Props) {
    super("main", props);
  }
  render() {
    return this.compile(template);
  }
}
