/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { Type } from "class-transformer";
import { UserChatRoomUpdateManyWithoutChatRoomsInput } from "./UserChatRoomUpdateManyWithoutChatRoomsInput";

@InputType()
class ChatRoomUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutChatRoomsInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutChatRoomsInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutChatRoomsInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutChatRoomsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserChatRoomUpdateManyWithoutChatRoomsInput,
  })
  @ValidateNested()
  @Type(() => UserChatRoomUpdateManyWithoutChatRoomsInput)
  @IsOptional()
  @Field(() => UserChatRoomUpdateManyWithoutChatRoomsInput, {
    nullable: true,
  })
  userChatRooms?: UserChatRoomUpdateManyWithoutChatRoomsInput;
}

export { ChatRoomUpdateInput as ChatRoomUpdateInput };
