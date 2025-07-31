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
      <div className="mb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            {manufacturerName}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-pink-600">
              {manufacturerName}
            </span>{" "}
            is one of the
            <span className="font-semibold text-pink-600">
              {" "}
              biggest car manufacturers{" "}
            </span>
            in the world — known for innovation and performance across various
            models.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-center">
          <div className="bg-white shadow rounded-xl p-5">
            <div className="text-pink-600 text-2xl font-bold">
              {uniqeData.length}
            </div>
            <div className="text-gray-500 mt-1">Cars Available</div>
          </div>
          <div className="bg-white shadow rounded-xl p-5">
            <div className="text-pink-600 text-lg font-semibold">
              {manufacturerDetail?.[0]?.City || "Unknown"}
            </div>
            <div className="text-gray-500 mt-1">City</div>
          </div>
          <div className="bg-white shadow rounded-xl p-5">
            <div className="text-pink-600 text-lg font-semibold">
              {manufacturerDetail?.[0]?.Country || "Unknown"}
            </div>
            <div className="text-gray-500 mt-1">Country</div>
          </div>
        </div>

        {/* Contact & Address Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <div className="text-sm text-gray-500 mb-1">📍 Address</div>
            <div className="text-gray-800 font-medium">
              {manufacturerDetail?.[0]?.Address || "No address available"}
            </div>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <div className="text-sm text-gray-500 mb-1">☎️ Contact Phone</div>
            <div className="text-gray-800 font-medium">
              {manufacturerDetail?.[0]?.ContactPhone ||
                "No phone number available"}
            </div>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm sm:col-span-2">
            <div className="text-sm text-gray-500 mb-1">📧 Contact Email</div>
            <div className="text-gray-800 font-medium break-words">
              {manufacturerDetail?.[0]?.ContactEmail || "No email available"}
            </div>
          </div>
        </div>
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
