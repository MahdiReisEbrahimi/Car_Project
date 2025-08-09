import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Make, Manufacturer } from "@/types";

interface CarManufacturerState {
  filterBy: "manufacturers" | "makes" | "year";
  filteredManufacturers: Manufacturer[] | null;
  wholeManufacturers: Manufacturer[] | null;
  wholeMakes: Make[] | null; // change later
  filteredMakes: Make[] | null; // change later
  currentMakesPage: number;
}

const initialState: CarManufacturerState = {
  filterBy: "manufacturers",

  // states for filtering manufacturers
  wholeManufacturers: null,
  filteredManufacturers: null,

  // states for filtering makes
  wholeMakes: null,
  filteredMakes: null,
  currentMakesPage: 1,
};

const carFilterSlice = createSlice({
  name: "carFilter",
  initialState,
  reducers: {
    setFilteredBy(
      state,
      actions: PayloadAction<"manufacturers" | "makes" | "year">
    ) {
      state.filterBy = actions.payload;
    },

    // organization of Manufacturers in the state
    setManufacturers(state, actions: PayloadAction<Manufacturer[]>) {
      state.wholeManufacturers = actions.payload;
      state.filteredManufacturers = actions.payload;
    },
    filterManufacturers(state, actions: PayloadAction<string | null>) {
      state.filteredManufacturers =
        state.wholeManufacturers?.filter((manufacturer) =>
          manufacturer.Mfr_CommonName.toLowerCase().includes(
            actions.payload?.toLowerCase() ?? ""
          )
        ) || null;
    },

    // organization of makes in the state
    setMakes(state, actions: PayloadAction<Make[]>) {
      state.wholeMakes = actions.payload;
      state.filteredMakes = actions.payload;
    },
    filterMakes(state, actions: PayloadAction<string | null>) {
      state.filteredMakes =
        state.wholeMakes?.filter((make) =>
          make.Make_Name.toLowerCase().includes(
            actions.payload?.toLowerCase() ?? ""
          )
        ) || null;
    },
    setCurrentMakesPage(state, actions: PayloadAction<number>) {
      state.currentMakesPage = actions.payload;
    },
  },
});

export const {
  setMakes,
  filterMakes,
  setCurrentMakesPage,
  setManufacturers,
  filterManufacturers,
  setFilteredBy,
} = carFilterSlice.actions;
export default carFilterSlice.reducer;
