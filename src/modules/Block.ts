import Handlebars from "handlebars";

import EventBus from "./EventBus";

export type Props = {
  text?: string;
  type?: string;
  children?: Record<string, Block>;
  class?: string;
  elements?: Block[];
  events?: { [key: string]: (e: Event, el?: HTMLFormElement) => void };
  id?: string;
  href?: string;
  [key: string]: unknown;
};

export default abstract class Block {
  static EVENTS = {
    INIT: "init",
    RENDER: "render",
    COMPONENT_DID_UPDATE: "component-did-update",
  };

  _element: HTMLElement | null = null;
  _tagName: string | null = null;

  _props: Props;
  _eventBus: EventBus;

  constructor(tagName: string = "div", props: Props = {}) {
    const eventBus = new EventBus();
    this._eventBus = eventBus;
    this._tagName = tagName;
    this._props = this._makePropsProxy(props);
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.RENDER, this._render.bind(this));
  }

  init() {
    // создание HTML элемента
    if (this._tagName) {
      this._element = this._createDocumentElement(this._tagName);
      if (this._props.class) {
        this._element.classList.add(this._props.class);
      }
      if (this._props.id) {
        this._element.id = this._props.id;
      }
      if (this._props.href && this._element instanceof HTMLAnchorElement) {
        this._element.href = this._props.href;
      }
      if (
        this._props.type &&
        (this._element instanceof HTMLButtonElement ||
          this._element instanceof HTMLInputElement)
      ) {
        this._element.type = this._props.type;
      }
      if (
        typeof this._props.action === "string" &&
        this._element instanceof HTMLFormElement
      ) {
        this._element.action = this._props.action;
      }
    }
    // вызываем метод рендера, запуская событие
    this._eventBus.emit(Block.EVENTS.RENDER);
  }

  getContent() {
    if (!this._element) {
      throw new Error("Element is not initialized");
    }
    return this._element;
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  _makePropsProxy(props: Props) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as string];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        const oldValue = { ...target };
        target[prop as string] = value;
        this._eventBus.emit(
          Block.EVENTS.COMPONENT_DID_UPDATE,
          oldValue,
          target,
        );
        return true;
      },
    });
  }

  _render() {
    if (!this._element) return;
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = "";
    const hasRootPlaceholder =
      block instanceof Element &&
      block?.classList.contains("wrapper-placeholder");
    const nodes = hasRootPlaceholder ? Array.from(block.childNodes) : null;
    if (hasRootPlaceholder && nodes) {
      this._element.append(...nodes);
    } else if (block) {
      this._element.appendChild(block);
    }
    this.addEvents();
  }

  render() {
    return this.compile("");
  }

  compile(template: string) {
    const childrenPlaceholders: { [key: string]: string | Block } = {};
    if (this._props.children) {
      Object.keys(this._props.children).forEach((key) => {
        childrenPlaceholders[key] = `<div data-id="${key}"></div>`;
      });
    }

    // elements
    let elementsPlaceholder: string = "";
    const elements = this._props.elements;
    if (elements) {
      elementsPlaceholder = elements.reduce(
        (acc, _el, index) => (acc += `<div data-id="${index}"></div>`),
        elementsPlaceholder,
      );
    }
    const fragment = this._createDocumentElement("template");
    fragment.innerHTML = Handlebars.compile(template)({
      ...this._props,
      ...childrenPlaceholders,
      elements: elementsPlaceholder,
    });
    if (fragment instanceof HTMLTemplateElement) {
      Object.keys(childrenPlaceholders).forEach((key) => {
        const placeholder = fragment.content.querySelector(
          `[data-id="${key}"]`,
        );
        if (placeholder && this._props.children) {
          placeholder.replaceWith(
            this._props.children[key] instanceof Block
              ? this._props.children[key].getContent()
              : "",
          );
        }
      });

      // elements
      elements?.forEach((el, index) => {
        const placeholder = fragment.content.querySelector(
          `[data-id="${index}"]`,
        );
        if (placeholder) {
          placeholder.replaceWith(el.getContent());
        }
      });

      const isMultiChild = fragment.content.children.length > 1;
      if (isMultiChild) {
        const wrapper = this._createDocumentElement("div");
        wrapper.classList.add("wrapper-placeholder");
        wrapper.append(...Array.from(fragment.content.childNodes));
        fragment.content.appendChild(wrapper);
      }

      const rootElement = fragment.content?.firstElementChild
        ? fragment.content?.firstElementChild
        : fragment.content?.firstChild;

      return rootElement?.cloneNode(true);
    }
    // если фрагмент не является HTMLTemplateElement, то выбрасываем ошибку
    throw new Error("Expected an HTMLTemplateElement");
  }

  addEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }
}
