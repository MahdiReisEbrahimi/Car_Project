import Link from "next/link";
import CustomButton from "../reusable/CustomButton";
import { FaCarSide } from "react-icons/fa";

export default function NavBar() {
  return (
    <header className="w-full absolute z-50 top-0 left-0 mt-6">
      <nav className="mx-10 flex justify-between items-center">
        <Link href="/" className="relative bg-white hover:bg-gray-300 p-1 rounded-sm">
          <div className="flex gap-5 items-center mx-2">
            <FaCarSide color="black" className="text-3xl" />
            <h1 className="text-black text-2xl font-bold">Car Hub</h1>
          </div>
        </Link>
        <CustomButton title="Sign In" type="button" />
      </nav>
    </header>
  );
}
