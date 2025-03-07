import HttpClient from "../modules/HttpClient";

const authAPIInstance = new HttpClient("https://ya-praktikum.tech/api/v2/auth");

export type SignUpBody = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SignInBody = {
  login: string;
  password: string;
};

export class AuthAPI {
  signup(body: SignUpBody): Promise<{ id: number }> {
    return authAPIInstance.post<{ id: number }>("/signup", body);
  }
  signin(body: SignInBody) {
    return authAPIInstance.post("/signin", body);
  }
  logout() {
    return authAPIInstance.post("/logout");
  }
  getUserInfo() {
    return authAPIInstance.get<{ id: number }>("/user");
  }
}
