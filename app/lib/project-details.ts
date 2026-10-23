import briefs from "./project-briefs.json";
import { projects, referenceProjectDetails, roomGallery } from "./projects";
import { virtualTours, type VirtualTourExample } from "./virtual-tours";

type ProjectDetails = {
  title: string;
  source?: string;
  specifications: string[][];
  floors: { name: string; description: string; rooms: string[] }[];
  story: string[];
  team: { role: string; members: { name: string; image: string }[] }[];
  gallery: { image: string; label: string }[];
  videoId: string;
  tour?: VirtualTourExample;
};


const galleryLabels: Record<string, string> = {
  villa: "Inspirasi villa dan hubungan ruang luar",
  "living-room": "Suasana ruang keluarga",
  interior: "Penataan interior dan material",
  courtyard: "Taman dan ruang transisi",
  modern: "Komposisi fasad modern",
  classic: "Karakter arsitektur klasik",
  "industrial-loft": "Ruang loft dan mezzanine",
  "industrial-space": "Material dan pencahayaan industrial",
  "mediterranean-house": "Lengkung fasad dan warna terakota",
  "mediterranean-villa": "Inspirasi villa Mediteran",
  "american-house": "Fasad American dan halaman depan",
  "american-porch": "Teras depan dan detail material",
};

export function getProjectDetails(project: (typeof projects)[number]): ProjectDetails {
  if (project.slug === referenceProjectDetails.slug) {
    return { ...referenceProjectDetails, gallery: roomGallery, videoId: "SHUkhFUK2jI", tour: virtualTours[0] };
  }
  const brief = briefs.find(item => item.slug === project.slug);
  if (!brief) throw new Error(`Missing project details: ${project.slug}`);
  const interior = project.category === "Interior";
  return {
    title: project.title,
    specifications: [
      ["Style", brief.style],
      ["Ukuran Tanah Keseluruhan", brief.land],
      [interior ? "Luas Area Interior" : "Luas Bangunan", `${project.area} m²`],
      ["Jumlah Kamar Tidur", String(brief.beds)],
      ["Jumlah Kamar Mandi", String(brief.baths)],
      ["Jumlah Powder Room / Toilet Tamu", String(brief.powder)],
      ["Jumlah Maid Room", String(brief.maid)],
      ["Jumlah Mobil yang bisa ditampung", interior ? "Di luar lingkup interior" : `${brief.cars} (Carport)`],
      [interior ? "Lingkup Level Interior" : "Jumlah Lantai", interior ? "1 level" : `${brief.floors.length}${brief.floors.some(floor => floor.name === "Mezzanine") ? " (termasuk mezzanine)" : ""}`],
    ],
    floors: brief.floors,
    story: [project.description, ...brief.story],
    team: referenceProjectDetails.team,
    gallery: brief.gallery.map(image => ({ image: `/images/${image}.webp`, label: galleryLabels[image] })),
    videoId: brief.videoId,
    tour: virtualTours.find(tour => tour.id === brief.tourId),
  };
}
