import { layout } from "./layout";

export default class Router {
   container = null;
   routes = {};
   constructor(app) {
      this.container = app;
   }
   add(url, comp) {
      this.routes[url] = comp;
      console.log(this.routes);
      return this;
   }
   go(url) {
      this.container.append(layout(this.routes[url]));
   }
} 
