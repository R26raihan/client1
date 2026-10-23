import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { siteConfig, waLink } from "../lib/site-config";
import { darkSectionTheme } from "../lib/theme";
import Process from "../components/Process";

export const metadata: Metadata = {
  title: "Tentang Kami — Loka Architect",
  description: "Mengenal Loka Architect: pendekatan desain, visi dan misi, budaya kerja, layanan, serta proses kolaborasi untuk merancang rumah dan ruang usaha Anda.",
};

const values = [
  { title: "Memahami sebelum menggambar", description: "Kami memulai dari cerita Anda: siapa yang akan tinggal, kegiatan sehari-hari, serta hal yang ingin terasa berbeda di rumah baru." },
  { title: "Menyelaraskan ruang dan lingkungan", description: "Kondisi lahan, cahaya, udara, privasi, dan hubungan dengan ruang luar menjadi bagian pertimbangan sejak awal." },
  { title: "Membahas keputusan bersama", description: "Denah, visualisasi, dan pilihan material menjadi bahan diskusi agar arah rancangan dapat dipahami sebelum melangkah lebih jauh." },
];

const disciplines = [
  { title: "Arsitektur", description: "Menyusun kebutuhan ruang, karakter bangunan, dan hubungan antar area menjadi satu rancangan." },
  { title: "Interior", description: "Memperhatikan furnitur, warna, material, dan detail yang dekat dengan aktivitas penghuni." },
  { title: "Struktur & MEP", description: "Mengkoordinasikan kebutuhan struktur serta sistem mekanikal, elektrikal, dan plumbing." },
  { title: "Dokumentasi & pelaksanaan", description: "Menghubungkan gagasan desain dengan gambar kerja dan kebutuhan koordinasi di lapangan." },
];

const services = [
  { title: "Arsitektur rumah & villa", text: "Perencanaan hunian yang menyesuaikan kebutuhan keluarga, kondisi lahan, dan karakter yang Anda inginkan.", href: "/jasa/desain-rumah" },
  { title: "Interior & renovasi", text: "Penataan ruang, pilihan material, serta pengembangan bangunan eksisting sesuai prioritas kebutuhan Anda.", href: "/jasa/desain-interior" },
  { title: "Ruang usaha & bangunan lainnya", text: "Rancangan yang mempertimbangkan kegiatan pengguna, alur operasional, dan identitas ruang usaha.", href: "/jasa-desain-bangunan" },
  { title: "Visualisasi & perencanaan biaya", text: "Presentasi 3D dan pembahasan anggaran untuk membantu Anda menilai arah desain serta pilihan pekerjaan.", href: "/jasa/rab-biaya" },
];

