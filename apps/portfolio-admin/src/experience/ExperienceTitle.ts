import { Experience as TExperience } from "../api/experience/Experience";

export const EXPERIENCE_TITLE_FIELD = "company";

export const ExperienceTitle = (record: TExperience): string => {
  return record.company?.toString() || String(record.id);
};
