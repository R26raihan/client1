// Preview pricing only; replace with approved studio rates before publication.
export const buildingServices = [
  { id: "ruko", title: "Ruko, rukan & kost", rate: 150000, image: "/images/industrial-space.webp", description: "Mengatur akses, fungsi tiap unit, dan kebutuhan operasional pada lahan yang tersedia." },
  { id: "villa", title: "Villa & guest house", rate: 200000, image: "/images/villa.webp", description: "Menyelaraskan ruang privat, area komunal, dan pengalaman menginap yang dekat dengan lingkungan." },
  { id: "cluster", title: "Unit rumah cluster", rate: 175000, image: "/images/american-house.webp", description: "Mengembangkan tipe unit hunian dengan tata ruang dan karakter fasad yang saling terhubung." },
  { id: "kantor", title: "Kantor & bangunan lainnya", rate: 225000, image: "/images/industrial-loft.webp", description: "Menyusun alur kegiatan pengguna, kebutuhan ruang kerja, dan identitas bangunan." },
] as const;

export const dummyInteriorRate = 100000;

export function designEstimate(type: string, area: number, interior: boolean) {
  const service = buildingServices.find(item => item.id === type);
  if (!service || !Number.isFinite(area) || area <= 0) return 0;
  return area * (service.rate + (interior ? dummyInteriorRate : 0));
}

export function rupiah(value: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
}
