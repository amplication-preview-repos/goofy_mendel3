import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserChatRoomServiceBase } from "./base/userChatRoom.service.base";

@Injectable()
export class UserChatRoomService extends UserChatRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
