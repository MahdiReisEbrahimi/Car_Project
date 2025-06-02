import CarsPrint from "@/components/car-categury/CarsPrint";
import SearchBar from "@/components/car-categury/SearchBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="mx-10">
      <Header />
      <div className="my-15">
        <h2 className="font-bold text-2xl">Car Catalogue</h2>
        <p>Explore the cars like</p>
        <div>
          <SearchBar />

        </div>
        <CarsPrint />
      </div>
    </main>
  );
}
