"use client";

import { CustomButtonProps } from "@/types";

export default function CustomButton({
  type,
  title,
  buttonStyle,
  handleClick,
}: CustomButtonProps) {
  const className = `bg-white cursor-pointer hover:bg-gray-300 rounded-sm font-bold text-black p-2 ${buttonStyle}`;
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
