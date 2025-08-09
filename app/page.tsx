import Header from "@/components/Header";
import SearchBar from "@/components/car-categury/searchBar/SearchBar";
import OptionsPrint from "@/components/car-categury/OptionsPrint";

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
            <SearchBar searchByField="makes" />
            <SearchBar searchByField="year" />
          </div>
        </div>
        <OptionsPrint />
      </div>
    </div>
  );
}
