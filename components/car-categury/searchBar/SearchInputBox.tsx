import { ComboboxInput, ComboboxButton } from "@headlessui/react";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function SearchInputBox({ placeholder, value, onChange, onFocus, onButtonClick }: any) {
  return (
    <div className="relative bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white shadow-inner backdrop-blur-sm">
      <ComboboxInput
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        className="w-full bg-transparent placeholder:text-gray-400 text-white text-sm focus:outline-none"
        displayValue={(val: string) => val}
        onChange={onChange}
        autoComplete="off"
      />

      <ComboboxButton
        onClick={onButtonClick}
        className="absolute inset-y-0 right-2 flex items-center justify-center"
      >
        <FaArrowAltCircleDown className="text-gray-300 text-xl hover:scale-110 transition" />
      </ComboboxButton>
    </div>
  );
}
