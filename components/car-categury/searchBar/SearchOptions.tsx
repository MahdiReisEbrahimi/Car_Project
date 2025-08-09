import { ComboboxOption, ComboboxOptions } from "@headlessui/react";
import clsx from "clsx";
import { FaRegCheckCircle } from "react-icons/fa";
import { Make, Manufacturer } from "@/types";

interface SearchOptionsProps {
  filterBy: "manufacturers" | "makes" | string;
  filteredOptions: (Make | Manufacturer)[] | null;
}

export default function SearchOptions({
  filterBy,
  filteredOptions,
}: SearchOptionsProps) {
  return (
    <ComboboxOptions
      anchor="bottom"
      transition
      className={clsx(
        "mt-2 max-h-60 overflow-y-auto rounded-xl border border-gray-700 bg-black/90 p-2 backdrop-blur-md shadow-xl",
        "transition duration-200 ease-in data-leave:data-closed:opacity-0"
      )}
    >
      {filterBy === "manufacturers"
        ? filteredOptions?.map((option) => {
            const manufacturer = option as Manufacturer;
            return (
              <ComboboxOption
                key={manufacturer.Mfr_ID}
                value={manufacturer.Mfr_CommonName}
                className="group flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 transition-all text-sm text-white"
              >
                <FaRegCheckCircle className="invisible text-white group-data-selected:visible" />
                <span>{manufacturer.Mfr_CommonName}</span>
              </ComboboxOption>
            );
          })
        : filteredOptions?.map((option) => {
            const make = option as Make;
            return (
              <ComboboxOption
                key={make.Make_ID}
                value={make.Make_Name}
                className="group flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 transition-all text-sm text-white"
              >
                <FaRegCheckCircle className="invisible text-white group-data-selected:visible" />
                <span>{make.Make_Name}</span>
              </ComboboxOption>
            );
          })}
    </ComboboxOptions>
  );
}
