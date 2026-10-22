"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Rotate3D } from "lucide-react";
import { virtualTours, type VirtualTourExample } from "../lib/virtual-tours";
import VirtualTour from "./VirtualTour";

export default function VRGallery() {
  const [selected, setSelected] = useState<VirtualTourExample>(virtualTours[0]);

  return <>
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><h2 className="font-serif text-3xl sm:text-4xl">Pilih ruang untuk dijelajahi.</h2><p className="mt-3 text-lg text-muted-foreground">Empat suasana berbeda. Pilih foto, lalu mulai tur di bawahnya.</p></div><span className="text-base font-medium text-primary">4 contoh panorama 360°</span></div>
    <div role="group" aria-label="Pilihan contoh panorama 360 derajat" className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {virtualTours.map(tour => <button key={tour.id} type="button" aria-pressed={selected.id === tour.id} aria-controls="active-vr-example" onClick={() => setSelected(tour)} className={`group overflow-hidden rounded-2xl border-2 bg-glass-card text-left transition-colors hover:border-primary motion-reduce:transition-none ${selected.id === tour.id ? "border-primary ring-2 ring-primary/20" : "border-border-subtle"}`}>
        <span className="relative block aspect-[16/9] overflow-hidden"><Image src={tour.preview} alt={`Pratinjau ${tour.title.toLowerCase()} 360 derajat`} fill sizes="(max-width: 639px) 90vw, (max-width: 1279px) 45vw, 320px" className="object-cover" /><span className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-black/65 text-white">{selected.id === tour.id ? <Check size={22} aria-hidden="true" /> : <Rotate3D size={22} aria-hidden="true" />}</span></span>
        <span className="block p-5"><span className="block text-xl font-semibold">{tour.title}</span><span className="mt-2 block min-h-14 text-base leading-7 text-muted-foreground">{tour.description}</span><span className="mt-3 block text-base font-semibold text-primary">{selected.id === tour.id ? "Sedang dipilih" : "Pilih panorama →"}</span></span>
      </button>)}
    </div>
    <div id="active-vr-example"><p role="status" className="mb-5 text-lg font-medium text-primary">Pilihan Anda: {selected.title}</p><VirtualTour key={selected.id} tour={selected} /></div>
  </>;
}
