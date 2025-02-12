import Block from "./modules/Block";

export default class Router {
  _container: Element | null = null;
  routes: Record<string, Block | undefined> = {};
  constructor(app: Element) {
    this._container = app;
  }
  add(url: string, comp: Block | undefined) {
    this.routes[url] = comp;
    return this;
  }
  go(url: string) {
    if (this._container && this.routes[url]) {
      const page = this.routes[url];
      return this._container.append(page.getContent() ?? "");
    }
  }
}
