"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Rotate3D } from "lucide-react";
import { virtualTours, virtualTourUrl, type VirtualTourExample } from "../lib/virtual-tours";

export default function VirtualTour({ tour = virtualTours[0] }: { tour?: VirtualTourExample }) {
  const [started, setStarted] = useState(false);
  const viewerUrl = virtualTourUrl(tour);

  return <section aria-labelledby="project-tour-title">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <h3 id="project-tour-title" className="font-serif text-2xl sm:text-3xl">Masuk ke dalam ruang, 360°</h3>
      <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-base font-semibold text-primary">Contoh virtual tour</span>
    </div>
    <p className="mb-6 text-lg leading-relaxed text-muted-foreground">Geser dengan mouse atau jari untuk melihat sekeliling. Gunakan tombol + / − untuk zoom dan ikon layar penuh untuk tampilan lebih luas.</p>
    <div className="relative h-[420px] overflow-hidden rounded-2xl border border-border-subtle bg-accent sm:h-[500px]">
      {started ? <iframe src={viewerUrl} title={`Tur panorama 360 derajat — ${tour.asset}`} className="h-full w-full border-0" allow="fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <div className="relative flex h-full flex-col items-center justify-center gap-6 px-6 text-center text-white">
        <Image src={tour.preview} alt={`Pratinjau panorama ${tour.title.toLowerCase()}`} fill sizes="(max-width: 1023px) 100vw, 1280px" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
        <div className="relative flex flex-col items-center gap-6">
        <Rotate3D size={56} strokeWidth={1} className="text-primary" aria-hidden="true" />
        <p className="max-w-sm text-xl leading-relaxed">Jelajahi {tour.title.toLowerCase()} dari segala arah.</p>
        <button type="button" onClick={() => setStarted(true)} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 py-3 text-lg font-semibold text-primary-foreground hover:brightness-110"><Rotate3D size={24} aria-hidden="true" />Mulai tur 360°</button>
        </div>
      </div>}
    </div>
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-base leading-relaxed text-muted-foreground">
      <p>Panorama contoh satu titik pandang, bukan dokumentasi proyek Loka.</p>
      <a href={`https://polyhaven.com/a/${tour.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 underline underline-offset-4 hover:text-primary">{tour.asset} · {tour.author} / Poly Haven · CC0 <ArrowUpRight size={17} aria-hidden="true" /></a>
    </div>
    {started && <a href={viewerUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-12 items-center gap-2 text-base font-medium text-primary underline-offset-4 hover:underline">Buka tur di tab baru <ArrowUpRight size={18} aria-hidden="true" /></a>}
  </section>;
}
