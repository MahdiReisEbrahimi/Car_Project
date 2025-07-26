"use client";
import {
  useGetAllManufacturersQuery,
} from "@/store/API/carsApi";

export default function ManufacturersPrint() {
  const { data: manufacturers, isLoading: isManufacturersLoading } = useGetAllManufacturersQuery();

  return (
    <div className="grid grid-cols-3 gap-2 border rounded-2xl p-4">
      {isManufacturersLoading ? (
        <p>Loading...</p>
      ) : (
        manufacturers?.map(
          (manufacturer) =>
            manufacturer.Mfr_CommonName !== null && (
              <h2
                key={manufacturer.Mfr_ID}
                className="border-b rounded-2xl p-2 text-sm bg-gray-400 cursor-pointer hover:bg-gray-300 text-center "
              >
                {manufacturer.Mfr_CommonName}
              </h2>
            )
        )
      )}
    </div>
  );
}
