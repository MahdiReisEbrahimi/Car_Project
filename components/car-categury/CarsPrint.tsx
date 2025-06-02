import { manufacturers } from "@/constants/constants";

export default function CarsPrint() {
  return (
    <div className="grid grid-cols-3 gap-2 border rounded-2xl p-4">
      {manufacturers.map((manufacturer) => (
        <h2 key={manufacturer} className="border-b rounded-2xl p-2 bg-gray-400 cursor-pointer hover:bg-gray-300 text-center ">{manufacturer}</h2>
      ))}
    </div>
  );
}
