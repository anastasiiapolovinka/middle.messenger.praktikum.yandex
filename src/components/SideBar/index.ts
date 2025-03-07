import Block, { Props } from "../../modules/Block";
import Input from "../Input";
import Link from "../Link";

import template from "./index.tmpl";

const searchInput = new Input();
const link = new Link({
  href: "/profile",
  text: "Профиль",
  linkClass: "profileButton",
});
export default class SideBar extends Block {
  constructor(props: Props = {}) {
    props.children = {
      searchInput,
      link,
    };
    super("aside", props);
  }

  render() {
    return this.compile(template);
  }
}
