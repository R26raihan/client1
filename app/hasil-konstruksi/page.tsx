import type { Metadata } from "next";
import ConstructionGalleryPage from "../components/ConstructionGalleryPage";

export const metadata: Metadata = {
  title: "Hasil Konstruksi — Loka Architect",
  description: "Jelajahi video referensi hasil konstruksi dan tur bangunan selesai, mulai dari fasad hingga suasana interior.",
};

export default function ConstructionResultsPage() {
  return <ConstructionGalleryPage completed />;
}
