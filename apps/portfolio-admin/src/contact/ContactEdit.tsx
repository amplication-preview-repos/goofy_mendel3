import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="linkedIn" source="linkedIn" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
