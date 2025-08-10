"use client";
import type { RootState } from "@/store/index";
import { useGetAllManufacturersQuery } from "@/store/API/carsApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setManufacturers } from "@/store/slices/CarFilterReducer";
import PrintManufacturers from "./PrintManufacturer";
import LoadingSpinner from "@/components/reusable/LoadingSpinner";
import Error from "@/components/errorTemplates/Error";
import ReloadButton from "@/components/reusable/ReloadButton";

export default function GetManufacturers() {
  const {
    data: manufacturers,
    isFetching,
    error,
    refetch,
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
      !isFetching &&
      (!wholeManufacturers || wholeManufacturers.length === 0)
    ) {
      dispatch(setManufacturers(tempManufac));
    }
  }, [manufacturers, isFetching, storedManufacturers, dispatch]);

  function reloadButtonHandler() {
    refetch();
  }

  return (
    <>
      {isFetching ? (
        <LoadingSpinner message="Fetching Manufacturers" />
      ) : error ? (
        <div className="flex flex-col items-center gap-8">
          <Error />
          <ReloadButton reloadButtonHandler={reloadButtonHandler} />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 border rounded-2xl p-4">
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
