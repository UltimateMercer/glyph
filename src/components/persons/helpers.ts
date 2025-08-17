import type { Person } from "@/schemas/persons";

export const getPersonImage = (person: Person) => {
  if (person.portraits && person.portraits.length > 0) {
    // return person.portraits[0].url;
    return "/persons/user.jpg";
  }
  return "/persons/user.jpg";
};
