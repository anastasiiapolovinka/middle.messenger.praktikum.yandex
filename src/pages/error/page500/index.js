import { authLayout } from '../../../layout/auth';
import template from './index.tmpl';
import './index.scss';

export const page500 = () => {
  const title = '500';
  const errormassage = 'Мы уже фиксим';
  const linkButtonText = 'Назад к чатам';

  return authLayout(
    template({
      title,
      errormassage,
      linkButtonText,
    }),
  );
};
