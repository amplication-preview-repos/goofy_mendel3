import { SortOrder } from "../../util/SortOrder";

export type ExperienceOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
