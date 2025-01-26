import template from './index.tmpl';
import './index.scss';
import { profileLayout } from '../../../layout/profile';

export const editusersdata = () => {
  const avatar = '/images/avatar.png';
  const title = '';
  const email = '';
  const login = '';
  const first_name = '';
  const second_name = '';
  const display_name = '';
  const phone = '';
  const change_data = 'Сохранить';

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
    }),
  );
};
