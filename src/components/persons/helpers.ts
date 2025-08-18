import type { Person } from "@/schemas/persons";

export const getPersonImage = (person: Person) => {
  if (person.portraits && person.portraits.length > 0) {
    // return person.portraits[0].url;
    return "/persons/user.jpg";
  }
  return "/persons/user.jpg";
};

export const getThreatLevelColor = (level?: string) => {
  if (!level) return "bg-gray-500 text-white";
  switch (level.toLowerCase()) {
    case "omega":
      return "bg-red-500 text-white";
    case "critical":
      return "bg-orange-500 text-white";
    case "high":
      return "bg-yellow-500 text-black";
    case "medium":
      return "bg-blue-500 text-white";
    case "low":
      return "bg-green-500 text-white";
    case "allied":
      return "bg-green-500 text-white";
    case "deceased":
      return "bg-gray-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};
