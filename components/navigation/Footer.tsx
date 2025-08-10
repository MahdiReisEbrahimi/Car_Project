import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { footerLinks } from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 text-gray-700 mx-20 pt-10 mb-10 text-black-100 border-t border-gray-300 ">
      <div>
        <Image
          src={logo}
          alt="logo"
          width={118}
          height={18}
          className="mb-6 mt-2"
        />
        <div className="text-gray-700 ml-3">
          <p>Carhub 2025</p>
          <p>All Rights Reserved &copy;</p>
        </div>
      </div>

      {footerLinks.map((footerLink) => (
        <div key={footerLink.title}>
          <h3 className="text-black font-bold text-lg">{footerLink.title}</h3>
          <ul className="mt-3">
            {footerLink.links.map((link) => (
              <li key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
