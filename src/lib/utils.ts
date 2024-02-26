import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getFormattedDate = (dateString: string) => {
  const options = {
    year: "2-digit",
    month: "long",
    day: "numeric",
  };

  // Parse the input date string
  const date = new Date(dateString);

  // Format the date
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Add the ordinal suffix
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return formattedDate.replace(/\d+$/, (match) => `${match}${suffix}`);
};
