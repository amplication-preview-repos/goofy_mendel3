import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserChatRoomModuleBase } from "./base/userChatRoom.module.base";
import { UserChatRoomService } from "./userChatRoom.service";
import { UserChatRoomController } from "./userChatRoom.controller";
import { UserChatRoomResolver } from "./userChatRoom.resolver";

@Module({
  imports: [UserChatRoomModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserChatRoomController],
  providers: [UserChatRoomService, UserChatRoomResolver],
  exports: [UserChatRoomService],
})
export class UserChatRoomModule {}
