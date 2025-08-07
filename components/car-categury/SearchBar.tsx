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
import { FaArrowAltCircleDown, FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/index";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
  filterManufacturers,
  setFilteredBy,
} from "@/store/slices/CarFilterReducer";
import { FaSearch } from "react-icons/fa";

interface SearchBar {
  searchByField: "manufacturers" | "makes" | "year";
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

  useEffect(() => {
    setIsClicked(filterBy === searchByField ? true : false);
  }, [filterBy]);

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

  // changing search method
  function searchByClickHandler() {
    setIsClicked(true);
    dispatch(setFilteredBy(searchByField));
  }

  return (
    <div ref={divRef} className="mx-4 w-60 mb-6">
      {!isClicked ? (
        <p
          onClick={searchByClickHandler}
          className="bg-gradient-to-r flex items-center gap-3 from-gray-500 to-gray-800 text-center text-sm font-semibold text-white py-2 px-4 rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
        >
          <span>
            <FaSearch />
          </span>
          Search by {searchByField}
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
          {/* Input Field Container */}
          <div className="relative bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white shadow-inner backdrop-blur-sm">
            <ComboboxInput
              placeholder={
                searchByField === "manufacturers"
                  ? "Enter Manufacturer"
                  : searchByField === "makes"
                  ? "Enter Make"
                  : "Enter Year"
              }
              onFocus={handleFocus}
              className="w-full bg-transparent placeholder:text-gray-400 text-white text-sm focus:outline-none"
              displayValue={(val: string) => val}
              onChange={inputHandleChange}
              autoComplete="off"
            />

            <ComboboxButton
              onClick={buttonClickHandler}
              className="absolute inset-y-0 right-2 flex items-center justify-center"
            >
              <FaArrowAltCircleDown className="text-gray-300 text-xl hover:scale-110 transition" />
            </ComboboxButton>
          </div>

          {/* Dropdown Options */}
          {showOptions && (
            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx(
                "mt-2 max-h-60 overflow-y-auto rounded-xl border border-gray-700 bg-black/90 p-2 backdrop-blur-md shadow-xl",
                "transition duration-200 ease-in data-leave:data-closed:opacity-0"
              )}
            >
              {filteredManufacturers?.map((manufacturer) => (
                <ComboboxOption
                  key={manufacturer.Mfr_ID}
                  value={manufacturer.Mfr_CommonName}
                  className="group flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 transition-all text-sm text-white"
                >
                  <FaRegCheckCircle className="invisible text-white group-data-selected:visible" />
                  <span>{manufacturer.Mfr_CommonName}</span>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </Combobox>
      )}
    </div>
  );
}
