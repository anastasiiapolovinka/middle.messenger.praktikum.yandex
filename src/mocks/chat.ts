import content from "../images/content.png";
import avatar from "../images/avatar.png";

interface Message {
  text: string;
  time: string;
  type: "incoming" | "outgoing";
  image?: string;
}

const messages: Message[] = [
  {
    text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
    time: "11:56",
    type: "incoming",
    image: content,
  },
  {
    text: "Круто!",
    time: "12:00",
    type: "outgoing",
  },
];

const messages1: Message[] = [
  {
    text: "Знаешь, какой был первый программируемый компьютер? Это был ENIAC — он занимал 167 м² и весил 27 тонн! Работал на лампах и потреблял 150 кВт электроэнергии.",
    time: "10:30",
    type: "incoming",
  },
  {
    text: "Ничего себе! А сколько он мог вычислений делать?",
    time: "10:32",
    type: "outgoing",
  },
  {
    text: "До 5000 операций в секунду — по тем временам это было невероятно!",
    time: "10:35",
    type: "incoming",
  },
];

const messages2: Message[] = [
  {
    text: "Я начал читать 'Марсианина' Энди Вейра. Очень крутая книга! Там рассказывается о выживании астронавта на Марсе.",
    time: "14:15",
    type: "incoming",
  },
  {
    text: "Слышал про нее! Там же главный герой использует картошку, чтобы выжить?",
    time: "14:17",
    type: "outgoing",
  },
  {
    text: "Да, он выращивает картошку в марсианском грунте, используя свои отходы как удобрения 😆.",
    time: "14:20",
    type: "incoming",
  },
];

const messages3: Message[] = [
  {
    text: "Видел новости? Недавно ученые подтвердили, что на спутнике Юпитера — Европе — действительно есть подповерхностный океан!",
    time: "09:10",
    type: "incoming",
  },
  {
    text: "Да, читал про это. Думаешь, там может быть жизнь?",
    time: "09:12",
    type: "outgoing",
  },
  {
    text: "Есть вероятность! Вода + энергия = возможные микроорганизмы. Будем ждать будущих миссий!",
    time: "09:15",
    type: "incoming",
  },
];

type ChatItem = {
  id: number;
  sender: string;
  avatar: string;
  preview: string;
  messages: Message[];
};

export const chatList: ChatItem[] = [
  {
    id: 1,
    sender: "Андрей",
    avatar,
    preview: "Изображение",
    messages: messages,
  },
  {
    id: 2,
    sender: "Киноклуб",
    avatar,
    preview: "Вы: стикер",
    messages: messages1,
  },
  {
    id: 3,
    sender: "Илья",
    avatar,
    preview: "Друзья, у меня для вас особенный выруск новостей!",
    messages: messages2,
  },
  {
    id: 4,
    sender: "Вадим",
    avatar,
    preview: "Вы: круто!",
    messages: messages3,
  },
];
