import { Manufacturer } from "@/types";
import { Factory, Globe2, Hash } from "lucide-react";
import Link from "next/link";
import car1 from "@/public/cars/car1.jpeg";
import car2 from "@/public/cars/car2.jpg";
import car3 from "@/public/cars/car3.avif";
import car4 from "@/public/cars/car4.avif";
import car5 from "@/public/cars/car5.jpg";
import car6 from "@/public/cars/car6.webp";
import car7 from "@/public/cars/car7.webp";
import car8 from "@/public/cars/car8.avif";
import car9 from "@/public/cars/car9.jpeg";
import car10 from "@/public/cars/car10.avif";
import car11 from "@/public/cars/car11.webp";
import Image from "next/image";

interface PrintManufacturersType {
  manufacturer: Manufacturer;
}

export default function PrintManufacturers({
  manufacturer,
}: PrintManufacturersType) {
  const carImages = [
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car10,
    car11,
  ];
  const randomIndex = Math.floor(Math.random() * carImages.length);
  const randomCar = carImages[randomIndex];
  return (
    <Link href={`/manufacturers/${manufacturer.Mfr_ID}`}>
      <div className="rounded-2xl cursor-pointer bg-white shadow-lg border h-85 border-gray-200 hover:shadow-xl hover:scale-[1.015] transition-all duration-300 p-5 flex flex-col gap-3">
        <div className="relative w-full h-40">
          <Image
            src={randomCar}
            fill
            alt="Random car"
            className="object-cover rounded-xl"
          />
        </div>

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
