import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Manufacturer } from "@/types";

interface CarManufacturerState {
  filteredManufacturers: Manufacturer[] | null;
  wholeManufacturers: Manufacturer[] | null;
}

const initialState: CarManufacturerState = {
  wholeManufacturers: null,
  filteredManufacturers: null,
};

const carFilterSlice = createSlice({
  name: "carFilter",
  initialState,
  reducers: {
    setManufacturers(state , actions : PayloadAction<Manufacturer[]>) {
        state.wholeManufacturers = actions.payload;
        state.filteredManufacturers = actions.payload;
    },
    filterManufacturers(state, actions: PayloadAction<string | null>) {
      state.filteredManufacturers =
        state.wholeManufacturers?.filter((manufacturer) =>
          manufacturer.Mfr_Name.includes(actions.payload ?? "")
        ) || null;
    },
  },
});

export const { setManufacturers, filterManufacturers } = carFilterSlice.actions;
export default carFilterSlice.reducer;
