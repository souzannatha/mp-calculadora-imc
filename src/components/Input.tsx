import React, { InputHTMLAttributes } from "react";
import { cn } from "../lib/Utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      className={cn(
        "block w-full border border-rose-400 rounded p-3",
        className
      )}
      {...props}
    />
  );
}
