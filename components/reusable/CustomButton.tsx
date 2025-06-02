"use client";

import { CustomButtonProps } from "@/types";

export default function CustomButton({
  type,
  title,
  buttonStyle,
  handleClick,
}: CustomButtonProps) {
  const className = `bg-blue-600 cursor-pointer hover:bg-blue-800 rounded-2xl text-white p-2 mt-6 ${buttonStyle}`;
  return (
    <button
      type={type}
      className={className}
      disabled={false}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
