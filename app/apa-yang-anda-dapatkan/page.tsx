import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { deliverables } from "../lib/deliverables";
import { darkSectionTheme } from "../lib/theme";
import { waLink } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Apa yang Anda Dapatkan? — Loka Architect",
  description: "Kenali kelengkapan perancangan di Loka Architect: denah 2D, visualisasi 3D, gambar teknis, referensi material, RAB, video, dan dokumen akhir sesuai paket.",
};

const groups = [
  { id: "konsep", number: "01", title: "Memahami ruang sebelum dibangun.", subtitle: "Konsep & visualisasi", description: "Mulai dari pembagian ruang hingga suasana yang ingin dihadirkan. Materi visual menjadi bahan diskusi untuk menyepakati arah rancangan." },
  { id: "teknis", number: "02", title: "Menerjemahkan gagasan menjadi detail.", subtitle: "Gambar teknis", description: "Keputusan desain dikembangkan menjadi dokumen yang mendukung koordinasi dan pelaksanaan. Kebutuhan tiap bidang mengikuti lingkup pekerjaan." },
  { id: "penyerahan", number: "03", title: "Menyiapkan langkah berikutnya.", subtitle: "Anggaran & penyerahan", description: "Estimasi biaya, presentasi, dan dokumen akhir membantu Anda meninjau rancangan serta mempersiapkan pekerjaan selanjutnya." },
] as const;

const benefits = [
  { title: "Ruang mengikuti kebutuhan", text: "Kebiasaan penghuni, kondisi lahan, dan prioritas ruang menjadi dasar diskusi perancangan." },
  { title: "Arah desain lebih mudah dibahas", text: "Denah dan visualisasi membantu Anda menilai pilihan sebelum keputusan dikembangkan menjadi detail." },
  { title: "Lingkup pekerjaan lebih jelas", text: "Daftar gambar, format penyerahan, dan batas layanan dibicarakan dalam proposal proyek." },
];

const questions = [
  { title: "Apakah semua hasil di halaman ini termasuk setiap paket?", answer: "Tidak. Halaman ini menunjukkan pilihan kelengkapan. Daftar hasil yang termasuk, jumlah view, tingkat detail, dan format file mengikuti paket serta proposal yang disepakati." },
  { title: "Apakah gambar interior sama dengan detail furnitur?", answer: "Visual interior menjelaskan suasana dan penataan ruang. Gambar detail untuk produksi furnitur atau pekerjaan interior merupakan lingkup yang perlu dicantumkan secara khusus." },
  { title: "Apakah saya mendapatkan file model dan hasil cetak?", answer: "Format file akhir, hak penggunaan, ketersediaan file model, jumlah cetakan, dan media penyerahan dikonfirmasi dalam penawaran. Tidak semua paket otomatis mencakup file kerja atau hasil cetak." },
  { title: "Bagaimana dengan revisi dan pendampingan pembangunan?", answer: "Jumlah serta tahapan revisi, kebutuhan survei, koordinasi pelaksana, dan pengawasan lapangan perlu disepakati sesuai paket. Hubungi tim untuk membahas kebutuhan proyek Anda." },
];

