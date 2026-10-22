import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { waLink } from "../lib/site-config";

export default function Hero() {
  return <>
    <section id="top" className="relative isolate z-0 overflow-hidden h-[calc(100svh-125px)] min-h-[800px] max-h-[900px] bg-[#343a32] text-white max-[600px]:h-[calc(90svh-110px)] max-[600px]:min-h-[900px]">
      <Image src="/images/residence.jpg" alt="Rumah modern dengan bukaan kaca, taman tropis, dan kolam renang" fill preload sizes="100vw" data-motion="hero" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#101a16c9,#14201945_65%,#101a1620),linear-gradient(0deg,#101a16a8,transparent_45%)]" />
      <div className="absolute inset-x-[7vw] top-[21%] max-[600px]:top-[12%] [&>h1]:my-6 [&>h1]:font-serif [&>h1]:text-[clamp(42px,4.8vw,76px)] [&>h1]:leading-[1.15] [&>h1]:font-normal [&>h1]:tracking-[-2px] [&_em]:font-normal [&_em]:text-white [&>p]:text-lg [&>p]:leading-[1.9] [&>p]:text-white max-[600px]:[&>h1]:tracking-[-1.5px] max-[600px]:[&>p]:text-[15px]">
        <span className="text-[15px] tracking-[3px] text-[#e4d7be]">ARSITEKTUR · INTERIOR · KONSTRUKSI</span>
        <h1 data-motion="title">Ruang yang indah.<br />Hidup yang <em>bermakna.</em></h1>
        <p data-motion="text">Merancang rumah yang bukan hanya Anda tinggali,<br className="hidden sm:block" /> tetapi benar-benar Anda rasakan sebagai rumah.</p>
        <div data-motion="card" className="mt-8 flex flex-wrap gap-3"><a href="#portofolio" className="inline-flex items-center justify-center min-h-14 gap-4 px-6 py-4 text-base font-medium transition-[transform,background-color] duration-200 hover:-translate-y-0.5 active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 bg-primary text-primary-foreground hover:brightness-90">Jelajahi karya kami <ArrowUpRight size={17} /></a><a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center min-h-14 gap-4 px-6 py-4 text-base font-medium transition-[transform,background-color] duration-200 hover:-translate-y-0.5 active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 border border-white/50 bg-transparent text-white hover:bg-white/10">Konsultasi gratis <ArrowUpRight size={17} /></a></div>
      </div>
      <div className="absolute inset-x-[7vw] bottom-[155px] flex justify-between text-[15px] tracking-[2px] [&>a]:flex [&>a]:items-center [&>a]:gap-3.5 max-[600px]:bottom-[115px] max-[600px]:[&>span]:hidden"><span>DESAIN DENGAN KARAKTER. DIBANGUN DENGAN HATI.</span><a href="#portofolio">SCROLL UNTUK EKSPLORASI <ArrowDown size={15} /></a></div>
      <div className="absolute right-[7vw] bottom-[200px] flex flex-col gap-[9px] border-l border-white/40 pl-[22px] [&>span]:text-[15px] [&>span]:tracking-[1px] [&>span]:text-[#e5e6df] [&>strong]:font-serif [&>strong]:text-[22px] [&>strong]:font-normal max-[900px]:hidden"><span>01 / SELECTED CONCEPT</span><strong>The Tropical Residence</strong><span>Modern tropis · Studi konsep</span></div>
    </section>
  </>;
}
