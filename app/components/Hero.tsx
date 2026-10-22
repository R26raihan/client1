import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { waLink } from "../lib/site-config";

export default function Hero() {
  return <>
    <section id="top" className="architect-hero">
      <Image src="/images/residence.jpg" alt="Rumah modern dengan bukaan kaca, taman tropis, dan kolam renang" fill preload sizes="100vw" className="object-cover" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <span className="hero-eyebrow">ARSITEKTUR · INTERIOR · KONSTRUKSI</span>
        <h1>Ruang yang indah.<br />Hidup yang <em>bermakna.</em></h1>
        <p>Merancang rumah yang bukan hanya Anda tinggali,<br className="hidden sm:block" /> tetapi benar-benar Anda rasakan sebagai rumah.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="#portofolio" className="studio-button">Jelajahi karya kami <ArrowUpRight size={17} /></a><a href={waLink()} target="_blank" rel="noopener noreferrer" className="studio-button ghost">Konsultasi gratis <ArrowUpRight size={17} /></a></div>
      </div>
      <div className="hero-bottom"><span>DESAIN DENGAN KARAKTER. DIBANGUN DENGAN HATI.</span><a href="#portofolio">SCROLL UNTUK EKSPLORASI <ArrowDown size={15} /></a></div>
      <div className="hero-caption"><span>01 / SELECTED CONCEPT</span><strong>The Tropical Residence</strong><span>Modern tropis · Studi konsep</span></div>
    </section>
  </>;
}
