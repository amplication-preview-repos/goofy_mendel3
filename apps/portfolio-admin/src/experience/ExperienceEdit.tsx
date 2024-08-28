import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ExperienceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="company" source="company" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="duration" source="duration" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
