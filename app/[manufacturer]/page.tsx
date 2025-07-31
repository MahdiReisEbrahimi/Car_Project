"use client";
import { useParams } from "next/navigation";
import { useFindManufacturerName } from "@/hooks/useFindManufacturerName";
import {
  useGetMakesByManufacturerQuery,
  useGetManufacturerDetailQuery,
} from "@/store/API/carsApi";
import { Makes } from "@/types";
import MakesPrint from "./MakesPrint";
import { useEffect } from "react";
import ManufacturerDetailsPrint from "./ManufacturerDetailsPrint";

export default function ManufacturerDetail() {
  const params = useParams();

  const {
    manufacturerName,
    isLoading,
    error: findNameEror,
  } = useFindManufacturerName(Number(params.manufacturer));

  //====Taking manufacturer Detail from server:
  const { data: manufacturerDetail, error: manufacturerDetailError } =
    useGetManufacturerDetailQuery({
      manufacturerName: manufacturerName ? manufacturerName : "",
    });

  useEffect(() => {
    console.log(manufacturerDetail);
  }, [manufacturerDetail]);
  //====

  const { data: makes, error: getMakesError } = useGetMakesByManufacturerQuery({
    manufacturerName: manufacturerName ? manufacturerName : "",
  });

  // delete the repeated data:
  const uniqeData: Makes[] = [];
  const seen = new Set();

  makes?.Results?.forEach((item) => {
    if (!seen.has(item.Make_ID)) {
      seen.add(item.Make_ID);
      uniqeData.push(item);
    }
  });

  // wrong manufacturer ID error Handling
  if (findNameEror) return <div>This Manufacturer Id does not exist!</div>;

  return (
    <div className="px-4 py-6">
      <ManufacturerDetailsPrint
        mfr_name={manufacturerName || "NO MFR EXISTS WHITH THIS ID!"}
        availableCarLength={uniqeData.length}
        city={manufacturerDetail?.[0]?.City || "Unknown"}
        country={manufacturerDetail?.[0]?.Country || "Unknown"}
        address={manufacturerDetail?.[0]?.Address || "No address available"}
        contactPhone={
          manufacturerDetail?.[0]?.ContactPhone || "No phone number available"
        }
        contactEmail={
          manufacturerDetail?.[0]?.ContactEmail || "No email available"
        }
      />

      {/*Available Cars print*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {uniqeData?.map((make) => (
          <MakesPrint key={make.Make_ID} make={make} />
        ))}
      </div>
    </div>
  );
}
