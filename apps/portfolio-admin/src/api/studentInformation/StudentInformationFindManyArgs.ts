import { StudentInformationWhereInput } from "./StudentInformationWhereInput";
import { StudentInformationOrderByInput } from "./StudentInformationOrderByInput";

export type StudentInformationFindManyArgs = {
  where?: StudentInformationWhereInput;
  orderBy?: Array<StudentInformationOrderByInput>;
  skip?: number;
  take?: number;
};
