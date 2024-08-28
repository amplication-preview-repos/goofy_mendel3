import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserChatRoomUpdateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
