import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  type: "button" | "submit";
  title: string;
  buttonStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchBarProps {
  placeholder: string;
  hasIcon: boolean;
}