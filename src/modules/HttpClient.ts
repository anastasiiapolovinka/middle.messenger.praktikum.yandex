type Method = "GET" | "POST" | "PUT" | "DELETE";

export default class HttpClient {
  baseUrl: string;
  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
  }

  request(
    method: Method,
    url: string,
    {
      body = null,
      headers = {},
      params = {},
    }: {
      body?: { [key: string]: unknown } | null;
      headers?: Record<string, string>;
      params?: string | string[][] | Record<string, string> | URLSearchParams;
    }
  ) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (params && method === "GET") {
        url += "?" + new URLSearchParams(params).toString();
      }

      xhr.open(method, this.baseUrl + url, true);

      if (body && method !== "GET") {
        headers["Content-Type"] = "application/json";
      }
      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        const isJson = xhr
          .getResponseHeader("Content-Type")
          ?.includes("application/json");
        const response = isJson
          ? JSON.parse(xhr.responseText)
          : xhr.responseText;
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(response);
        } else {
          reject({ status: xhr.status, statusText: xhr.statusText, response });
        }
      };

      xhr.onerror = () =>
        reject({ status: xhr.status, statusText: "Network Error" });

      xhr.send(body && method !== "GET" ? JSON.stringify(body) : null);
    });
  }

  get(url: Method, params = {}) {
    return this.request("GET", url, { params });
  }

  post(url: Method, body = {}, headers = {}) {
    return this.request("POST", url, { body, headers });
  }

  put(url: Method, body = {}, headers = {}) {
    return this.request("PUT", url, { body, headers });
  }

  delete(url: Method, body = {}, headers = {}) {
    return this.request("DELETE", url, { body, headers });
  }
}
