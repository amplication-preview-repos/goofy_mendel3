import { SortOrder } from "../../util/SortOrder";

export type ProjectsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  techStack?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
