import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHATROOM_TITLE_FIELD } from "./ChatRoomTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ChatRoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Message"
          target="chatRoomId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="chatRoom"
              source="chatroom.id"
              reference="ChatRoom"
            >
              <TextField source={CHATROOM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserChatRoom"
          target="chatRoomId"
          label="UserChatRooms"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="chatRoom"
              source="chatroom.id"
              reference="ChatRoom"
            >
              <TextField source={CHATROOM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
