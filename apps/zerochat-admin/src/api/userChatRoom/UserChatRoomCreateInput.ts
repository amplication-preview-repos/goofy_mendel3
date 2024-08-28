import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserChatRoomCreateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
