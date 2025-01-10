import './style.css'
import Router from './router';
import { login } from './pages/auth/login/login';

document.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('#app');
   if (!app) return '';
   
   const router = new Router(app);

   router.add('/', 'Home').add('/signin', login());

   router.go(window.location.pathname);
})
