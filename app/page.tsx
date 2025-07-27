import Header from "@/components/Header";
import SearchBar from "@/components/car-categury/SearchBar";
import ManufacturersPrint from "@/components/car-categury/ManufacturersPrint";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="my-15">
        <h2 className="font-bold text-2xl">Car Catalogue</h2>
        <p>Explore the cars like</p>
        <div className="flex justify-center">
          <div className="m-auto flex">
            <SearchBar searchByField="manufacturers" />
            <SearchBar searchByField="CarName" />
            <SearchBar searchByField="Year" />
            <SearchBar searchByField="Money" />
          </div>
        </div>
        <ManufacturersPrint />
      </div>
    </div>
  );
}
