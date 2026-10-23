import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { servicePages } from "../../lib/service-pages";
import { darkSectionTheme } from "../../lib/theme";
import { waLink } from "../../lib/site-config";
import ServicePricing from "../../components/ServicePricing";

export function generateStaticParams() {
  return servicePages.map(service => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/jasa/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find(item => item.slug === slug);
  return service ? { title: `${service.title} — Loka Architect`, description: service.description } : { title: "Layanan tidak ditemukan — Loka Architect" };
}

export default async function ServiceDetailPage({ params }: PageProps<"/jasa/[slug]">) {
  const { slug } = await params;
  const service = servicePages.find(item => item.slug === slug);
  if (!service) notFound();
  const consultation = waLink(`Halo Loka Architect, saya ingin berkonsultasi mengenai ${service.title}.`);

  return <div className="bg-background text-foreground">
    <div className="mx-auto max-w-[1440px] px-6 pt-8 sm:px-10 sm:pt-12"><nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><Link href="/#layanan" className="hover:text-primary">Harga & Layanan</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
      <div className={service.layout === "split" ? "grid items-center gap-8 pb-12 lg:grid-cols-2 lg:gap-14 sm:pb-16" : "pb-12 sm:pb-16"}><div><p className="mb-5 text-lg font-semibold text-primary">{service.title}</p><h1 className="font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">{service.headline[0]}<br /><span className="text-muted-foreground">{service.headline[1]}</span></h1><p className="mt-7 max-w-2xl text-xl leading-9 text-muted-foreground">{service.description}</p><a href="#tarif-layanan" className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Lihat paket & simulasi <ArrowUpRight size={22} aria-hidden="true" /></a></div>{service.layout === "split" && <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted"><Image src={service.image} alt={`Ilustrasi ${service.title.toLowerCase()}`} fill sizes="(max-width: 1023px) 95vw, 650px" preload className="object-cover" /></div>}</div>
    </div>
    {service.layout === "wide" && <div className="relative mx-auto aspect-[4/3] max-w-[1600px] bg-surface-muted sm:aspect-[16/7]"><Image src={service.image} alt={`Ilustrasi ${service.title.toLowerCase()}`} fill sizes="100vw" preload className="object-cover" /></div>}
    <p className="mx-auto max-w-[1440px] px-6 py-4 text-base text-muted-foreground sm:px-10">Foto ilustratif untuk menjelaskan lingkup layanan.</p>
    <nav aria-label="Bagian layanan" className="sticky top-[120px] z-30 overflow-x-auto border-y border-border-subtle bg-background/95 px-6 backdrop-blur-xl sm:px-10"><div className="mx-auto flex max-w-7xl gap-2 py-3 sm:gap-6">{[["#pendekatan-layanan", "Pendekatan"], ["#hasil-layanan", "Hasil Pekerjaan"], ["#tarif-layanan", "Tarif & Simulasi"], ["#tahapan-layanan", "Tahapan"], ["#pertanyaan-layanan", "Pertanyaan"]].map(([href, label]) => <a key={href} href={href} className="inline-flex min-h-12 shrink-0 items-center rounded-full px-4 text-lg font-medium hover:bg-primary/10 hover:text-primary">{label}</a>)}</div></nav>

    <section id="pendekatan-layanan" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-20"><div><p className="mb-5 text-lg font-semibold text-primary">PENDEKATAN LAYANAN</p><h2 className="font-serif text-3xl leading-tight sm:text-4xl">{service.introTitle}</h2><p className="mt-6 text-xl leading-9 text-muted-foreground">{service.intro}</p></div><ol className="divide-y divide-border-subtle border-y border-border-subtle">{service.focus.map((focus, index) => <li key={focus} className="flex gap-5 py-7"><span className="font-mono text-lg text-primary">0{index + 1}</span><p className="text-xl leading-8">{focus}</p></li>)}</ol></section>

    <section id="hasil-layanan" className={`bg-accent px-6 py-16 text-foreground sm:px-10 sm:py-24 ${darkSectionTheme}`}><div className="mx-auto max-w-7xl"><h2 className="font-serif text-3xl sm:text-4xl">Hasil yang dibahas dalam layanan.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">Kelengkapan disesuaikan dengan paket. Batas pekerjaan, jumlah revisi, dan format penyerahan akan dicantumkan dalam proposal.</p><div className="mt-9 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">{service.outputs.map(output => <article key={output.title}><div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-muted"><Image src={output.image} alt={`Ilustrasi ${output.title.toLowerCase()}`} fill sizes="(max-width: 639px) 95vw, (max-width: 1279px) 45vw, 300px" className="object-cover" /></div><h3 className="mt-5 text-xl font-semibold">{output.title}</h3><p className="mt-3 text-lg leading-8 text-muted-foreground">{output.description}</p></article>)}</div>{service.slug === "visualisasi-3d" && <div className="mt-8 flex flex-wrap gap-5"><Link href="/vr" className="inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary">Coba panorama 360° <ArrowUpRight size={21} aria-hidden="true" /></Link><Link href="/video-3d" className="inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary">Jelajahi galeri video <ArrowUpRight size={21} aria-hidden="true" /></Link></div>}</div></section>

    <section id="tarif-layanan" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24"><p className="mb-5 text-lg font-semibold uppercase tracking-widest text-primary">Tarif dummy · untuk pratinjau</p><h2 className="font-serif text-3xl sm:text-5xl">Paket {service.title.toLowerCase()}.</h2><p className="mt-5 mb-9 max-w-3xl text-lg leading-8 text-muted-foreground">Pilih paket dan ubah jumlah untuk menghitung simulasi. Nominal belum merupakan tarif resmi atau penawaran final Loka.</p><ServicePricing key={service.slug} service={service} /></section>

    <section id="tahapan-layanan" className="border-y border-border-subtle bg-surface-muted/40 px-6 py-16 sm:px-10 sm:py-24"><div className="mx-auto max-w-7xl"><h2 className="font-serif text-3xl sm:text-4xl">Tahapan {service.title.toLowerCase()}.</h2><ol className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{service.steps.map((step, index) => <li key={step} className="border-t border-primary/40 pt-5"><span className="text-lg font-medium text-primary">0{index + 1}</span><h3 className="mt-4 font-serif text-2xl leading-snug">{step}</h3></li>)}</ol></div></section>

    <section id="pertanyaan-layanan" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><h2 className="font-serif text-3xl leading-tight sm:text-4xl">Sebelum menentukan pilihan.</h2><a href={consultation} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Tanyakan kepada tim <ArrowUpRight size={22} aria-hidden="true" /></a></div><div className="divide-y divide-border-subtle border-y border-border-subtle">{service.faq.map((item, index) => <details key={item.question} open={index === 0} className="group"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-6 marker:content-none hover:text-primary [&::-webkit-details-marker]:hidden"><h3 className="text-xl font-semibold">{item.question}</h3><span aria-hidden="true" className="text-3xl text-primary group-open:hidden">+</span><span aria-hidden="true" className="hidden text-3xl text-primary group-open:block">−</span></summary><p className="pb-7 text-lg leading-8 text-muted-foreground">{item.answer}</p></details>)}</div></section>

    <nav aria-label="Pilihan layanan lainnya" className="border-t border-border-subtle px-6 py-12 sm:px-10"><div className="mx-auto max-w-7xl"><h2 className="mb-6 font-serif text-3xl">Layanan lainnya</h2><div className="flex flex-wrap gap-3">{servicePages.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`/jasa/${item.slug}`} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-subtle px-5 py-3 text-base font-medium hover:border-primary hover:text-primary">{item.title}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}<Link href="/jasa-desain-bangunan" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-subtle px-5 py-3 text-base font-medium hover:border-primary hover:text-primary">Jasa Desain Bangunan<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></nav>
  </div>;
}
