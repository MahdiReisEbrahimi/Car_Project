import { FaSearch } from "react-icons/fa";

export default function SearchTriggerButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <p
      onClick={onClick}
      className="bg-gradient-to-r flex items-center gap-3 from-gray-500 to-gray-800 text-center text-sm font-semibold text-white py-2 px-4 rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
    >
      <FaSearch />
      Search by {label}
    </p>
  );
}
