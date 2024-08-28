import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "linkedIn";

export const ContactTitle = (record: TContact): string => {
  return record.linkedIn?.toString() || String(record.id);
};
