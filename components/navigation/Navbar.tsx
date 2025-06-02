import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import CustomButton from "../reusable/CustomButton";

export default function NavBar() {
  return (
    <header className="w-full absolute z-10 top-0 left-0">
      <nav className="mx-10 flex justify-between items-center">
        <Link href="/" className="relative">
          <Image
            src={Logo}
            alt="logo"
            width={118}
            height={18}
            className="mt-6"
          />
        </Link>

        <CustomButton title="Sign In" type="button" />
      </nav>
    </header>
  );
}
