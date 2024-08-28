import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserChatRoomListRelationFilter } from "../userChatRoom/UserChatRoomListRelationFilter";

export type ChatRoomWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  userChatRooms?: UserChatRoomListRelationFilter;
};
