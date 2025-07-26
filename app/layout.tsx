import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
