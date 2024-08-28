import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  linkedIn?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
