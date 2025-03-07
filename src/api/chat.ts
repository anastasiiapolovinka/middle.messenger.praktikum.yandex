import HttpClient from "../modules/HttpClient";

export type ChatProps = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  created_by: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  } | null;
};

type ChatTitle = { title: string };
type TokenProps = { token: string };
type UserBody = {
  users: number[];
  chatId: number;
};

const chatAPIInstance = new HttpClient(
  "https://ya-praktikum.tech/api/v2/chats",
);

export class ChatAPI {
  async getChatToken(chatId: string) {
    const data: TokenProps = await chatAPIInstance.post(`/token/${chatId}`);
    return data;
  }
  async getChats() {
    const data: ChatProps[] = await chatAPIInstance.get("");
    return data;
  }
  async createChat(body: ChatTitle) {
    const data: ChatProps[] = await chatAPIInstance.post("", body);
    return data;
  }
  async addUser(body: UserBody) {
    const data = await chatAPIInstance.put("/users", body);
    return data;
  }
  async deleteUser(body: UserBody) {
    const data = await chatAPIInstance.delete("/users", body);
    return data;
  }
}
