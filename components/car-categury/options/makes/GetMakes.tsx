"use client";

import PrintMakes from './PrintMakes'
import { useGetAndSaveMakes } from "@/hooks/useGetAndSaveMakes";

export default function GetMakes() {
  const { error, makes, isLoading } = useGetAndSaveMakes();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-2 border rounded-2xl p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        makes?.map(
          (make) =>
            make.Make_Name !== null && (
              <PrintMakes key={make.Make_ID} make={make} />
            )
        )
      )}
    </div>
  );
}
