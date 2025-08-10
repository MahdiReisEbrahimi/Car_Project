import { Make } from "@/types";
import Link from "next/link";
import DommyIcon from "./DommyIcon";

interface PrintMakesParams {
  make: Make;
}

export default function PrintMakes({ make }: PrintMakesParams) {
  return (
    <Link href={`/makes/${make.Make_ID}`}>
      <div className=" rounded-2xl h-35 bg-gradient-to-br via-gray-300 to-gray-600 cursor-pointer bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.015] transition-all duration-300 p-5 flex flex-col justify-between gap-3">
        <DommyIcon />
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-800">
              <h2 className="text-sm font-semibold">
                {make.Make_Name || "Unknown"}
              </h2>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {make.Make_ID}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
