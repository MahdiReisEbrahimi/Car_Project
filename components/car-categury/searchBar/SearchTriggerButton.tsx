import { FaSearch } from "react-icons/fa";

export default function SearchTriggerButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-gradient-to-br flex items-center gap-3 from-white to-gray-400 min-w-60 text-center font-semibold text-black py-[10px] px-4 rounded-sm shadow-md hover:scale-99 transition cursor-pointer"
    >
      <FaSearch />
      Search by {label.charAt(0).toUpperCase() + label.slice(1)}
    </button>
  );
}
