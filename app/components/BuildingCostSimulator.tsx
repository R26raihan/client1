"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { buildingServices, designEstimate, dummyInteriorRate, rupiah } from "../lib/building-services";
import { siteConfig } from "../lib/site-config";

export default function BuildingCostSimulator() {
  const [type, setType] = useState<string>(buildingServices[0].id);
  const [area, setArea] = useState("250");
  const [interior, setInterior] = useState(false);
  const [city, setCity] = useState("");
  const [needs, setNeeds] = useState("");
  const service = buildingServices.find(item => item.id === type)!;
  const numericArea = Number(area);
  const total = designEstimate(type, numericArea, interior);
  const message = `Halo Loka Architect, saya ingin berkonsultasi mengenai jasa desain bangunan.\nJenis: ${service.title}\nPerkiraan luas bangunan: ${area} m²\nLokasi: ${city}\nPaket: ${interior ? "Arsitektur + Interior" : "Arsitektur"}\nKebutuhan: ${needs || "Akan didiskusikan"}\n\nHasil simulasi tarif DUMMY: ${rupiah(total)} (bukan penawaran final).`;
  const fieldClass = "mt-2 min-h-14 w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-lg text-foreground outline-primary";

  return <form action={`https://wa.me/${siteConfig.waNumber}`} method="get" target="_blank" rel="noopener noreferrer" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
    <input type="hidden" name="text" value={message} />
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-base font-medium">Jenis bangunan<select value={type} onChange={event => setType(event.target.value)} className={fieldClass}>{buildingServices.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
      <label className="text-base font-medium">Perkiraan luas bangunan (m²)<input type="number" required min="1" max="1000000" step="0.01" value={area} onChange={event => setArea(event.target.value)} className={fieldClass} /></label>
      <label className="text-base font-medium">Paket desain<select value={interior ? "interior" : "arsitektur"} onChange={event => setInterior(event.target.value === "interior")} className={fieldClass}><option value="arsitektur">Arsitektur</option><option value="interior">Arsitektur + Interior</option></select></label>
      <label className="text-base font-medium">Lokasi proyek<input type="text" required value={city} onChange={event => setCity(event.target.value)} placeholder="Kota / kabupaten" autoComplete="address-level2" className={fieldClass} /></label>
      <label className="text-base font-medium sm:col-span-2">Kebutuhan ruang atau catatan<textarea rows={4} value={needs} onChange={event => setNeeds(event.target.value)} placeholder="Contoh: kantor 2 lantai, ruang meeting, area kerja bersama, dan pantry." className={`${fieldClass} resize-y`} /></label>
    </div>
    <div className="flex flex-col rounded-2xl border border-primary/35 bg-glass-card p-6 shadow-glass backdrop-blur-xl sm:p-8">
      <p className="mb-5 text-base font-semibold uppercase tracking-widest text-primary">Simulasi tarif dummy</p>
      <p className="text-lg text-muted-foreground">Estimasi biaya desain</p><output aria-live="polite" className="mt-3 block break-words text-3xl font-semibold sm:text-4xl">{total > 0 ? rupiah(total) : "Masukkan luas"}</output>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{Number.isFinite(numericArea) && numericArea > 0 ? numericArea.toLocaleString("id-ID") : "—"} m² × {rupiah(service.rate + (interior ? dummyInteriorRate : 0))} / m²</p>
      <p className="mt-5 border-t border-border-subtle pt-5 text-base leading-7 text-muted-foreground">Harga untuk pratinjau, belum menjadi tarif resmi Loka. Nilai ini hanya biaya desain, bukan biaya pembangunan. Lingkup final dan biaya tambahan dibahas dalam penawaran.</p>
      <button type="submit" className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-5 py-4 text-lg font-semibold text-primary-foreground hover:brightness-110">Diskusikan simulasi <ArrowUpRight size={22} aria-hidden="true" /></button>
    </div>
  </form>;
}
