"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import carLogo from "@/public/car-logo.svg";
import Image from "next/image";
import { FaArrowAltCircleDown, FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/index";
import { useClickOutside } from "@/hooks/useClickOutside";
import { filterManufacturers } from "@/store/slices/CarFilterReducer";

interface SearchBar {
  searchByField: string;
}
export default function SearchBar({ searchByField }: SearchBar) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const filteredManufacturers = useSelector(
    (state: RootState) => state.carFilter.filteredManufacturers
  );
  const filterBy = useSelector((state: RootState) => state.carFilter.filterBy);
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(
    filterBy === searchByField ? true : false
  );

  useClickOutside(divRef, () => setShowOptions(false));

  useEffect(() => {
    if (query === "") dispatch(filterManufacturers(selected));
    else dispatch(filterManufacturers(query));
  }, [query, selected]);

  function handleFocus() {
    setShowOptions(true);
  }

  function inputHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    setShowOptions(true);
  }

  function buttonClickHandler() {
    setShowOptions(true);
  }

  function searchByClickHandler() {
    setIsClicked(true);
  }
  return (
    <div ref={divRef} className="mx-4 w-55 mb-3">
      {!isClicked ? (
        <p
          onClick={searchByClickHandler}
          className="text-center cursor-pointer hover:text-white hover:bg-blue-900 text-blue-900 bg-blue-200 rounded-sm font-bold p-2"
        >
          Search By {searchByField}
        </p>
      ) : (
        <Combobox
          value={selected}
          onChange={(value: string) => {
            setSelected(value);
            dispatch(filterManufacturers(value));
          }}
          onClose={() => setQuery("")}
          __demoMode
        >
          <div className="relative">
            <div className="flex items-center justify-around mb-3 bg-gray-200 color-black rounded-lg ">
              <Image src={carLogo} alt="carLogo" />
              <ComboboxInput
                placeholder="select company"
                onFocus={handleFocus}
                className="w-3/5 m-auto p-2 border-none focus:border-none focus:outline-none focus:ring-0 focus-visible:outline-none"
                displayValue={(manufacturer: string) => manufacturer}
                onChange={inputHandleChange}
                autoComplete="off"
              />
            </div>

            <ComboboxButton
              onClick={buttonClickHandler}
              className="group absolute inset-y-0 right-0 px-2.5"
            >
              <FaArrowAltCircleDown
                color="black"
                className="text-2xl hover:cursor-pointer"
              />
            </ComboboxButton>
          </div>
          {showOptions && (
            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx(
                "h-50 overflow-y-auto [w:(--input-width)] min-w-40 rounded-xl border border-white/5 bg-black p-1 [--anchor-gap:--spacing(1)] empty:invisible",
                "transition duration-100 ease-in data-leave:data-closed:opacity-0"
              )}
            >
              {filteredManufacturers?.map((manufacturer) => (
                <ComboboxOption
                  key={manufacturer.Mfr_ID}
                  value={manufacturer.Mfr_CommonName}
                  className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10 hover:cursor-pointer"
                >
                  <FaRegCheckCircle className="invisible size-4 fill-white group-data-selected:visible" />
                  <div className="text-sm/6 text-white">
                    {manufacturer.Mfr_CommonName}
                  </div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </Combobox>
      )}
    </div>
  );
}
