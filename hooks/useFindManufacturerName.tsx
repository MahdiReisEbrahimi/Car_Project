import { useGetAllManufacturersQuery } from "@/store/API/carsApi";
import { setManufacturers } from "@/store/slices/CarFilterReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { RootState } from "@/store";

export function useFindManufacturerName(manufacturerId: number) {
  const dispatch = useDispatch();

  const manufacturers = useSelector(
    (state: RootState) => state.carFilter.wholeManufacturers
  );

  const {
    data: fetchedManufacturers,
    isLoading,
    isSuccess,
    error: fetchError,
  } = useGetAllManufacturersQuery(undefined, {
    skip: manufacturers !== null && manufacturers.length > 0, // Just when we have no data in store => take data.
  });

  // dispatch data into redux (if there was no data...)
  useEffect(() => {
    if (!manufacturers || manufacturers.length === 0) {
      if (isSuccess && fetchedManufacturers) {
        const validManufacturers = fetchedManufacturers.filter(
          (m) => m.Mfr_CommonName !== null
        );
        dispatch(setManufacturers(validManufacturers));
      }
    }
  }, [isSuccess, fetchedManufacturers, manufacturers, dispatch]);

  // lets find manufacturer name
  const manufacturerName = useMemo(() => {
    return manufacturers?.find((m) => m.Mfr_ID === manufacturerId)
      ?.Mfr_CommonName;
  }, [manufacturers, manufacturerId]);

  const idNotFoundError =
    !isLoading &&
    manufacturers &&
    manufacturers.length > 0 &&
    !manufacturerName;

  return {
    manufacturerName,
    isLoading,
    error: fetchError || (idNotFoundError && new Error("ID not found")),
  };
}
