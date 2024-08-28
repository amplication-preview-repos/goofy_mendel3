import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProjectsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="link" source="link" />
        <TextInput label="techStack" source="techStack" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
