import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiBmw,
  SiFord,
  SiToyota,
  SiVolkswagen,
  SiGeneralmotors,
  SiHyundai,
  SiHonda,
  SiTesla,
  SiMazda,
  SiNissan,
  SiSubaru,
  SiMercedes,
  SiAudi,
  SiJeep,
  SiChevrolet,
  SiKia,
  SiJaguar,
  SiMitsubishi,
  SiPeugeot,
  SiRenault,
  SiFerrari,
  SiLamborghini,
  SiVolvo,
  SiCitroen,
  SiChrysler,
  SiCadillac,
  SiInfiniti,
} from "react-icons/si";

const icons: IconType[] = [
  SiBmw,
  SiFord,
  SiToyota,
  SiVolkswagen,
  SiGeneralmotors,
  SiHyundai,
  SiHonda,
  SiTesla,
  SiMazda,
  SiNissan,
  SiSubaru,
  SiMercedes,
  SiAudi,
  SiJeep,
  SiChevrolet,
  SiKia,
  SiJaguar,
  SiMitsubishi,
  SiPeugeot,
  SiRenault,
  SiFerrari,
  SiLamborghini,
  SiVolvo,
  SiCitroen,
  SiChrysler,
  SiCadillac,
  SiInfiniti,
];

const colors = [
  "text-red-500",
  "text-green-500",
  "text-blue-600",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
];

export default function DommyIcon() {
  const [Icon] = useState<IconType>(() => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  });

  const [color] = useState(() => {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    return colors[randomColorIndex];
  });

  return <Icon className={`text-5xl m-auto mb-2 ${color}`} />;
}