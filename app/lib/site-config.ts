export const siteConfig = {
  name: "Loka Architect",
  tagline: "Studio Desain & Bangun Rumah Impian",
  description:
    "Loka Architect membantu Anda merancang dan membangun rumah serta properti komersial dengan desain modern, proses transparan, dan hasil yang presisi di seluruh Indonesia.",
  waNumber: "6281234567890",
  waDefaultMessage:
    "Halo Loka Architect, saya ingin konsultasi gratis untuk proyek rumah saya.",
  email: "halo@lokaarchitect.id",
  phoneDisplay: "+62 812-3456-7890",
  address: "Jl. Kemang Raya No. 12, Jakarta Selatan, DKI Jakarta",
  operatingHours: "Senin – Sabtu, 09.00 – 18.00 WIB",
  socials: {
    instagram: "https://instagram.com/lokaarchitect",
    tiktok: "https://tiktok.com/@lokaarchitect",
    youtube: "https://youtube.com/@lokaarchitect",
  },
  navLinks: [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Proses Kerja", href: "#proses" },
    { label: "Testimoni", href: "/testimoni" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ],
  stats: [
    { value: "250+", label: "Proyek Selesai" },
    { value: "12", label: "Tahun Pengalaman" },
    { value: "98%", label: "Klien Puas" },
    { value: "30+", label: "Kota Terjangkau" },
  ],
} as const;

export function waLink(message: string = siteConfig.waDefaultMessage) {
  return `https://wa.me/${siteConfig.waNumber}?text=${encodeURIComponent(message)}`;
}
