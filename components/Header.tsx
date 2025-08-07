import Image from "next/image";
import CustomButton from "./reusable/CustomButton";
import hero from "@/public/hero.png";

export default function Header() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto text-white">
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          FIND, BOOK OR RENT CARS
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">
          This is the best way to rent if you are planning for a trip. Enjoy
          affordable prices and a wide range of cars!
        </p>
        <div className="flex justify-center md:justify-start">
          <CustomButton type="button" title="Explore Cars" />
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-md mb-12 md:mb-0">
        <Image
          src={hero}
          alt="hero car"
          width={500}
          height={500}
          className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          priority
        />
      </div>
    </section>
  );
}
