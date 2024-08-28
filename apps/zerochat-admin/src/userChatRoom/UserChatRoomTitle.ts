import { UserChatRoom as TUserChatRoom } from "../api/userChatRoom/UserChatRoom";

export const USERCHATROOM_TITLE_FIELD = "id";

export const UserChatRoomTitle = (record: TUserChatRoom): string => {
  return record.id?.toString() || String(record.id);
};
