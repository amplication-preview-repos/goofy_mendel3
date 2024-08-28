import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExperienceWhereInput = {
  company?: StringNullableFilter;
  description?: StringNullableFilter;
  duration?: StringNullableFilter;
  id?: StringFilter;
  role?: StringNullableFilter;
};
