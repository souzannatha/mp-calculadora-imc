import React, { LabelHTMLAttributes } from "react";

export function Label({
  text,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { text: string }) {
  return (
    <label className="block text-neutral-600 font-light text-base" {...props}>
      {text}
    </label>
  );
}
