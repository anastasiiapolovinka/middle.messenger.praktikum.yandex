import { AuthAPI, SignUpBody } from "../../api/auth";
import Block, { Props } from "../../modules/Block";
import Router from "../../modules/Router";

import template from "./index.tmpl";

type FormStateValue = string | boolean | Record<string, boolean>;

const router = new Router();

const authApi = new AuthAPI();

export default class AuthLayout extends Block {
  formState: Record<string, FormStateValue> = {};
  constructor(props: Props = {}) {
    props.class = "auth-wrapper";
    props.events = {
      submit: (e) => {
        e.preventDefault();

        const form = e.target;
        if (!(form instanceof HTMLFormElement)) return;

        const formData = new FormData(form);
        const values: Record<string, FormDataEntryValue> = {};

        this.validate(form);

        if (!this.formState.isValid) {
          return this.showError(this.formState.errors);
        }

        formData.forEach((value, key: string) => {
          if (value) {
            values[key] = value;
          }
        });

        const { first_name, second_name, login, email, password, phone } =
          values;
        if (props.name === "login") {
          const loginData = {
            login: login.toString(),
            password: password.toString(),
          };
          authApi
            .signin(loginData)
            .then(() => authApi.getUserInfo())
            .then(() => router.go("/messanger"))
            .catch((err) => {
              console.error(err);
            });
        } else {
          const signUpData: SignUpBody = {
            first_name: first_name.toString(),
            second_name: second_name.toString(),
            login: login.toString(),
            email: email.toString(),
            password: password.toString(),
            phone: phone.toString(),
          };
          authApi
            .signup(signUpData)
            .then(() => router.go("/messanger"))
            .catch((err) => {
              console.error(err);
            });
        }
      },
      blur: (e: Event, form?: HTMLFormElement) => {
        e.preventDefault();
        this.validate(form!);
        if (!this.formState.isValid) {
          return this.showError(this.formState.errors);
        }
      },
      goToRegister: (e: Event) => {
        e.preventDefault();
        router.go("/register");
      },
    };
    authApi
      .getUserInfo()
      .then(() => {
        if (["/", "/register"].includes(window.location.pathname)) {
          router.go("/messanger");
        }
      })
      .catch(console.error);
    super("main", props);
  }
  addEvents() {
    const { events = {} } = this._props;

    const form = this._element?.querySelector("form");
    form?.addEventListener("submit", events.submit);
    form?.querySelectorAll("input[pattern]").forEach((input) => {
      input.addEventListener("blur", (e) => events.blur(e, form));
    });
    form
      ?.querySelector(".linkBtn")
      ?.addEventListener("click", events.goToRegister);
  }
  render() {
    return this.compile(template);
  }

  // form specific methods
  validate(form: HTMLFormElement) {
    let isValid = true;
    this.hideError(this.formState.errors);
    this.formState = {};

    form.querySelectorAll("input[pattern]").forEach((input) => {
      const patternAttr = input.getAttribute("pattern");
      if (patternAttr && input instanceof HTMLInputElement) {
        const pattern = new RegExp(patternAttr);
        const isInvalid = !pattern.test(input.value.trim());
        if (isInvalid) {
          const name = input.getAttribute("name")!;
          if (
            !this.formState.errors ||
            typeof this.formState.errors !== "object"
          ) {
            this.formState.errors = {};
          }
          this.formState.errors = { ...this.formState.errors, [name]: true };
          isValid = false;
        }
      }
    });
    this.formState.isValid = isValid;
  }

  showError(errors: FormStateValue) {
    Object.entries(errors).forEach(([key, value]) => {
      if (value) {
        document.getElementById(`${key}Error`)?.classList.add("show");
      }
    });
  }

  hideError(errors: FormStateValue) {
    if (errors) {
      Object.keys(errors).forEach((key) => {
        document.getElementById(`${key}Error`)?.classList.remove("show");
      });
    }
  }
}
