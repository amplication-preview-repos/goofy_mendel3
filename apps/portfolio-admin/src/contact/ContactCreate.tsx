import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="linkedIn" source="linkedIn" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
