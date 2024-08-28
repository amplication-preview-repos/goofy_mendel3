import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserChatRoomResolverBase } from "./base/userChatRoom.resolver.base";
import { UserChatRoom } from "./base/UserChatRoom";
import { UserChatRoomService } from "./userChatRoom.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserChatRoom)
export class UserChatRoomResolver extends UserChatRoomResolverBase {
  constructor(
    protected readonly service: UserChatRoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
