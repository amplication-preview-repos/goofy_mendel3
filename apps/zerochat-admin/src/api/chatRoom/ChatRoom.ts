import { Message } from "../message/Message";
import { UserChatRoom } from "../userChatRoom/UserChatRoom";

export type ChatRoom = {
  createdAt: Date;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  updatedAt: Date;
  userChatRooms?: Array<UserChatRoom>;
};
