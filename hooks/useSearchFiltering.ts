import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterMakes,
  filterManufacturers,
} from "@/store/slices/CarFilterReducer";

export function useSearchFiltering(
  searchByField: "manufacturers" | "makes" | "year",
  query: string,
  selected: string
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchByField === "manufacturers") {
      dispatch(filterManufacturers(query || selected));
    } else if (searchByField === "makes") {
      dispatch(filterMakes(query || selected));
    }
    // Add logic for year in the feauture...
  }, [query, selected, searchByField, dispatch]);
}
