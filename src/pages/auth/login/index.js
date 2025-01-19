import { authLayout } from '../../../layout/auth';
import template from './index.tmpl';
import './index.scss';

export const login = () => {
  const title = 'Вход';
  const login = '';
  const password = '';
  const mainButtonText = 'Авторизоваться';
  const linkButtonText = 'Нет аккаунта?';

  const formHTML = authLayout(
    template({
      title,
      login,
      password,
      mainButtonText,
      linkButtonText,
    }),
  );

  setTimeout(() => {
    const form = document.getElementById('loginForm');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('loginError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      if (loginInput.value.trim() === '') {
        loginError.textContent = 'Введите ваш логин';
        isValid = false;
      } else {
        loginError.textContent = '';
      }

      if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Введите ваш пароль';
        isValid = false;
      } else {
        passwordError.textContent = '';
      }

      if (isValid) {
        alert('Форма успешно отправлена!');
        loginInput.value = '';
        passwordInput.value = '';

        loginInput.dispatchEvent(new Event('input'));
        passwordInput.dispatchEvent(new Event('input'));
      }
    });

    loginInput.addEventListener('input', () => {
      loginError.textContent = '';
    });

    passwordInput.addEventListener('input', () => {
      passwordError.textContent = '';
    });
  }, 0);

  return formHTML;
};
