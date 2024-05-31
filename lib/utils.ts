import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUrlsArray(urlsString: string): string[] {
  return urlsString.split("\n").filter((url) => url.trim() !== "");
}
export function formatData(timestamp: string | number): string {
  // Ensure timestamp is a number
  const numericTimestamp =
    typeof timestamp === "string" ? Number(timestamp) : timestamp;

  // Convert timestamp to a Date object
  const date = new Date(numericTimestamp);

  // Check if the date is valid
  if (!isNaN(date.getTime())) {
    // Extract year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  } else {
    throw new Error("Invalid Date");
  }
}

export function isDone(status: any): boolean {
  return status?.status === "achevée" || status?.status === "fermée";
}
export function isNow(status: any): boolean {
  return status?.status !== "to do";
}
