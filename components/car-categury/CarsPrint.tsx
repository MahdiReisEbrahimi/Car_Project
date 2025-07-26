import { Manufacturer } from "@/types";
import { Factory, Globe2, Hash } from "lucide-react";
import Link from "next/link";

interface CarsPrintProps {
  manufacturer: Manufacturer;
}

export default function CarsPrint({ manufacturer }: CarsPrintProps) {
  return (
    <Link href={`/${manufacturer.Mfr_ID}`}>
      <div className="rounded-2xl cursor-pointer bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.015] transition-all duration-300 p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-800">
            <Factory className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">
              {manufacturer.Mfr_CommonName || "Unknown"}
            </h2>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {manufacturer.Mfr_Name}
          </span>
        </div>

        <div className="text-sm text-gray-700 space-y-2">
          <p className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-gray-400" />
            <span className="font-medium">Manufacturer ID:</span>{" "}
            {manufacturer.Mfr_ID}
          </p>
          <p className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-gray-400" />
            <span className="font-medium">Country:</span> {manufacturer.Country}
          </p>
        </div>
      </div>
    </Link>
  );
}
