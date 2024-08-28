import { SortOrder } from "../../util/SortOrder";

export type StudentInformationOrderByInput = {
  course?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  enrollmentNumber?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