export default function DeliverablesPage() {
  return <div className="bg-background text-foreground">
    <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 sm:px-10 sm:pt-12 sm:pb-16">
      <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">Apa yang Anda Dapatkan?</span></nav>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16"><div><p className="mb-5 text-lg font-semibold uppercase tracking-widest text-primary">Loka · Kelengkapan Desain</p><h1 className="font-serif text-4xl leading-[1.12] sm:text-6xl lg:text-7xl">Apa yang Anda<br /><span className="text-muted-foreground">dapatkan?</span></h1></div><div><p className="max-w-xl text-xl leading-9 text-muted-foreground">Dari denah pertama hingga dokumen akhir, kenali hasil perancangan yang membantu Anda memahami dan mengembangkan rumah impian.</p><a href="#pilihan-kelengkapan" className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Jelajahi hasil desain <ArrowUpRight size={22} aria-hidden="true" /></a></div></div>
    </div>
    <figure className="mx-auto max-w-[1600px]"><div className="relative aspect-[4/3] bg-surface-muted sm:aspect-[16/7]"><Image src="/images/design-plans.webp" alt="Ilustrasi lembar gambar dan perencanaan arsitektur" fill sizes="100vw" preload className="object-cover" /></div><figcaption className="px-6 py-4 text-base text-muted-foreground sm:px-10">Foto-foto pada halaman ini merupakan ilustrasi kelengkapan dan arah perancangan.</figcaption></figure>

    <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20"><div className="grid gap-8 md:grid-cols-3">{benefits.map((benefit, index) => <div key={benefit.title} className="border-t border-border-subtle pt-6"><p className="mb-4 font-mono text-lg text-primary">0{index + 1}</p><h2 className="mb-4 font-serif text-2xl sm:text-3xl">{benefit.title}</h2><p className="text-lg leading-8 text-muted-foreground">{benefit.text}</p></div>)}</div></section>

    <nav id="pilihan-kelengkapan" aria-label="Kelompok hasil perancangan" className="sticky top-[120px] z-30 overflow-x-auto border-y border-border-subtle bg-background/95 px-6 backdrop-blur-xl sm:px-10"><div className="mx-auto flex max-w-7xl gap-2 py-3 sm:gap-5">{groups.map(group => <a key={group.id} href={`#kelompok-${group.id}`} className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full px-4 text-lg font-medium hover:bg-primary/10 hover:text-primary"><span className="text-primary">{group.number}</span>{group.subtitle}</a>)}<a href="#faq-kelengkapan" className="inline-flex min-h-12 shrink-0 items-center rounded-full px-4 text-lg font-medium hover:bg-primary/10 hover:text-primary">Pertanyaan</a></div></nav>

    {groups.map((group, groupIndex) => <section key={group.id} id={`kelompok-${group.id}`} className={`px-6 py-16 sm:px-10 sm:py-24 ${groupIndex === 1 ? `bg-accent text-foreground ${darkSectionTheme}` : "bg-background"}`}>
      <div className="mx-auto max-w-7xl"><div className="mb-10 grid gap-7 lg:grid-cols-2 lg:items-end lg:gap-16"><div><p className="mb-5 text-lg font-semibold text-primary">{group.number} · {group.subtitle}</p><h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-5xl">{group.title}</h2></div><p className="max-w-xl text-lg leading-8 text-muted-foreground">{group.description}</p></div>
        <div className="grid gap-7 md:grid-cols-2">{deliverables.filter(item => item.group === group.id).map(item => <article key={item.id} id={item.id} className="overflow-hidden rounded-2xl border border-glass-edge bg-glass-card shadow-glass backdrop-blur-xl"><div className="relative aspect-[16/10] bg-surface-muted"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 95vw, 600px" className="object-cover" /></div><div className="p-6 sm:p-8"><h3 className="font-serif text-2xl sm:text-3xl">{item.title}</h3><p className="mt-4 text-lg leading-8 text-muted-foreground">{item.detail}</p><ul className="mt-5 space-y-3 border-t border-border-subtle pt-5">{item.examples.map(example => <li key={example} className="flex items-start gap-3 text-lg leading-relaxed"><span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />{example}</li>)}</ul><a href={waLink(`Halo Loka Architect, saya ingin menanyakan kelengkapan ${item.title} pada paket desain.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary underline-offset-4 hover:underline">Tanyakan lingkupnya <ArrowUpRight size={21} aria-hidden="true" /></a></div></article>)}</div>
        {group.id === "penyerahan" && <div className="mt-8 flex flex-wrap gap-6"><Link href="/video-3d" className="inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary">Lihat contoh video 3D <ArrowUpRight size={21} aria-hidden="true" /></Link><Link href="/vr" className="inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary">Coba panorama 360° <ArrowUpRight size={21} aria-hidden="true" /></Link></div>}
      </div>
    </section>)}

    <section id="faq-kelengkapan" className="mx-auto grid max-w-7xl gap-10 border-t border-border-subtle px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="mb-5 text-lg font-semibold text-primary">PAKET & LINGKUP</p><h2 className="font-serif text-3xl leading-tight sm:text-4xl">Pastikan hasilnya sesuai kebutuhan Anda.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Pilih kelengkapan berdasarkan tahap dan jenis proyek. Penawaran merinci hasil pekerjaan serta layanan yang Anda pesan.</p></div><div className="divide-y divide-border-subtle border-y border-border-subtle">{questions.map((question, index) => <details key={question.title} open={index === 0} className="group"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-6 marker:content-none hover:text-primary [&::-webkit-details-marker]:hidden"><h3 className="text-xl font-semibold">{question.title}</h3><span aria-hidden="true" className="text-3xl text-primary group-open:hidden">+</span><span aria-hidden="true" className="hidden text-3xl text-primary group-open:block">−</span></summary><p className="pb-7 text-lg leading-8 text-muted-foreground">{question.answer}</p></details>)}</div></section>

    <section className={`bg-accent px-6 py-16 text-foreground sm:px-10 sm:py-20 ${darkSectionTheme}`}><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="mb-4 text-lg font-semibold text-primary">Tentukan langkah berikutnya</p><h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Mari pilih lingkup yang tepat.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Ceritakan kebutuhan ruang, data lahan, dan tahap proyek Anda. Tim kami membantu membahas paket serta hasil perancangan yang sesuai.</p></div><div className="flex shrink-0 flex-col gap-4"><a href={waLink("Halo Loka Architect, saya ingin berkonsultasi mengenai kelengkapan hasil desain dan paket yang sesuai untuk proyek saya.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Diskusikan kebutuhan Anda <ArrowUpRight size={22} aria-hidden="true" /></a><Link href="/jasa/desain-rumah" className="inline-flex min-h-12 items-center justify-center gap-3 text-lg underline underline-offset-4 hover:text-primary">Lihat paket desain rumah <ArrowUpRight size={21} aria-hidden="true" /></Link></div></div></section>
  </div>;
}
