import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentInformationWhereInput = {
  course?: StringNullableFilter;
  email?: StringNullableFilter;
  enrollmentNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
