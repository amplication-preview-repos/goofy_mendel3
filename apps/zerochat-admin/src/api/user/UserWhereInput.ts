import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserChatRoomListRelationFilter } from "../userChatRoom/UserChatRoomListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userChatRooms?: UserChatRoomListRelationFilter;
  username?: StringFilter;
};
