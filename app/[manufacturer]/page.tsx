"use client";
import { useParams } from "next/navigation";
import { useFindManufacturerName } from "@/hooks/useFindManufacturerName";
import { useGetMakesByManufacturerQuery } from "@/store/API/carsApi";
import { Makes } from "@/types";
import MakesPrint from "./MakesPrint";

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
  const uniqeData: Makes[] = [];
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
    <div className="px-4 py-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          {manufacturerName}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          {manufacturerName} is one of the{" "}
          <span className="font-semibold text-pink-600">
            biggest car manufacturers
          </span>{" "}
          in the world, known for innovation and performance across various
          models.
        </p>
        <p className="mt-4 text-base font-medium text-gray-700">
          🚗 Cars Available:{" "}
          <span className="text-pink-600">{uniqeData.length}</span>
        </p>
      </div>
      {/*Available Cars grid*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {uniqeData?.map((make) => (
          <MakesPrint key={make.Make_ID} make={make} />
        ))}
      </div>
    </div>
  );
}
