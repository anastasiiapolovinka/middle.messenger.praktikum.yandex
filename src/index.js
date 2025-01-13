import './style.css';
import Router from './router';
import { login } from './pages/auth/login';
import { register } from './pages/auth/register';
import { chat } from './pages/chat';
import { profile } from './pages/profile';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  if (!app) return '';

  const router = new Router(app);

  router
    .add('/', 'Home')
    .add('/signin', login())
    .add('/register', register())
    .add('/chat', chat())
    .add('/profile', profile());

  router.go(window.location.pathname);
});
