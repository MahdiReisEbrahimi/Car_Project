import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CarType, FetchDataType, Manufacturer } from "@/types";

interface GetMakesByManufacturerIDQueryParams {
  manufacturerName: string;
}

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vpic.nhtsa.dot.gov/api",
    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", "y7GAhemKIY+asEz2rcM9/g==f2wSbEtjubIoYOWq");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // getCars: builder.query<CarType[], GetCarsQueryParams>({
    //   query: (params) => {
    //     const searchParams = new URLSearchParams();
    //     if (params.make) searchParams.append("make", params.make);
    //     if (params.model) searchParams.append("model", params.model);
    //     if (params.year) searchParams.append("year", params.year);

    //     return `/v1/cars?${searchParams.toString()}`;
    //   },
    // }),
    getAudiCars: builder.query<FetchDataType, void>({
      query: () => "/vehicles/GetModelsForMakeId/440?format=json",
    }),
    getAllManufacturers: builder.query<Manufacturer[], void>({
      query: () => "/vehicles/GetAllManufacturers?format=json&page=2",
      transformResponse: (response: { Results: Manufacturer[] }) =>
        response.Results,
    }),
    getAllMakes: builder.query<FetchDataType, void>({
      query: () => "/vehicles//GetAllMakes?format=json",
    }),
    getMakesByManufacturer: builder.query<
      FetchDataType,
      GetMakesByManufacturerIDQueryParams
    >({
      query: ({ manufacturerName }) =>
        `/vehicles/GetMakeForManufacturer/${manufacturerName}?format=json`,
    }),
  }),
});

export const {
  useGetAudiCarsQuery,
  useGetAllManufacturersQuery,
  useGetAllMakesQuery,
  useGetMakesByManufacturerQuery,
} = carsApi;
