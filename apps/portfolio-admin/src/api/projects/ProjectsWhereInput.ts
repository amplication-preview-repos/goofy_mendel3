import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  techStack?: StringNullableFilter;
  title?: StringNullableFilter;
};
