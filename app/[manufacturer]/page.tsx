"use client";
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

  // delete the repeated data:
  const uniqeData : Makes[] = [];
  const seen = new Set();

  data?.Results?.forEach((item) => {
    if (!seen.has(item.Make_ID)) {
      seen.add(item.Make_ID);
      uniqeData.push(item);
    }
  });

  // wrong manufacturer ID error Handling
  if (findNameEror) return <div>This Manufacturer Id does not exist!</div>;

  return (
    <div>
      {uniqeData?.map((make) => (
        <div key={make.Make_ID}>
          {make.Make_Name} : {make.Make_ID}
        </div>
      ))}
      <div>this is manufacturer page : {params.manufacturer}</div>
    </div>
  );
}
