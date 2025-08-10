import { ComboboxInput, ComboboxButton } from "@headlessui/react";
import { FaArrowAltCircleDown } from "react-icons/fa";

interface SearchInputProps {
  searchByField: "manufacturers" | "makes" | "year";
  onFocus: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  value: string;
}

export default function SearchInput({
  searchByField,
  onFocus,
  onChange,
  onButtonClick,
  value,
}: SearchInputProps) {
  return (
    <div className="relative bg-white rounded-sm px-4 py-[10px] min-w-60 text-white shadow-inner backdrop-blur-sm">
      <ComboboxInput
        value={value ? value : ""} // controlled input to prevent losing text
        placeholder={
          searchByField === "manufacturers"
            ? "Enter Manufacturer"
            : searchByField === "makes"
            ? "Enter Makes"
            : "Enter Year"
        }
        onFocus={onFocus}
        className=" bg-transparent placeholder:text-gray-800 text-black focus:outline-none"
        displayValue={(val: string) => val}
        onChange={onChange}
        autoComplete="off"
      />

      <ComboboxButton
        onClick={onButtonClick}
        className="absolute inset-y-0 right-2 flex items-center justify-center"
      >
        <FaArrowAltCircleDown className="text-gray-800 text-xl hover:scale-110 transition" />
      </ComboboxButton>
    </div>
  );
}
