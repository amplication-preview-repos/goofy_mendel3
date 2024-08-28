import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";
import { UserChatRoomCreateNestedManyWithoutChatRoomsInput } from "./UserChatRoomCreateNestedManyWithoutChatRoomsInput";

export type ChatRoomCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  name?: string | null;
  userChatRooms?: UserChatRoomCreateNestedManyWithoutChatRoomsInput;
};
