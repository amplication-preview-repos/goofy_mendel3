/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserChatRoom as PrismaUserChatRoom,
  ChatRoom as PrismaChatRoom,
  User as PrismaUser,
} from "@prisma/client";

export class UserChatRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserChatRoomCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userChatRoom.count(args);
  }

  async userChatRooms(
    args: Prisma.UserChatRoomFindManyArgs
  ): Promise<PrismaUserChatRoom[]> {
    return this.prisma.userChatRoom.findMany(args);
  }
  async userChatRoom(
    args: Prisma.UserChatRoomFindUniqueArgs
  ): Promise<PrismaUserChatRoom | null> {
    return this.prisma.userChatRoom.findUnique(args);
  }
  async createUserChatRoom(
    args: Prisma.UserChatRoomCreateArgs
  ): Promise<PrismaUserChatRoom> {
    return this.prisma.userChatRoom.create(args);
  }
  async updateUserChatRoom(
    args: Prisma.UserChatRoomUpdateArgs
  ): Promise<PrismaUserChatRoom> {
    return this.prisma.userChatRoom.update(args);
  }
  async deleteUserChatRoom(
    args: Prisma.UserChatRoomDeleteArgs
  ): Promise<PrismaUserChatRoom> {
    return this.prisma.userChatRoom.delete(args);
  }

  async getChatRoom(parentId: string): Promise<PrismaChatRoom | null> {
    return this.prisma.userChatRoom
      .findUnique({
        where: { id: parentId },
      })
      .chatRoom();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userChatRoom
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
