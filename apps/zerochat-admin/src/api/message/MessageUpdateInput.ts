import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type MessageUpdateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  content?: string | null;
  timestamp?: Date | null;
};
