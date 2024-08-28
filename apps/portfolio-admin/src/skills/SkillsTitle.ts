import { Skills as TSkills } from "../api/skills/Skills";

export const SKILLS_TITLE_FIELD = "skillName";

export const SkillsTitle = (record: TSkills): string => {
  return record.skillName?.toString() || String(record.id);
};
