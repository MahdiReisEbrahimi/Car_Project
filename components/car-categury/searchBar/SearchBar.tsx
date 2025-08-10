"use client";
import { Combobox } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/index";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
  filterMakes,
  filterManufacturers,
  setCurrentMakesPage,
  setFilteredBy,
} from "@/store/slices/CarFilterReducer";
import SearchTriggerButton from "./SearchTriggerButton";
import SearchInput from "./SearchInput";
import SearchOptions from "./SearchOptions";
import { useSearchFiltering } from "@/hooks/useSearchFiltering";

interface SearchBarProps {
  searchByField: "manufacturers" | "makes" | "year";
}

export default function SearchBar({ searchByField }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
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

  // custom hook for filtering
  useSearchFiltering(searchByField, query, selected);

  useEffect(() => {
    setIsClicked(filterBy === searchByField);
  }, [filterBy, searchByField]);

  useClickOutside(divRef, () => setShowOptions(false));

  // when typing in the input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    setShowOptions(true);
    if (searchByField === "makes") {
      dispatch(setCurrentMakesPage(1)); // reset to page 1 when searching
    }
  };

  // when an option is selected
  const handleSelect = (value: string) => {
    setSelected(value);
    setQuery(value); // keep it in the input after selection
    dispatch(
      searchByField === "manufacturers"
        ? filterManufacturers(value)
        : filterMakes(value)
    );
  };

  const handleSearchByClick = () => {
    setIsClicked(true);
    dispatch(setFilteredBy(searchByField));
  };

  return (
    <div ref={divRef} className="min-w-50 mb-6">
      {!isClicked ? (
        <SearchTriggerButton
          onClick={handleSearchByClick}
          label={searchByField}
        />
      ) : (
        <Combobox
          value={query} // control the displayed value by query
          onChange={handleSelect}
          // no onClose that clears query
          __demoMode
        >
          <SearchInput
            searchByField={searchByField}
            value={query} // pass query to keep text after closing
            onFocus={() => setShowOptions(true)}
            onChange={handleInputChange}
            onButtonClick={() => setShowOptions(true)}
          />

          {showOptions && (
            <SearchOptions
              filterBy={filterBy}
              filteredOptions={filteredOptions}
            />
          )}
        </Combobox>
      )}
    </div>
  );
}
