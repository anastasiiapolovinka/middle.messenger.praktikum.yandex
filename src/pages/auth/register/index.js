import { authLayout } from '../../../layout/auth';
import template from './index.tmpl';
import './index.scss';

export const register = () => {
  const title = 'Регистрация';
  const email = '';
  const login = '';
  const first_name = '';
  const second_name = '';
  const phone = '';
  const password = '';
  const password2 = '';
  const mainButtonText = 'Зарегистрироваться';
  const linkButtonText = 'Войти';

  const formHTML = authLayout(
    template({
      title,
      email,
      login,
      first_name,
      second_name,
      phone,
      password,
      password2,
      mainButtonText,
      linkButtonText,
    }),
  );
  setTimeout(() => {
    const form = document.getElementById('registerForm');
    const emailInput = document.getElementById('email');
    const loginInput = document.getElementById('login');
    const first_nameInput = document.getElementById('first_name');
    const second_nameInput = document.getElementById('second_name');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const password2Input = document.getElementById('password2');

    const emailError = document.getElementById('emailError');
    const loginError = document.getElementById('loginError');
    const first_nameError = document.getElementById('first_nameError');
    const second_nameError = document.getElementById('second_nameError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const password2Error = document.getElementById('password2Error');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (!emailInput.value.trim()) {
        emailError.textContent = 'Введите почту';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      if (!loginInput.value.trim()) {
        loginError.textContent = 'Введите ваш логин';
        isValid = false;
      } else {
        loginError.textContent = '';
      }

      if (!first_nameInput.value.trim()) {
        first_nameError.textContent = 'Введите ваше имя';
        isValid = false;
      } else {
        first_nameError.textContent = '';
      }

      if (!second_nameInput.value.trim()) {
        second_nameError.textContent = 'Введите вашу фамилию';
        isValid = false;
      } else {
        second_nameError.textContent = '';
      }
      if (!phoneInput.value.trim()) {
        phoneError.textContent = 'Введите ваш номер телефона';
        isValid = false;
      } else {
        phoneError.textContent = '';
      }
      if (!passwordInput.value.trim()) {
        passwordError.textContent = 'Введите пароль';
        isValid = false;
      } else {
        passwordError.textContent = '';
      }
      if (passwordInput.value.trim() !== password2Input.value.trim()) {
        password2Error.textContent = 'Пароли должны совпадать';
        isValid = false;
      } else {
        password2Error.textContent = '';
      }

      if (isValid) {
        alert('Форма успешно отправлена!');
      }
    });
    [
      emailInput,
      loginInput,
      first_nameInput,
      second_nameInput,
      phoneInput,
      passwordInput,
      password2Input,
    ].forEach((input) => {
      input.addEventListener('input', () => {
        const errorElement = document.getElementById(`${input.name}Error`);
        if (errorElement) {
          errorElement.textContent = '';
        }
      });
    });
  }, 0);

  return formHTML;
};
