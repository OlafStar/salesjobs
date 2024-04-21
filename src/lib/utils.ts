import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function daysFromToday(dateString: string): number {
  const targetDate = new Date(dateString);

  if (isNaN(targetDate.getTime())) {
    throw new Error("Invalid date format");
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const difference = targetDate.getTime() - today.getTime();

  const days = Math.round(difference / (1000 * 60 * 60 * 24));

  return days;
}

