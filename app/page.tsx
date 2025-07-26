import Header from "@/components/Header";
import SearchBar2 from "@/components/car-categury/SearchBar";
import ManufacturersPrint from "@/components/car-categury/ManufacturersPrint";

export default function Home() {
  return (
    <main className="mx-10">
      <Header />
      <div className="my-15">
        <h2 className="font-bold text-2xl">Car Catalogue</h2>
        <p>Explore the cars like</p>
        <div>
          <SearchBar2 />
        </div>
        <ManufacturersPrint />
      </div>
    </main>
  );
}
