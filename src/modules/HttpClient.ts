type Method = "GET" | "POST" | "PUT" | "DELETE";

export default class HttpClient {
  baseUrl: string;
  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
  }

  request<T>(
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
    },
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (Object.keys(params).length && method === "GET") {
        url += "?" + new URLSearchParams(params).toString();
      }

      xhr.open(method, this.baseUrl + url, true);
      xhr.withCredentials = true;

      if (body && !(body instanceof FormData) && method !== "GET") {
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

      if (body && method !== "GET") {
        xhr.send(body instanceof FormData ? body : JSON.stringify(body));
      } else {
        xhr.send(null);
      }
    });
  }

  get<T>(url: string, params = {}): Promise<T> {
    return this.request<T>("GET", url, { params });
  }

  post<T>(url: string, body = {}, headers = {}): Promise<T> {
    return this.request<T>("POST", url, { body, headers });
  }

  put<T>(url: string, body = {}, headers = {}): Promise<T> {
    return this.request<T>("PUT", url, { body, headers });
  }

  delete(url: string, body = {}, headers = {}) {
    return this.request("DELETE", url, { body, headers });
  }
}
