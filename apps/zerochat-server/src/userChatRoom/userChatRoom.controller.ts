import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserChatRoomService } from "./userChatRoom.service";
import { UserChatRoomControllerBase } from "./base/userChatRoom.controller.base";

@swagger.ApiTags("userChatRooms")
@common.Controller("userChatRooms")
export class UserChatRoomController extends UserChatRoomControllerBase {
  constructor(
    protected readonly service: UserChatRoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
