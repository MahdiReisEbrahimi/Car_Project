"use client";
import { useGetAllManufacturersQuery } from "@/store/API/carsApi";
import CarsPrint from "./CarsPrint";
import { useDispatch, useSelector } from "react-redux";
import { setManufacturers } from "@/store/slices/CarFilterReducer";
import { useEffect } from "react";
import type { RootState } from "@/store/index";

export default function ManufacturersPrint() {
  const { data: manufacturers, isLoading: isManufacturersLoading } =
    useGetAllManufacturersQuery();

  const dispatch = useDispatch();
  const storedManufacturers = useSelector(
    (state: RootState) => state.carFilter.filteredManufacturers
  );

  const wholeManufacturers = useSelector(
    (state: RootState) => state.carFilter.wholeManufacturers
  );

  useEffect(() => {
    const tempManufac = manufacturers?.filter(
      (manufacturer) => manufacturer.Mfr_CommonName !== null
    );

    if (
      tempManufac &&
      !isManufacturersLoading &&
      (!wholeManufacturers || wholeManufacturers.length === 0)
    ) {
      dispatch(setManufacturers(tempManufac));
    }
  }, [manufacturers, isManufacturersLoading, storedManufacturers, dispatch]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-2 border rounded-2xl p-4">
      {isManufacturersLoading ? (
        <p>Loading...</p>
      ) : (
        storedManufacturers?.map(
          (manufacturer) =>
            manufacturer.Mfr_CommonName !== null && (
              <CarsPrint
                key={manufacturer.Mfr_ID}
                manufacturer={manufacturer}
              />
            )
        )
      )}
    </div>
  );
}
