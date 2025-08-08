import { ComboboxOption } from "@headlessui/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Manufacturer, Make } from "@/types";

export default function SearchOptionsList({ options, filterBy }: { options: (Manufacturer | Make)[] | null; filterBy: string }) {
  if (!options) return null;

  return (
    <>
      {filterBy === "manufacturers"
        ? options.map((manufacturer) => (
            <ComboboxOption
              key={(manufacturer as Manufacturer).Mfr_ID}
              value={(manufacturer as Manufacturer).Mfr_CommonName}
              className="group flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 transition-all text-sm text-white"
            >
              <FaRegCheckCircle className="invisible text-white group-data-selected:visible" />
              <span>{(manufacturer as Manufacturer).Mfr_CommonName}</span>
            </ComboboxOption>
          ))
        : options.map((make) => (
            <ComboboxOption
              key={(make as Make).Make_ID}
              value={(make as Make).Make_Name}
              className="group flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 transition-all text-sm text-white"
            >
              <FaRegCheckCircle className="invisible text-white group-data-selected:visible" />
              <span>{(make as Make).Make_Name}</span>
            </ComboboxOption>
          ))}
    </>
  );
}
