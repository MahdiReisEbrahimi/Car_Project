"use client";
import { Combobox, ComboboxOptions } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredBy, filterManufacturers } from "@/store/slices/CarFilterReducer";
import type { RootState } from "@/store/index";
import { useClickOutside } from "@/hooks/useClickOutside";
import SearchTriggerButton from "./SearchTriggerButton";
import SearchInputBox from "./SearchInputBox";
import SearchOptionsList from "./SearchOptionsList";
import clsx from "clsx";

export default function SearchBar({ searchByField }: { searchByField: "manufacturers" | "makes" | "year" }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  
  const filterBy = useSelector((state: RootState) => state.carFilter.filterBy);
  const filteredOptions = useSelector((state: RootState) =>
    filterBy === "manufacturers"
      ? state.carFilter.filteredManufacturers
      : state.carFilter.filteredMakes
  );

  const [isClicked, setIsClicked] = useState(filterBy === searchByField);

  useEffect(() => {
    setIsClicked(filterBy === searchByField);
  }, [filterBy]);

  useClickOutside(divRef, () => setShowOptions(false));

  useEffect(() => {
    dispatch(filterManufacturers(query || selected));
  }, [query, selected]);

  return (
    <div ref={divRef} className="mx-4 w-60 mb-6">
      {!isClicked ? (
        <SearchTriggerButton
          label={searchByField.charAt(0).toUpperCase() + searchByField.slice(1).toLowerCase()}
          onClick={() => {
            setIsClicked(true);
            dispatch(setFilteredBy(searchByField));
          }}
        />
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
          <SearchInputBox
            placeholder={`Enter ${searchByField}`}
            value={query}
            onChange={(e: any) => setQuery(e.target.value)}
            onFocus={() => setShowOptions(true)}
            onButtonClick={() => setShowOptions(true)}
          />

          {showOptions && (
            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx(
                "mt-2 max-h-60 overflow-y-auto rounded-xl border border-gray-700 bg-black/90 p-2 backdrop-blur-md shadow-xl",
                "transition duration-200 ease-in data-leave:data-closed:opacity-0"
              )}
            >
              <SearchOptionsList options={filteredOptions} filterBy={filterBy} />
            </ComboboxOptions>
          )}
        </Combobox>
      )}
    </div>
  );
}
