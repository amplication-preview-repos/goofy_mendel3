import { UserChatRoomWhereInput } from "./UserChatRoomWhereInput";
import { UserChatRoomOrderByInput } from "./UserChatRoomOrderByInput";

export type UserChatRoomFindManyArgs = {
  where?: UserChatRoomWhereInput;
  orderBy?: Array<UserChatRoomOrderByInput>;
  skip?: number;
  take?: number;
};
