import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally merge Tailwind + custom class names.
 * Example:
 *   cn("px-4", isActive && "bg-pink-600", "text-white")
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
