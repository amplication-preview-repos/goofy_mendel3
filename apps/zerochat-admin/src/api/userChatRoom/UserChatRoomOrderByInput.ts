import { SortOrder } from "../../util/SortOrder";

export type UserChatRoomOrderByInput = {
  chatRoomId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
