import Image from "next/image";
import CustomButton from "./reusable/CustomButton";
import hero from "@/public/hero.png";

export default function Header() {
  return (
    <div className="flex flex-col text-justify items-center m-auto mt-35 w-2/3 ">
      <div>
        <h1 className="font-bold text-5xl">
          Find, book, rent a car -- quick and super easy!
        </h1>
        <p className="text-gray-700 mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          ex alias aliquam porro sit aspernatur maiores, asperiores sed atque
          sequi.
        </p>
        <div className="w-full flex justify-start">
          <CustomButton type="button" title="Explore Cars" />
        </div>
      </div>
      <div className="relative w-2/3 h-60 ml-auto">
        <div
          className="absolute inset-0 z-0 bg-blue-600"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        />
        <Image src={hero} alt="hero car" fill className="object-cover z-10" />
      </div>
    </div>
  );
}
