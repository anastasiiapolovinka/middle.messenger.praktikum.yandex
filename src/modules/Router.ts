import { prepareLayout, render } from "../utils";

import Block from "./Block";

class Route {
  _pathname: string;
  _block: Block | null;
  _blockClass: Block;
  _rootSelector: string | null;

  constructor(url: string, comp: Block, rootSelector: string) {
    this._pathname = url;
    this._block = null;
    this._blockClass = comp;
    this._rootSelector = rootSelector;
  }

  navigate(url: string) {
    if (this.match(url)) {
      this._pathname = url;
      this.render();
    }
  }

  rerender() {
    if (this._pathname === window.location.pathname) {
      if (this._rootSelector) {
        const isRerender = true;
        const layout = prepareLayout(this._blockClass);
        render(this._rootSelector, layout, isRerender);
      }
    }
  }

  match(url: string) {
    return url === this._pathname;
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  render() {
    if (!this._block) {
      if (this._rootSelector) {
        render(this._rootSelector, this._blockClass);
        this._block = this._blockClass;
        return;
      }
    } else {
      this._block.show();
    }
  }
}

export default class Router {
  private static __instance: Router | null = null;

  rootSelector: string = "";
  routes: Array<Route> = [];
  history: History = window.history;
  _currentRoute: Route | null = null;

  constructor(rootSelector: string = "#app") {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.rootSelector = rootSelector;

    Router.__instance = this;
  }

  add(url: string, comp: Block) {
    const route = new Route(url, comp, this.rootSelector);
    this.routes.push(route);
    return this;
  }

  replaceRoute(url: string, comp: Block) {
    const route = new Route(url, comp, this.rootSelector);
    this.routes = this.routes.map((r) => {
      if (r._pathname === url) {
        return route;
      }
      return r;
    });
    this._currentRoute = route;
    route.rerender();
  }

  go(url: string) {
    this.history.pushState({}, "", url);
    this._onRoute(url);
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      if (
        event.currentTarget instanceof Window &&
        event.currentTarget.location
      ) {
        this._onRoute(event.currentTarget.location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
      this._currentRoute = route;
    } else {
      this._currentRoute = route;
    }

    route.navigate(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
