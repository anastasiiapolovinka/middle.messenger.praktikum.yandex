export const getLocation = () => {
  const params = new URLSearchParams(window.location.search);
  const queryParams = Object.fromEntries(params.entries());
  return {
    pathname: window.location.pathname,
    params: queryParams,
  };
};
