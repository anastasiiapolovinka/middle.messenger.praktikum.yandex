import template from './index.tmpl';
import './index.scss';
import { profileLayout } from '../../layout/profile';
import avatar from '../../../public/images/avatar.png';

export const profile = () => {
  const title = 'Иван';
  const email = 'Почта';
  const login = 'Логин';
  const first_name = 'Имя';
  const second_name = 'Фамилия';
  const display_name = 'Имя в чате';
  const phone = 'Телефон';
  const change_data = 'Изменить данные';
  const change_password = 'Изменить пароль';
  const logout = 'Выйти';

  return profileLayout(
    template({
      avatar,
      title,
      email,
      login,
      first_name,
      second_name,
      display_name,
      phone,
      change_data,
      change_password,
      logout,
    }),
  );
};
