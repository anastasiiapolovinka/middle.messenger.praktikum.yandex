import template from './index.tmpl';
import './index.scss';
import { profileLayout } from '../../../layout/profile';

export const editpassword = () => {
  const avatar = '/images/avatar.png';
  const oldPassword = ' Пароль';
  const newPassword = 'Новый пароль';
  const newPassword2 = 'Повторите новый пароль';
  const change_data = 'Сохранить';

  return profileLayout(
    template({
      avatar,
      oldPassword,
      newPassword,
      newPassword2,
      change_data,
    }),
  );
};
