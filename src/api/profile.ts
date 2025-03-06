import HttpClient from "../modules/HttpClient";

const profileAPIInstance = new HttpClient(
  "https://ya-praktikum.tech/api/v2/user",
);

export type UserData = {
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  email?: string;
  phone?: string;
};

export type UserPassword = {
  oldPassword: string;
  newPassword: string;
  newPassword2?: string;
};

export class ProfileApi {
  changeUserAvatar(body: FormData) {
    return profileAPIInstance.put("/profile/avatar", body);
  }
  changeUserProfile(body: UserData) {
    return profileAPIInstance.put("/profile", body);
  }
  changeUserPassword(body: Omit<UserPassword, "newPassword2">) {
    return profileAPIInstance.put("/password", body);
  }
}
