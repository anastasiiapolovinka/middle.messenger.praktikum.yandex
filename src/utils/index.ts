import ProfileLayout from "../layout/profile";
import Block from "../modules/Block";

export const getLocation = () => {
  const params = new URLSearchParams(window.location.search);
  const queryParams = Object.fromEntries(params.entries());
  return {
    pathname: window.location.pathname,
    params: queryParams,
  };
};

export const render = (
  selector: string,
  block: Block,
  isRerender?: boolean,
) => {
  const root = document.querySelector(selector);
  if (root) {
    const content = block.getContent();
    if (isRerender) {
      root.innerHTML = "";
    }
    root.append(content);
    return root;
  }
  return null;
};

export const prepareLayout = (component: Block) => {
  if (component.layout === "profile") {
    return new ProfileLayout({ children: { content: component } });
  }
  return component;
};
