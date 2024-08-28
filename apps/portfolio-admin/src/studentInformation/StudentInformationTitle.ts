import { StudentInformation as TStudentInformation } from "../api/studentInformation/StudentInformation";

export const STUDENTINFORMATION_TITLE_FIELD = "name";

export const StudentInformationTitle = (
  record: TStudentInformation
): string => {
  return record.name?.toString() || String(record.id);
};
