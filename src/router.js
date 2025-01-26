import { layout } from './layout';

export default class Router {
  container = null;
  routes = {};
  constructor(app) {
    this.container = app;
  }
  add(url, comp) {
    this.routes[url] = comp;
    return this;
  }
  go(url) {
    this.container.append(layout(this.routes[url]));
  }
}
