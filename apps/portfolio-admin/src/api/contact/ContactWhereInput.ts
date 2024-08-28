import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContactWhereInput = {
  id?: StringFilter;
  linkedIn?: StringNullableFilter;
  phone?: StringNullableFilter;
};
