import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { constructionVideos, progressVideos } from "../lib/videos";
import { waLink } from "../lib/site-config";
import { darkSectionTheme } from "../lib/theme";
import VideoGallery from "./VideoGallery";

const mediaPages = [
  { href: "/video-3d", label: "Video 3D Desain" },
  { href: "/progres-pembangunan", label: "Progres Pembangunan" },
  { href: "/hasil-konstruksi", label: "Hasil Konstruksi" },
  { href: "/vr", label: "Virtual Tour 360°" },
];

export default function ConstructionGalleryPage({ completed = false }: { completed?: boolean }) {
  const title = completed ? "Hasil Konstruksi" : "Video Progres Pembangunan";
  const path = completed ? "/hasil-konstruksi" : "/progres-pembangunan";
  const videos = completed ? constructionVideos : progressVideos;
  const stages = completed ? [
    { title: "Tampilan bangunan", text: "Lihat komposisi fasad dan hubungan bangunan dengan lingkungan sekitarnya." },
    { title: "Suasana ruang", text: "Amati tata ruang, pencahayaan, dan perpaduan material melalui tur bangunan." },
    { title: "Detail penyelesaian", text: "Perhatikan bagaimana pilihan warna, tekstur, dan detail membentuk karakter hunian." },
  ] : [
    { title: "Persiapan & struktur", text: "Kenali perjalanan dari persiapan lahan, fondasi, hingga struktur utama bangunan." },
    { title: "Pembentukan ruang", text: "Amati bagaimana dinding, atap, dan bukaan mulai membentuk susunan ruang." },
    { title: "Penyelesaian bangunan", text: "Ikuti perubahan tampilan saat material dan pekerjaan akhir mulai diterapkan." },
  ];

  return <div className="bg-background text-foreground">
    <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-14 sm:px-10 sm:pt-12 sm:pb-20">
      <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
      <div className="mb-10 grid gap-7 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16"><div><p className="mb-5 text-lg font-semibold uppercase tracking-widest text-primary">Loka · {completed ? "Galeri Realisasi" : "Catatan Pembangunan"}</p><h1 className="max-w-3xl font-serif text-4xl leading-[1.12] sm:text-6xl lg:text-7xl">{completed ? "Dari rancangan," : "Setiap tahap,"}<br /><span className="text-muted-foreground">{completed ? "menjadi ruang nyata." : "punya ceritanya."}</span></h1></div><p className="max-w-xl text-xl leading-9 text-muted-foreground">{completed ? "Jelajahi contoh bangunan yang telah selesai melalui video tur. Lihat suasana ruang dan detail arsitektur ketika rancangan sudah terwujud." : "Ikuti perjalanan pembangunan melalui video timelapse. Lihat bagaimana pekerjaan di lapangan berkembang dari fondasi hingga bangunan terbentuk."}</p></div>
      <nav aria-label="Galeri media lainnya" className="mb-10 flex gap-3 overflow-x-auto pb-2">{mediaPages.map(page => <Link key={page.href} href={page.href} aria-current={page.href === path ? "page" : undefined} className={`inline-flex min-h-12 shrink-0 items-center rounded-full border px-5 py-3 text-base font-medium ${page.href === path ? "border-primary bg-primary/10 text-primary" : "border-border-subtle hover:border-primary hover:text-primary"}`}>{page.label}</Link>)}</nav>
      <VideoGallery key={path} videos={videos} label={title} />
    </div>

    <section className="border-t border-border-subtle px-6 py-14 sm:px-10 sm:py-20"><div className="mx-auto max-w-7xl"><h2 className="font-serif text-3xl sm:text-4xl">{completed ? "Perhatikan lebih dari tampilannya." : "Dari awal, hingga siap dihuni."}</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{completed ? "Gunakan video referensi untuk mengenali hal yang ingin Anda hadirkan di rumah sendiri." : "Video contoh membantu memahami gambaran umum pekerjaan. Urutan dan metode setiap proyek dapat berbeda."}</p><ol className="mt-9 grid gap-8 border-t border-border-subtle pt-8 md:grid-cols-3">{stages.map((stage, index) => <li key={stage.title}><span className="mb-5 block font-mono text-lg text-primary">0{index + 1}</span><h3 className="mb-3 text-2xl font-medium">{stage.title}</h3><p className="max-w-sm text-lg leading-8 text-muted-foreground">{stage.text}</p></li>)}</ol></div></section>

    <section className={`bg-accent px-6 py-16 text-foreground sm:px-10 sm:py-20 ${darkSectionTheme}`}><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="mb-4 text-lg font-semibold text-primary">Rencanakan langkah Anda</p><h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">{completed ? "Mulai cerita rumah Anda sendiri." : "Bangunan yang baik dimulai dari rencana."}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Diskusikan kondisi lahan, kebutuhan ruang, dan prioritas anggaran bersama tim Loka Architect.</p></div><div className="flex shrink-0 flex-col gap-4"><a href={waLink(`Halo Loka Architect, saya melihat halaman ${title.toLowerCase()} dan ingin berkonsultasi tentang proyek saya.`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Konsultasikan proyek Anda <ArrowUpRight size={21} aria-hidden="true" /></a><Link href={completed ? "/progres-pembangunan" : "/hasil-konstruksi"} className="inline-flex min-h-12 items-center justify-center gap-3 text-lg underline underline-offset-4 hover:text-primary">{completed ? "Lihat progres pembangunan" : "Jelajahi hasil konstruksi"}<ArrowUpRight size={21} aria-hidden="true" /></Link></div></div></section>
  </div>;
}
