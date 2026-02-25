import type { Metadata } from "next";
import Impact from "@/components/Impact";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";

export const metadata: Metadata = { title: "Impact" };

export default function ImpactPage() {
  return (
    <>
      <Impact />
      <CurrentlyBuilding />
    </>
  );
}
