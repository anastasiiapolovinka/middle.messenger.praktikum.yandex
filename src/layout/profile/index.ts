import { AuthAPI } from "../../api/auth";
import { ProfileApi, UserData, UserPassword } from "../../api/profile";
import Block, { Props } from "../../modules/Block";
import Router from "../../modules/Router";

import template from "./index.tmpl";

type UpdateAvatarData = {
  avatar: string;
};

const authApi = new AuthAPI();
const profileApi = new ProfileApi();
const router = new Router();
export default class ProfileLayout extends Block {
  constructor(props: Props = {}) {
    props.class = "profile-wrapper";
    props.events = {
      logout: (e) => {
        e.preventDefault();
        authApi.logout().then(() => {
          router.go("/");
        });
      },
      showModal: (e) => {
        e.preventDefault();
        const overlay = this._element?.querySelector(".overlay");
        overlay?.classList.add("show");
      },
      changeAvatar: (e) => {
        e.preventDefault();
        if (e.target instanceof HTMLFormElement) {
          const formData = new FormData(e.target);
          profileApi.changeUserAvatar(formData).then(() => {
            const overlay = this._element?.querySelector(".overlay");
            overlay?.classList.remove("show");
          });
        }
      },
      changeProfile: (e) => {
        e.preventDefault();
        if (e.target instanceof HTMLElement) {
          const inputs =
            e.target?.querySelectorAll<HTMLInputElement>(".profileInput");
          const payload = Array.from(inputs).reduce((acc, input) => {
            let userInfo: UserData = { ...acc };
            const value = input.value;
            const name = input.name as keyof UserData;
            if (value) {
              userInfo[name] = value;
            }
            return userInfo;
          }, {});
          profileApi.changeUserProfile(payload);
        }
      },
      changePassword: (e) => {
        e.preventDefault();
        if (e.target instanceof HTMLElement) {
          const inputs =
            e.target?.querySelectorAll<HTMLInputElement>(".profileInput");
          const payload = Array.from(inputs).reduce((acc, input) => {
            let userPassword: UserPassword = { ...acc };
            const value = input.value;
            const name = input.name as keyof UserPassword;
            if (value) {
              userPassword[name] = value;
            }
            return userPassword;
          }, {} as UserPassword);
          delete payload.newPassword2;
          profileApi.changeUserPassword(payload);
        }
      },
    };
    super("main", props);
  }

  addEvents() {
    const { events = {} } = this._props;

    const logoutBtn = this._element?.querySelector(".logoutBtn");
    logoutBtn?.addEventListener("click", events.logout);

    const uploadFileLabel = this._element?.querySelector(".uploadFileLabel");
    uploadFileLabel?.addEventListener("click", events.showModal);

    const form: HTMLFormElement | null | undefined =
      this._element?.querySelector(".avatarForm");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form instanceof HTMLFormElement) {
        const formData = new FormData(form);
        profileApi.changeUserAvatar(formData).then((data) => {
          const overlay = this._element?.querySelector(".overlay");
          overlay?.classList.remove("show");

          const { avatar } = data as UpdateAvatarData;
          const img = this._element?.querySelector(".profileImg");
          img?.setAttribute("src", `https://ya-praktikum.tech${avatar}`);
        });
      }
    });

    // edit user
    const editUserForm: HTMLFormElement | null | undefined =
      this._element?.querySelector(".profileDetails");
    editUserForm?.addEventListener("submit", events.changePassword);
  }
  render() {
    return this.compile(template);
  }
}
