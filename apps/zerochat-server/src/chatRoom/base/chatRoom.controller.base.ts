/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ChatRoomService } from "../chatRoom.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChatRoomCreateInput } from "./ChatRoomCreateInput";
import { ChatRoom } from "./ChatRoom";
import { ChatRoomFindManyArgs } from "./ChatRoomFindManyArgs";
import { ChatRoomWhereUniqueInput } from "./ChatRoomWhereUniqueInput";
import { ChatRoomUpdateInput } from "./ChatRoomUpdateInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { UserChatRoomFindManyArgs } from "../../userChatRoom/base/UserChatRoomFindManyArgs";
import { UserChatRoom } from "../../userChatRoom/base/UserChatRoom";
import { UserChatRoomWhereUniqueInput } from "../../userChatRoom/base/UserChatRoomWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChatRoomControllerBase {
  constructor(
    protected readonly service: ChatRoomService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChatRoom })
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createChatRoom(
    @common.Body() data: ChatRoomCreateInput
  ): Promise<ChatRoom> {
    return await this.service.createChatRoom({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ChatRoom] })
  @ApiNestedQuery(ChatRoomFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async chatRooms(@common.Req() request: Request): Promise<ChatRoom[]> {
    const args = plainToClass(ChatRoomFindManyArgs, request.query);
    return this.service.chatRooms({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async chatRoom(
    @common.Param() params: ChatRoomWhereUniqueInput
  ): Promise<ChatRoom | null> {
    const result = await this.service.chatRoom({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateChatRoom(
    @common.Param() params: ChatRoomWhereUniqueInput,
    @common.Body() data: ChatRoomUpdateInput
  ): Promise<ChatRoom | null> {
    try {
      return await this.service.updateChatRoom({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteChatRoom(
    @common.Param() params: ChatRoomWhereUniqueInput
  ): Promise<ChatRoom | null> {
    try {
      return await this.service.deleteChatRoom({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/messages")
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async findMessages(
    @common.Req() request: Request,
    @common.Param() params: ChatRoomWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessages(params.id, {
      ...query,
      select: {
        chatRoom: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "update",
    possession: "any",
  })
  async connectMessages(
    @common.Param() params: ChatRoomWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        connect: body,
      },
    };
    await this.service.updateChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "update",
    possession: "any",
  })
  async updateMessages(
    @common.Param() params: ChatRoomWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        set: body,
      },
    };
    await this.service.updateChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "update",
    possession: "any",
  })
  async disconnectMessages(
    @common.Param() params: ChatRoomWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        disconnect: body,
      },
    };
    await this.service.updateChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/userChatRooms")
  @ApiNestedQuery(UserChatRoomFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserChatRoom",
    action: "read",
    possession: "any",
  })
  async findUserChatRooms(
    @common.Req() request: Request,
    @common.Param() params: ChatRoomWhereUniqueInput
  ): Promise<UserChatRoom[]> {
    const query = plainToClass(UserChatRoomFindManyArgs, request.query);
    const results = await this.service.findUserChatRooms(params.id, {
      ...query,
      select: {
        chatRoom: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userChatRooms")
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "update",
    possession: "any",
  })
  async connectUserChatRooms(
    @common.Param() params: ChatRoomWhereUniqueInput,
    @common.Body() body: UserChatRoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userChatRooms: {
        connect: body,
      },
    };
    await this.service.updateChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userChatRooms")
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "update",
    possession: "any",
  })
  async updateUserChatRooms(
    @common.Param() params: ChatRoomWhereUniqueInput,
    @common.Body() body: UserChatRoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userChatRooms: {
        set: body,
      },
    };
    await this.service.updateChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userChatRooms")
  @nestAccessControl.UseRoles({
    resource: "ChatRoom",
    action: "update",
    possession: "any",
  })
  async disconnectUserChatRooms(
    @common.Param() params: ChatRoomWhereUniqueInput,
    @common.Body() body: UserChatRoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userChatRooms: {
        disconnect: body,
      },
    };
    await this.service.updateChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }
}