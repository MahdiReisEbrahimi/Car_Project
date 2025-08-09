"use client";
import type { RootState } from "@/store/index";
import { useGetAllManufacturersQuery } from "@/store/API/carsApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setManufacturers } from "@/store/slices/CarFilterReducer";
import PrintManufacturers from "./PrintManufacturer";
import LoadingSpinner from "@/components/reusable/LoadingSpinner";
import Error from "@/components/errorTemplates/Error";

export default function GetManufacturers() {
  const {
    data: manufacturers,
    isLoading: isManufacturersLoading,
    error,
  } = useGetAllManufacturersQuery();

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
    <>
      {isManufacturersLoading ? (
        <LoadingSpinner message="Fetching Manufacturers" />
      ) : error ? (
        <Error />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 border rounded-2xl p-4">
          {storedManufacturers?.map(
            (manufacturer) =>
              manufacturer.Mfr_CommonName !== null && (
                <PrintManufacturers
                  key={manufacturer.Mfr_ID}
                  manufacturer={manufacturer}
                />
              )
          )}
        </div>
      )}
    </>
  );
}
