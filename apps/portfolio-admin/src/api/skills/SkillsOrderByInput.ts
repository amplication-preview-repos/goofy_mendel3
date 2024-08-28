import { SortOrder } from "../../util/SortOrder";

export type SkillsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  proficiencyLevel?: SortOrder;
  skillName?: SortOrder;
  updatedAt?: SortOrder;
};
