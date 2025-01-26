import { authLayout } from '../../../layout/auth';
import template from './index.tmpl';
import './index.scss';

export const page404 = () => {
  const title = '404';
  const errormassage = 'Не туда попали';
  const linkButtonText = 'Назад к чатам';

  return authLayout(
    template({
      title,
      errormassage,
      linkButtonText,
    }),
  );
};
