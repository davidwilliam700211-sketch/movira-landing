"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-pink-600 hover:bg-pink-700 text-white",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white",
    outline: "border border-gray-600 text-white hover:bg-gray-800",
    ghost: "text-gray-300 hover:text-white",
    link: "text-pink-500 hover:underline px-0",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-lg",
    md: "px-4 py-2 text-base rounded-xl",
    lg: "px-6 py-3 text-lg rounded-2xl",
  };

  return (
    <button
      className={cn(
        "font-semibold transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
