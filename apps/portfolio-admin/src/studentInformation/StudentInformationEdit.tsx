import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StudentInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="course" source="course" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="enrollmentNumber" source="enrollmentNumber" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