export default function AboutPage() {
  return <div className="bg-background text-foreground">
    <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 sm:px-10 sm:pt-12 sm:pb-16">
      <nav aria-label="Breadcrumb" className="mb-10 flex gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">Tentang Kami</span></nav>
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16"><div><p className="mb-5 text-lg font-semibold uppercase tracking-widest text-primary">Mengenal Loka Architect</p><h1 className="max-w-3xl font-serif text-4xl leading-[1.12] sm:text-6xl lg:text-7xl">Ruang yang baik<br /><span className="text-muted-foreground">bermula dari Anda.</span></h1></div><div><p className="max-w-xl text-xl leading-9 text-muted-foreground">Kami melihat arsitektur sebagai cara mempertemukan kebutuhan, karakter, dan kenyamanan dalam ruang yang Anda jalani setiap hari.</p><a href="#profil-studio" className="mt-6 inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary underline-offset-4 hover:underline">Kenali studio kami <ArrowUpRight size={22} aria-hidden="true" /></a></div></div>
    </div>

    <figure className="mx-auto max-w-[1600px] px-0 sm:px-6"><div className="relative aspect-[4/3] bg-surface-muted sm:aspect-[16/7]"><Image src="/images/courtyard.webp" alt="Inspirasi hunian dengan ruang terbuka dan hubungan dengan taman" fill sizes="100vw" preload className="object-cover" /></div><figcaption className="px-6 py-4 text-base text-muted-foreground sm:px-0">Ilustrasi pendekatan ruang: cahaya, material, dan kedekatan dengan alam.</figcaption></figure>

    <nav aria-label="Bagian profil studio" className="sticky top-[120px] z-30 overflow-x-auto border-y border-border-subtle bg-background/95 px-6 backdrop-blur-xl sm:px-10"><div className="mx-auto flex max-w-7xl gap-2 py-3 sm:gap-6">{[["#profil-studio", "Profil Studio"], ["#visi-misi", "Visi & Misi"], ["#budaya-kerja", "Budaya Kerja"], ["#keahlian", "Keahlian"], ["#proses", "Proses"], ["#hubungi-studio", "Kontak"]].map(([href, label]) => <a key={href} href={href} className="inline-flex min-h-12 shrink-0 items-center rounded-full px-4 text-lg font-medium hover:bg-primary/10 hover:text-primary">{label}</a>)}</div></nav>

    <section id="profil-studio" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div><p className="mb-5 text-lg font-semibold text-primary">PROFIL STUDIO</p><h2 className="max-w-md font-serif text-3xl leading-tight sm:text-5xl">Mendengar cerita.<br />Menyusun ruang.</h2><Link href="/portofolio" className="mt-7 inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary underline-offset-4 hover:underline">Jelajahi galeri studio <ArrowUpRight size={22} aria-hidden="true" /></Link></div>
      <div className="space-y-6 text-xl leading-9 text-muted-foreground"><p>{siteConfig.description}</p><p>Setiap rancangan dimulai dari percakapan. Kami ingin memahami kebiasaan penghuni, kegiatan yang perlu diwadahi, dan prioritas yang membuat sebuah tempat terasa personal.</p><p>Dari sana, gagasan dikembangkan melalui denah, visualisasi, pemilihan material, dan koordinasi detail. Prosesnya dibicarakan bersama agar keputusan desain tetap dekat dengan kebutuhan serta anggaran Anda.</p><p>Rumah, villa, interior, maupun ruang usaha memiliki tantangannya sendiri. Bagi kami, pendekatan yang tepat berawal dari memahami konteksnya.</p></div>
    </section>

    <section id="visi-misi" className={`bg-accent px-6 py-16 text-foreground sm:px-10 sm:py-24 ${darkSectionTheme}`}>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20"><div><p className="mb-5 text-lg font-semibold text-primary">VISI KAMI</p><h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-5xl">Membantu orang hidup lebih nyaman melalui ruang yang direncanakan dengan perhatian.</h2></div><div><h3 className="mb-6 text-lg font-semibold uppercase tracking-widest text-primary">Misi dalam setiap rancangan</h3><ol className="space-y-6">{["Memahami kebutuhan penghuni sebagai dasar keputusan desain.", "Menyelaraskan fungsi, karakter, dan kondisi lingkungan.", "Menyajikan rancangan yang mudah dipahami dan didiskusikan.", "Mengkoordinasikan detail serta lingkup pekerjaan secara terbuka."].map((mission, index) => <li key={mission} className="flex gap-5 border-b border-border-subtle pb-6 last:border-b-0"><span className="font-mono text-lg text-primary">0{index + 1}</span><p className="text-xl leading-8">{mission}</p></li>)}</ol></div></div>
    </section>

    <section id="budaya-kerja" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24"><div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20"><div><p className="mb-5 text-lg font-semibold text-primary">BUDAYA KERJA</p><h2 className="max-w-md font-serif text-3xl leading-tight sm:text-5xl">Cara kami merancang, bersama Anda.</h2></div><div className="divide-y divide-border-subtle">{values.map((value, index) => <div key={value.title} className="py-7 first:pt-0"><p className="mb-3 font-mono text-base text-primary">0{index + 1}</p><h3 className="mb-4 font-serif text-2xl sm:text-3xl">{value.title}</h3><p className="text-lg leading-8 text-muted-foreground">{value.description}</p></div>)}</div></div></section>

    <section id="keahlian" className="border-y border-border-subtle bg-surface-muted/40 px-6 py-16 sm:px-10 sm:py-24"><div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16"><figure><div className="relative aspect-[4/5] overflow-hidden bg-surface-muted"><Image src="/images/design-plans.webp" alt="Ilustrasi gambar dan perencanaan arsitektur" fill sizes="(max-width: 1023px) 90vw, 560px" className="object-cover" /></div><figcaption className="mt-3 text-base text-muted-foreground">Foto ilustrasi perencanaan arsitektur.</figcaption></figure><div><p className="mb-5 text-lg font-semibold text-primary">KOLABORASI LINTAS BIDANG</p><h2 className="mb-8 font-serif text-3xl leading-tight sm:text-4xl">Satu rancangan,<br />berbagai sudut pandang.</h2><p className="mb-8 text-lg leading-8 text-muted-foreground">Ruang yang nyaman membutuhkan koordinasi. Bidang-bidang berikut saling terhubung dalam pengembangan rancangan, sesuai layanan yang disepakati.</p><dl className="space-y-6">{disciplines.map(discipline => <div key={discipline.title} className="border-t border-border-subtle pt-5"><dt className="mb-2 text-xl font-semibold">{discipline.title}</dt><dd className="text-lg leading-8 text-muted-foreground">{discipline.description}</dd></div>)}</dl></div></div></section>

    <section id="layanan-studio" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="mb-5 text-lg font-semibold text-primary">LINGKUP LAYANAN</p><h2 className="max-w-md font-serif text-3xl leading-tight sm:text-5xl">Dari kebutuhan ruang, menuju rencana.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Pilih lingkup yang Anda butuhkan. Detail paket, tahapan, dan hasil pekerjaan dibahas sebelum proyek dimulai.</p></div><div className="divide-y divide-border-subtle border-y border-border-subtle">{services.map((service, index) => <details key={service.title} open={index === 0} className="group"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-6 marker:content-none hover:text-primary [&::-webkit-details-marker]:hidden"><h3 className="font-serif text-2xl sm:text-3xl">{service.title}</h3><span aria-hidden="true" className="text-3xl text-primary group-open:hidden">+</span><span aria-hidden="true" className="hidden text-3xl text-primary group-open:block">−</span></summary><div className="pb-7"><p className="text-lg leading-8 text-muted-foreground">{service.text}</p><Link href={service.href} className="mt-4 inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary underline-offset-4 hover:underline">Pelajari layanan <ArrowUpRight size={21} aria-hidden="true" /></Link></div></details>)}</div></section>

    <Process />

    <section id="hubungi-studio" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-20"><div><p className="mb-5 text-lg font-semibold text-primary">MARI BERKENALAN</p><h2 className="max-w-lg font-serif text-3xl leading-tight sm:text-5xl">Ceritakan tempat yang ingin Anda wujudkan.</h2><p className="mt-6 max-w-lg text-xl leading-9 text-muted-foreground">Mulai dengan lokasi, ukuran lahan, kebutuhan ruang, dan referensi yang Anda sukai. Kami akan membahas langkah berikutnya bersama Anda.</p><a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-lg font-semibold text-primary-foreground hover:brightness-110">Mulai percakapan <ArrowUpRight size={22} aria-hidden="true" /></a></div><div className="rounded-2xl border border-glass-edge bg-glass-card p-7 shadow-glass backdrop-blur-xl sm:p-10"><h3 className="font-serif text-3xl">{siteConfig.name}</h3><p className="mt-5 text-lg leading-8 text-muted-foreground">{siteConfig.address}</p><p className="mt-4 text-lg text-muted-foreground">{siteConfig.operatingHours}</p><div className="mt-7 flex flex-col gap-3 border-t border-border-subtle pt-6"><a href={`tel:+${siteConfig.waNumber}`} className="inline-flex min-h-12 items-center gap-3 text-lg hover:text-primary"><Phone size={22} className="shrink-0 text-primary" aria-hidden="true" />{siteConfig.phoneDisplay}</a><a href={`mailto:${siteConfig.email}`} className="inline-flex min-h-12 items-center gap-3 break-all text-lg hover:text-primary"><Mail size={22} className="shrink-0 text-primary" aria-hidden="true" />{siteConfig.email}</a><Link href="/#kontak" className="inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary underline-offset-4 hover:underline">Formulir konsultasi <ArrowUpRight size={21} aria-hidden="true" /></Link></div></div></section>
  </div>;
}
