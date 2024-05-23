import React, { ButtonHTMLAttributes } from "react";

export function Button({
  text,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { text: string }) {
  return (
    <button
      {...props}
      className="mt-6 bg-rose-400 text-white font-bold w-full p-3 rounded"
    >
      {text}
    </button>
  );
}

export default Button;
