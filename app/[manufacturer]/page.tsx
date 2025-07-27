"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useFindManufacturerName } from "@/hooks/useFindManufacturerName";
import { useGetMakesByManufacturerQuery } from "@/store/API/carsApi";
import { Makes } from "@/types";

export default function ManufacturerDetail() {
  const params = useParams();

  const {
    manufacturerName,
    isLoading,
    error: findNameEror,
  } = useFindManufacturerName(Number(params.manufacturer));

  const { data, error: getMakesError } = useGetMakesByManufacturerQuery({
    manufacturerName: manufacturerName ? manufacturerName : "",
  });

  if (findNameEror) return <div>This Manufacturer Id does not exist!</div>;

  return (
    <div>
      {data?.Results?.map((make) => (
        <div key={make.Make_ID}>
          {make.Make_Name} : {make.Make_ID}
        </div>
      ))}
      <div>this is manufacturer page : {params.manufacturer}</div>
    </div>
  );
}
