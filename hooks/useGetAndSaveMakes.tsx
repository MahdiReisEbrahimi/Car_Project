import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Make } from "@/types";
import { useGetAllMakesQuery } from "@/store/API/carsApi";
import { setMakes, filterMakes } from "@/store/slices/CarFilterReducer";

export const useGetAndSaveMakes = (): {
  makes: Make[] | null;
  isFetching: boolean;
  error: boolean;
  refetch: () => void;
} => {
  const dispatch = useDispatch();

  const makes = useSelector((state: RootState) => state.carFilter.wholeMakes);

  const {
    data: fetchedMakes,
    isFetching,
    error,
    refetch,
  } = useGetAllMakesQuery(undefined, {
    skip: makes !== null, // when we have makes on redux, dont request to server
  });

  // if data is fetched from server , save it on redux
  useEffect(() => {
    if (fetchedMakes && makes === null) {
      // save only first 100 makes to reduce payload size
      const limitedMakes = fetchedMakes.slice(0, 100);
      dispatch(setMakes(limitedMakes));
    }
  }, [fetchedMakes, dispatch, makes]);

  // refreshing filtered makes.
  useEffect(() => {
    if (makes) {
      dispatch(filterMakes(null)); // filter refreshed to null
    }
  }, [makes, dispatch]);

  return {
    makes,
    isFetching: makes === null && isFetching,
    error: !!error,
    refetch,
  };
};
