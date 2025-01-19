import { authLayout } from '../../layout/auth';
import template from './index.tmpl';
import './index.scss';

export const chat = () => {
  const chat = 'chat';

  return authLayout(
    template({
      chat,
    }),
  );
};
