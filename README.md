# Polovinka Messenger

Polovinka Messenger - это приложение для обмена сообщениями.

## Начало работы

### Предварительные требования

Убедитесь, что на вашем компьютере установлены следующие программы:

- Node.js
- npm (Node Package Manager)

### Установка

1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/anastasiiapolovinka/polovinka_messenger.git
   ```
2. Перейдите в директорию проекта:
   ```sh
   cd polovinka_messenger
   ```
3. Установите зависимости:
   ```sh
   npm install
   ```

### Использование

#### Сервер разработки

Чтобы запустить сервер разработки, выполните:

```sh
npm run dev
```

#### Сборка

Чтобы собрать проект, выполните:

```sh
npm run build
```

#### Запуск

Чтобы запустить сервер в режиме продакшн, выполните:

```sh
npm run start
```

### Страницы

Вот ссылки на все страницы:

- [Чат](https://polovinka-messanger.netlify.app/messanger)
- [Вход](https://polovinka-messanger.netlify.app)
- [Регистрация](https://polovinka-messanger.netlify.app/register)
- [Профиль](https://polovinka-messanger.netlify.app/profile)
- [Изменение пароля](https://polovinka-messanger.netlify.app/editpassword)
- [Обновить данные профиля](https://polovinka-messanger.netlify.app/edituserdata)
- [404 - Не найдено](https://polovinka-messanger.netlify.app/404)
- [500 - Ошибка сервера](https://polovinka-messanger.netlify.app/500)

## Features

### Обновление: Real-time сообщения + управление чатами

- Мгновенная отправка и получение сообщений.
- Автоматическое переподключение при разрыве соединения.
- Создание чатов – теперь можно создавать новые чаты прямо в интерфейсе.
- Управление пользователями – добавление/удаление пользователей из чатов.

#### Как это работает?

- При входе в чат устанавливается **WebSocket**-соединение.
- Сообщения отправляются моментально без обновления страницы.
- В случае разрыва соединения выполняется **авто-переподключение**
- Можно добавлять или удалять пользователей.
- Можно создавать новые чаты.
