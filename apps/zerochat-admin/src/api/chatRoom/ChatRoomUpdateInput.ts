import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { UserChatRoomUpdateManyWithoutChatRoomsInput } from "./UserChatRoomUpdateManyWithoutChatRoomsInput";

export type ChatRoomUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  name?: string | null;
  userChatRooms?: UserChatRoomUpdateManyWithoutChatRoomsInput;
};
