import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-green-700 text-white hover:bg-gray-800",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
    tertiary: "bg-transparent text-blue-600 hover:underline px-0 py-0 rounded-none",
  };

  return (
    <button className={cn("cursor-pointer bg-green-700 hover:bg-gray-600 px-3 py-2 rounded-full shadow-md shadow-green-700/40 text-white text-md font-semibold", 
      variantStyles[variant],
      className
    )}
    {...props}
    >
      {children}
    </button>
  );
}