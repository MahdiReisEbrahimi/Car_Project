"use client";
import { useParams } from "next/navigation";

export default function MakesPage() {
  const params = useParams();

  return <div>{params.make}</div>;
}
