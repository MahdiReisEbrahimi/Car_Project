"use client";
import { useGetAllManufacturersQuery } from "@/store/API/carsApi";
import CarsPrint from "./CarsPrint";
import { useDispatch } from "react-redux";
import { setManufacturers } from "@/store/slices/CarFilterReducer";
import { useEffect } from "react";

export default function ManufacturersPrint() {
  const { data: manufacturers, isLoading: isManufacturersLoading } =
    useGetAllManufacturersQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    const tempManufac = manufacturers?.filter(
      (manufacturer) => manufacturer.Mfr_CommonName !== null
    );
    if (tempManufac && !isManufacturersLoading)
      dispatch(setManufacturers(tempManufac));
  }, [isManufacturersLoading, manufacturers, dispatch]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-2 border rounded-2xl p-4">
      {isManufacturersLoading ? (
        <p>Loading...</p>
      ) : (
        manufacturers?.map(
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
