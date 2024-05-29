import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUrlsArray(urlsString: string): string[] {
  return urlsString.split("\n").filter((url) => url.trim() !== "");
}
