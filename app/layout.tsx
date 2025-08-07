import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Providers } from "./providers";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "the best cars in the world",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} bg-black`}>
      <body>
        <Providers>
          <NavBar />
          <main className="mt-20 mx-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
