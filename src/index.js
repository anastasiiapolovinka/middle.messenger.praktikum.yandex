import './style.scss';
import Router from './router';
import { login } from './pages/auth/login';
import { register } from './pages/auth/register';
import { chat } from './pages/chat';
import { profile } from './pages/profile';
import { editpassword } from './pages/profile/editpassword';
import { editusersdata } from './pages/profile/editusersdata';
import { page404 } from './pages/error/page404';
import { page500 } from './pages/error/page500';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  if (!app) return '';

  const router = new Router(app);

  router
    .add('/', chat())
    .add('/signin', login())
    .add('/register', register())
    .add('/profile', profile())
    .add('/editpassword', editpassword())
    .add('/edituserdata', editusersdata())
    .add('/page404', page404())
    .add('/page500', page500());

  router.go(window.location.pathname);
});
