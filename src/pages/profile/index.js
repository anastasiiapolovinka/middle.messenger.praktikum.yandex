import template from './index.tmpl';

export const profile = () => {
  return template({
    photo: 'фото',
    title: 'Профиль',
  });
};
