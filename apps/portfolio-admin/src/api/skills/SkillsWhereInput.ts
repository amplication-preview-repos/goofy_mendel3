import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SkillsWhereInput = {
  id?: StringFilter;
  proficiencyLevel?: "Option1";
  skillName?: StringNullableFilter;
};
