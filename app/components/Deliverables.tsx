import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const deliverables = [
  { image: "/images/design-plans.jpg", alt: "Foto lembar denah dan rancangan arsitektur", title: "Denah Ruang 2D", description: "Pembagian ruang, ukuran, dan alur aktivitas di dalam bangunan." },
  { image: "/images/modern.jpg", alt: "Inspirasi bentuk dan proporsi hunian modern", title: "Model Desain 3D", description: "Gambaran bentuk dan proporsi bangunan dari berbagai sudut." },
  { image: "/images/residence.jpg", alt: "Tampilan eksterior rumah dengan taman dan kolam", title: "Render Eksterior", description: "Visual tampilan fasad, material, taman, dan suasana luar." },
  { image: "/images/interior.jpg", alt: "Inspirasi penataan interior ruang keluarga", title: "Visualisasi Interior", description: "Gambaran suasana ruang, penataan furnitur, dan pencahayaan." },
  { image: "/images/classic.jpg", alt: "Tampak fasad bangunan dengan kolom dan detail ketinggian", title: "Gambar Tampak & Potongan", description: "Detail ketinggian, fasad, dan hubungan antarlevel bangunan." },
  { image: "/images/design-plans.jpg", alt: "Lembar rancangan teknis sebagai ilustrasi gambar kerja", title: "Gambar Kerja Arsitektur", description: "Detail teknis rancangan sebagai acuan pelaksanaan di lapangan." },
  { image: "/images/construction-structure.jpg", alt: "Pekerjaan struktur bangunan di lokasi konstruksi", title: "Gambar Struktur", description: "Rencana pondasi, kolom, balok, dan elemen struktur bangunan." },
  { image: "/images/engineering.jpg", alt: "Instalasi kelistrikan sebagai ilustrasi sistem MEP bangunan", title: "Gambar MEP", description: "Rencana titik listrik, pencahayaan, air bersih, dan pembuangan." },
  { image: "/images/project-budget.jpg", alt: "Pembahasan dokumen dan perencanaan anggaran proyek", title: "Rencana Anggaran Biaya", description: "Perkiraan volume pekerjaan dan biaya untuk perencanaan anggaran." },
  { image: "/images/living-room.jpg", alt: "Referensi warna, tekstur, dan material interior", title: "Referensi Material", description: "Arahan pilihan warna, material, dan finishing yang selaras." },
  { image: "/images/mediterranean-house.jpg", alt: "Ilustrasi suasana bangunan untuk presentasi desain", title: "Video Presentasi 3D", description: "Perjalanan visual untuk memahami rancangan dan suasana ruang." },
  { image: "/images/digital-files.jpg", alt: "Laptop sebagai ilustrasi penyerahan dokumen digital", title: "File Desain Digital", description: "Dokumen dan gambar desain dalam format yang disepakati." },
];

export default function Deliverables() {
  return <section id="hasil-desain" className="border-y border-border-subtle/60 bg-linear-to-b from-background via-surface-muted/40 to-background px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
    <div className="w-full">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
        <div>
          <span className="mb-5 flex items-center gap-3 text-[10px] font-semibold tracking-[2.5px] text-primary"><span aria-hidden="true" className="h-px w-8 bg-primary/60" />KELENGKAPAN DESAIN</span>
          <h2 data-motion="title" className="font-serif text-[clamp(34px,3.8vw,64px)] leading-[1.12] font-normal tracking-tight">Apa yang Anda<br className="hidden lg:block" /> Dapatkan?</h2>
        </div>
        <p data-motion="text" className="max-w-[440px] text-sm leading-7 text-muted-foreground lg:justify-self-end lg:pb-1">Dari gambaran awal hingga detail teknis, kenali hasil perancangan yang membantu Anda mewujudkan rumah impian.</p>
      </div>
      <ul className="mt-12 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {deliverables.map(({ image, alt, title, description }, index) => <li data-motion="card" key={title} className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-white/45 shadow-[0_4px_18px_#49301e05,inset_0_1px_0_#ffffff99] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:border-primary/50 hover:bg-white/80 hover:shadow-[0_18px_40px_-12px_#49301e40] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100">
          <div className="relative aspect-[8/5] overflow-hidden bg-surface-muted">
            <Image src={image} alt={alt} fill sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-full border border-white/50 bg-background/85 text-[10px] font-semibold text-primary backdrop-blur-md" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="p-5"><h3 className="text-sm leading-6 font-semibold text-foreground transition-colors group-hover:text-primary motion-reduce:transition-none">{title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{description}</p></div>
        </li>)}
      </ul>
      <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-border-subtle pt-6 sm:flex-row sm:items-center"><p className="max-w-2xl text-xs leading-6 text-muted-foreground">Gambar merupakan ilustrasi. Kelengkapan dokumen, tingkat detail, dan format penyerahan mengikuti paket serta lingkup pekerjaan yang disepakati.</p><a href="#kontak" className="inline-flex shrink-0 items-center gap-3 text-xs font-semibold text-primary hover:underline">Diskusikan kebutuhan desain <ArrowUpRight size={16} aria-hidden="true" /></a></div>
    </div>
  </section>;
}
