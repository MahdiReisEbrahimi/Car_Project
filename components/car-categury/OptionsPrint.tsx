"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/index";
import GetManufacturers from "./options/manufacturers/GetManufacturers";
import GetMakes from "./options/makes/GetMakes";

export default function OptionsPrint() {
  //finding how should print car categuries... (by makes , year or manufacturer)
  const option = useSelector((state: RootState) => state.carFilter.filterBy);

  return (
    <div>
      {option === "manufacturers" ? <GetManufacturers /> : <GetMakes />}
    </div>
  );
}
