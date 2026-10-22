import type { Metadata } from "next";
import ConstructionGalleryPage from "../components/ConstructionGalleryPage";

export const metadata: Metadata = {
  title: "Video Progres Pembangunan — Loka Architect",
  description: "Ikuti perjalanan pembangunan melalui video referensi timelapse, dari pekerjaan fondasi hingga penyelesaian bangunan.",
};

export default function ProgressPage() {
  return <ConstructionGalleryPage />;
}
