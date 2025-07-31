import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Manufacturer } from "@/types";

interface CarManufacturerState {
  filteredManufacturers: Manufacturer[] | null;
  wholeManufacturers: Manufacturer[] | null;
  filterBy: string;
}

const initialState: CarManufacturerState = {
  wholeManufacturers: null,
  filteredManufacturers: null,
  filterBy: "manufacturers",
};

const carFilterSlice = createSlice({
  name: "carFilter",
  initialState,
  reducers: {
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
    setFilteredBy(state, actions: PayloadAction<string>) {
      state.filterBy = actions.payload;
    },
  },
});

export const { setManufacturers, filterManufacturers, setFilteredBy } =
  carFilterSlice.actions;
export default carFilterSlice.reducer;
