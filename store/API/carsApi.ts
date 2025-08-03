import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchMakes, Make, Manufacturer, ManufacturerDetail } from "@/types";

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
    getAllManufacturers: builder.query<Manufacturer[], void>({
      query: () => "/vehicles/GetAllManufacturers?format=json&page=2",
      transformResponse: (response: { Results: Manufacturer[] }) =>
        response.Results,
    }),
    getAllMakes: builder.query<Make[], void>({
      query: () => "/vehicles//GetAllMakes?format=json",
      transformResponse: (response: { Results: Make[] }) => response.Results,
    }),
    getMakesByManufacturer: builder.query<
      FetchMakes,
      { manufacturerName: string }
    >({
      query: ({ manufacturerName }) =>
        `/vehicles/GetMakeForManufacturer/${manufacturerName}?format=json`,
    }),
    getManufacturerDetail: builder.query<
      ManufacturerDetail[],
      { manufacturerName: string }
    >({
      query: ({ manufacturerName }) =>
        `/vehicles/GetManufacturerDetails/${manufacturerName}?format=json`,
      transformResponse: (response: { Results: ManufacturerDetail[] }) =>
        response.Results,
    }),
  }),
});

export const {
  useGetAllManufacturersQuery,
  useGetAllMakesQuery,
  useGetMakesByManufacturerQuery,
  useGetManufacturerDetailQuery,
} = carsApi;
