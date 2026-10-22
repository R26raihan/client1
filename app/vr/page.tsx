import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import VRGallery from "../components/VRGallery";
import { waLink } from "../lib/site-config";
import { darkSectionTheme } from "../lib/theme";

export const metadata: Metadata = {
  title: "Virtual Tour 360° — Loka Architect",
  description: "Jelajahi contoh panorama interior 360°. Geser untuk melihat sekeliling ruang, perbesar detail, dan nikmati tampilan layar penuh.",
};

const instructions = [
  { title: "Mulai dari satu ruang", text: "Tekan Mulai tur 360° untuk membuka panorama interaktif." },
  { title: "Lihat ke segala arah", text: "Klik dan geser dengan mouse, atau usap layar dengan satu jari." },
  { title: "Perhatikan detailnya", text: "Gunakan + / − untuk zoom dan ikon layar penuh untuk memperluas tampilan." },
];

export default function VRPage() {
  return <div className="bg-background text-foreground">
    <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 sm:px-10 sm:pt-12 sm:pb-16">
      <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">Virtual Tour 360°</span></nav>
      <div className="grid gap-7 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
        <div><p className="mb-5 text-lg font-semibold uppercase tracking-widest text-primary">Loka · Virtual Experience</p><h1 className="max-w-3xl font-serif text-4xl leading-[1.12] sm:text-6xl lg:text-7xl">Rasakan ruang.<br /><span className="text-muted-foreground">Dari sudut Anda.</span></h1></div>
        <p className="max-w-xl text-xl leading-9 text-muted-foreground">Melihat satu gambar saja belum cukup. Putar pandangan Anda dan jelajahi suasana interior melalui panorama 360° interaktif.</p>
      </div>
    </div>

    <div id="jelajahi-vr" className="mx-auto max-w-[1440px] border-t border-border-subtle px-6 py-10 sm:px-10 sm:py-12"><VRGallery /></div>

    <section aria-labelledby="vr-guide-title" className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-5"><h2 id="vr-guide-title" className="font-serif text-3xl sm:text-4xl">Mudah dijelajahi, tanpa aplikasi.</h2><p className="text-lg text-muted-foreground">Buka langsung dari komputer atau ponsel.</p></div>
      <ol className="mt-8 grid gap-8 border-t border-border-subtle pt-8 md:grid-cols-3">{instructions.map((step, index) => <li key={step.title}><span className="mb-5 block font-mono text-lg text-primary">0{index + 1}</span><h3 className="mb-3 text-2xl font-medium">{step.title}</h3><p className="max-w-sm text-lg leading-8 text-muted-foreground">{step.text}</p></li>)}</ol>
      <p className="mt-10 max-w-3xl border-l-2 border-primary pl-5 text-base leading-7 text-muted-foreground">Setiap contoh menampilkan panorama satu titik pandang. Pilih thumbnail untuk berpindah contoh; panorama belum mendukung berjalan bebas. Seluruh aset berasal dari Poly Haven dengan lisensi CC0, terpisah dari dokumentasi portofolio Loka.</p>
    </section>

    <section className={`bg-accent px-6 py-14 text-foreground sm:px-10 sm:py-20 ${darkSectionTheme}`}>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="mb-4 text-lg font-semibold text-primary">Dari layar, menuju rencana Anda.</p><h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Bayangkan pengalaman ini untuk rumah Anda.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Diskusikan kebutuhan visualisasi dan pilihan layanan tur 360° bersama tim kami.</p></div><div className="flex flex-col gap-4"><a href={waLink("Halo Loka Architect, saya ingin berdiskusi tentang visualisasi dan tur 360° untuk proyek saya.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Diskusikan tur 360° <ArrowUpRight size={21} aria-hidden="true" /></a><Link href="/portofolio/the-tropical-residence" className="inline-flex min-h-12 items-center justify-center gap-3 text-lg underline underline-offset-4 hover:text-primary">Lihat detail contoh <ArrowUpRight size={20} aria-hidden="true" /></Link></div></div>
    </section>
    <div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10"><Link href="/#portofolio" className="inline-flex min-h-12 items-center gap-3 text-lg font-medium hover:text-primary"><ArrowLeft size={21} aria-hidden="true" />Kembali ke portofolio</Link></div>
  </div>;
}
