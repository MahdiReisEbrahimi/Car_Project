import { Makes } from "@/types";
import Image from "next/image";
import AudiCar from "@/public/AudiCar.png";

interface MakesPrintType {
  make: Makes;
}

export default function MakesPrint({ make }: MakesPrintType) {
  return (
    <div className="w-44 h-75 rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col justify-between">
      <div className="relative h-1/2 w-full bg-gray-50">
        <Image
          src={AudiCar}
          alt="audiCar"
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="h-1/2 bg-gradient-to-br from-pink-100 to-pink-200 text-gray-800 text-sm p-3 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-base truncate">{make.Make_Name}</h2>
          <p className="text-xs">🆔 ID: <span className="font-medium">{make.Make_ID}</span></p>
          <p className="text-xs">
            🏭 Manufacturer:{" "}
            <span className="font-medium">{make.Mfr_Name || "Unknown"}</span>
          </p>
        </div>

        <button className="mt-2 w-full text-center bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold py-1 px-2 rounded-md transition-colors cursor-pointer duration-200">
          More Details
        </button>
      </div>
    </div>
  );
}

