"use client";
import { useParams } from "next/navigation";
import { useFindManufacturerName } from "@/hooks/useFindManufacturerName";
import {
  useGetMakesByManufacturerQuery,
  useGetManufacturerDetailQuery,
} from "@/store/API/carsApi";
import { Makes } from "@/types";
import MakesPrint from "./MakesPrint";
import ManufacturerDetailsPrint from "./ManufacturerDetailsPrint";
import Error from "@/components/errorTemplates/ٍٍError";
import LoadingSpinner from "@/components/reusable/LoadingSpinner";

export default function ManufacturerDetail() {
  const params = useParams();

  const {
    manufacturerName,
    isLoading: isMfr_NameLoading,
    error: findNameEror,
  } = useFindManufacturerName(Number(params.manufacturer));

  //====Taking manufacturer Detail from server:
  const {
    data: manufacturerDetail,
    isLoading: isMfr_detailLoading,
    error: manufacturerDetailError,
  } = useGetManufacturerDetailQuery(
    {
      manufacturerName: manufacturerName ? manufacturerName : "",
    },
    { skip: !manufacturerName }
  );
  //====

  const {
    data: makes,
    isLoading: isMakesLoading,
    error: getMakesError,
  } = useGetMakesByManufacturerQuery(
    {
      manufacturerName: manufacturerName ? manufacturerName : "",
    },
    {
      skip: !manufacturerName,
    }
  );

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
  if (findNameEror)
    return (
      <Error
        message={`This Manufacturer Id: (${params.manufacturer}) does not exist! Please Try With A Valid ID`}
      />
    );

  return (
    <div className="px-4 py-6">
      {findNameEror ? (
        <Error
          message={`This Manufacturer ID (${params.manufacturer}) is invalid. Please try a valid one.`}
        />
      ) : isMfr_detailLoading || isMfr_NameLoading ? (
        <LoadingSpinner message="Loading manufacturer details..." />
      ) : manufacturerDetailError ? (
        <Error message="Failed to fetch manufacturer details. Please try again later." />
      ) : (
        <ManufacturerDetailsPrint
          mfr_name={manufacturerName || "Unknown Manufacturer"}
          availableCarLength={uniqeData.length}
          city={manufacturerDetail?.[0]?.City || "Unknown"}
          country={manufacturerDetail?.[0]?.Country || "Unknown"}
          address={manufacturerDetail?.[0]?.Address || "Unknown"}
          contactPhone={manufacturerDetail?.[0]?.ContactPhone || "Unknown"}
          contactEmail={manufacturerDetail?.[0]?.ContactEmail || "Unknown"}
        />
      )}

      {/*Available Cars print*/}
      {isMakesLoading ? (
        <LoadingSpinner message="Makes are Loading" />
      ) : getMakesError ? (
        <Error message="Geting makes from server Error. please try again later." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {uniqeData?.map((make) => (
            <MakesPrint key={make.Make_ID} make={make} />
          ))}
        </div>
      )}
    </div>
  );
}
