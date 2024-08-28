import { InputJsonValue } from "../../types";
import { UserChatRoomCreateNestedManyWithoutUsersInput } from "./UserChatRoomCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userChatRooms?: UserChatRoomCreateNestedManyWithoutUsersInput;
  username: string;
};
