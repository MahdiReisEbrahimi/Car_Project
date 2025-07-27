import Image from "next/image";
import CustomButton from "./reusable/CustomButton";
import hero from "@/public/hero.png";

export default function Header() {
  return (
    <div className="flex flex-col text-justify items-center m-auto mt-35 w-2/3 md:mb-10 sm:mb-20 lg:mb-30  ">
      <div>
        <h1 className="font-bold text-5xl">
          FIND, BOOk or RENT a car
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
        <Image src={hero} alt="hero car"  sizes="" className="" />
      </div>
    </div>
  );
}
