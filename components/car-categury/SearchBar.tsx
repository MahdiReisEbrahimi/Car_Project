"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import carLogo from "@/public/car-logo.svg";
import Image from "next/image";
import { FaArrowAltCircleDown, FaRegCheckCircle } from "react-icons/fa";
import { manufacturers } from "@/constants/constants";

export default function SearchBar2() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer: string) => {
          return manufacturer.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="mx-auto w-75">
      <Combobox
        value={selected}
        onChange={(value: string) => setSelected(value)}
        onClose={() => setQuery("")}
        __demoMode
      >
        <div className="relative">
          <div className="flex items-center justify-around mb-3 bg-gray-200 color-black rounded-lg ">
            <Image src={carLogo} alt="carLogo" />
            <ComboboxInput
              className="w-3/5 p-2 border-none focus:border-none focus:outline-none focus:ring-0 focus-visible:outline-none"
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
            />
          </div>

          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <FaArrowAltCircleDown
              color="black"
              className="text-2xl hover:cursor-pointer"
            />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "max-h-40 overflow-y-auto w-(--input-width) rounded-xl border border-white/5 bg-black p-1 [--anchor-gap:--spacing(1)] empty:invisible",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0"
          )}
        >
          {filteredManufacturers.map((manufacturer) => (
            <ComboboxOption
              key={manufacturer}
              value={manufacturer}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10 hover:cursor-pointer"
            >
              <FaRegCheckCircle className="invisible size-4 fill-white group-data-selected:visible" />
              <div className="text-sm/6 text-white">{manufacturer}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
