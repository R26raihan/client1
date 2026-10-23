import { darkSectionTheme } from "../lib/theme";
import Image from "next/image";
import Link from "next/link";
import { deliverables } from "../lib/deliverables";
import { ArrowUpRight } from "lucide-react";



export default function Deliverables() {
  return <section id="hasil-desain" className={`bg-accent px-6 py-20 text-foreground sm:px-8 sm:py-24 lg:px-10 ${darkSectionTheme}`}>
    <div className="w-full">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
        <div>
          <span className="mb-5 flex items-center gap-3 text-[15px] font-semibold tracking-[2.5px] text-primary"><span aria-hidden="true" className="h-px w-8 bg-primary/60" />KELENGKAPAN DESAIN</span>
          <h2 data-motion="title" className="font-serif text-[clamp(34px,3.8vw,64px)] leading-[1.12] font-normal tracking-tight">Apa yang Anda<br className="hidden lg:block" /> Dapatkan?</h2>
        </div>
        <p data-motion="text" className="max-w-[440px] text-lg leading-8 text-muted-foreground lg:justify-self-end lg:pb-1">Dari gambaran awal hingga detail teknis, kenali hasil perancangan yang membantu Anda mewujudkan rumah impian.</p>
      </div>
      <ul className="mt-12 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-6">
        {deliverables.map(({ id, image, alt, title, description }, index) => <li data-motion="card" key={title} className="group relative overflow-hidden rounded-2xl border border-glass-edge bg-glass-card shadow-glass backdrop-blur-[28px] backdrop-saturate-[1.8] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:border-primary/50 hover:bg-glass-card-hover hover:shadow-[0_18px_40px_-12px_#00000055] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100">
          <Link href={`/apa-yang-anda-dapatkan#${id}`} className="block h-full">
          <div className="relative aspect-[8/5] overflow-hidden bg-surface-muted">
            <Image src={image} alt={alt} fill sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-full border border-white/50 bg-background/85 text-[15px] font-semibold text-primary backdrop-blur-[18px] backdrop-saturate-[1.8]" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="p-6"><h3 className="text-lg leading-7 font-semibold text-foreground transition-colors group-hover:text-primary motion-reduce:transition-none">{title}</h3><p className="mt-2 text-base leading-7 text-muted-foreground">{description}</p></div>
          </Link>
        </li>)}
      </ul>
      <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-border-subtle pt-6 sm:flex-row sm:items-center"><p className="max-w-2xl text-base leading-7 text-muted-foreground">Gambar merupakan ilustrasi. Kelengkapan dokumen, tingkat detail, dan format penyerahan mengikuti paket serta lingkup pekerjaan yang disepakati.</p><Link href="/apa-yang-anda-dapatkan" className="inline-flex min-h-12 shrink-0 items-center gap-3 text-base font-semibold text-primary hover:underline">Lihat kelengkapan desain <ArrowUpRight size={20} aria-hidden="true" /></Link></div>
    </div>
  </section>;
}
