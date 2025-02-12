import Block, { Props } from "../../modules/Block";

import template from "./index.tmpl";

export default class ProfileLayout extends Block {
  constructor(props: Props = {}) {
    props.class = "profile-wrapper";
    super("main", props);
  }
  render() {
    return this.compile(template);
  }
}
