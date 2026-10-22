import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../lib/site-config";

const services = [
  { image: "/images/modern.jpg", alt: "Ilustrasi eksterior rumah modern", label: "Jasa Desain Rumah", href: "#desain-rumah" },
  { image: "/images/mediterranean-villa.jpg", alt: "Ilustrasi villa dengan kolam renang", label: "Jasa Desain Villa", href: "#desain-villa" },
  { image: "/images/interior.jpg", alt: "Ilustrasi desain interior ruang keluarga", label: "Jasa Desain Interior", href: "#desain-interior" },
  { image: "/images/testimonial-home-dewi.jpg", alt: "Ilustrasi keselarasan arsitektur dan interior rumah", label: "Jasa Desain Rumah + Interior", href: "#desain-rumah-interior" },
  { image: "/images/industrial-loft.jpg", alt: "Ilustrasi ruang bangunan dengan mezzanine", label: "Jasa Desain Bangunan Lain", href: "#desain-komersial" },
  { image: "/images/construction-structure.jpg", alt: "Ilustrasi pekerjaan konstruksi dan renovasi", label: "Jasa Renovasi Rumah", href: "#renovasi-rumah" },
];

export default function ProjectSummary() {
  return <section className="relative z-10 mx-auto -mt-[clamp(90px,12svh,130px)] w-[calc(100%-48px)] max-w-[1280px] overflow-hidden rounded-[28px] border border-white/55 bg-glass text-glass-foreground shadow-[0_24px_70px_-20px_#8a603a33,inset_0_1px_0_#ffffffb3] backdrop-blur-[28px] backdrop-saturate-[1.8] max-[600px]:-mt-[90px] max-[600px]:w-[calc(100%-24px)]" aria-labelledby="completed-projects-title">
    <div className="flex flex-col items-center bg-[radial-gradient(ellipse_at_top,#fff7e999,transparent_70%)] px-6 pt-12 pb-11 text-center max-[600px]:px-5 max-[600px]:pt-9 max-[600px]:pb-8 [&>h2]:mt-2 [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:tracking-[2px] [&>h2]:uppercase [&>p]:mt-2.5 [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-glass-foreground/75">
      <span className="text-[15px] leading-relaxed font-semibold tracking-[2px] text-glass-foreground/80 max-[600px]:text-[15px] max-[600px]:tracking-[1.3px]">SETIAP RANCANGAN, SEBUAH KEPERCAYAAN</span>
      <strong data-motion="title" className="mt-4 font-sans text-[clamp(60px,7vw,90px)] leading-none font-bold tracking-tight text-glass-foreground tabular-nums">{siteConfig.stats[0].value}</strong>
      <h2 data-motion="text" id="completed-projects-title">Desain Finish</h2>
      <p>Proyek yang telah selesai dirancang</p>
      <div data-motion="card" className="mt-7 flex justify-center gap-3 max-[600px]:w-full max-[600px]:gap-2.5 [&>a]:inline-flex [&>a]:min-h-12 [&>a]:items-center [&>a]:justify-center [&>a]:gap-6 [&>a]:border [&>a]:rounded-xl [&>a]:border-primary/35 [&>a]:transition-colors [&>a]:px-[25px] [&>a]:py-3.5 [&>a]:text-base [&>a]:font-semibold max-[600px]:[&>a]:flex-1 max-[600px]:[&>a]:gap-2.5 max-[600px]:[&>a]:px-2.5 max-[600px]:[&>a]:py-[13px] max-[600px]:[&>a]:text-[15px]">
        <a href="#portofolio" className="bg-primary text-primary-foreground shadow-[0_6px_22px_#8a603a25] hover:brightness-90">Desain Terbaik <ArrowUpRight size={17} aria-hidden="true" /></a>
        <a href="#kontak" className="bg-white/35 text-glass-foreground backdrop-blur-[18px] backdrop-saturate-[1.8] hover:bg-white/60">Kontak Kami <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </div>
    <nav className="mx-auto grid max-w-[1280px] grid-cols-6 gap-3 px-6 pb-8 max-[900px]:grid-cols-3 max-[900px]:gap-2.5 max-[600px]:grid-cols-2 max-[600px]:px-5 max-[600px]:pb-9" aria-label="Pilihan jasa desain">
      {services.map(({ image, alt, label, href }) => <a data-motion="card" key={href} href={href} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-glass-edge bg-glass-card text-glass-foreground shadow-glass backdrop-blur-[28px] backdrop-saturate-[1.8] transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 active:scale-95 hover:border-white/80 hover:bg-glass-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0 motion-reduce:active:scale-100">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted"><Image src={image} alt={alt} fill sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 210px" className="object-cover transition-transform duration-500 group-hover:scale-[1.05] group-focus-visible:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100" /></div>
        <div className="flex flex-1 items-center justify-between gap-2 px-3.5 py-5"><span className="text-base leading-relaxed font-semibold">{label}</span><ArrowUpRight size={18} aria-hidden="true" className="shrink-0 opacity-75 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" /></div>
      </a>)}
    </nav>
  </section>;
}
