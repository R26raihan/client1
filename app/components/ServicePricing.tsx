"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { estimateServiceCost, type ServicePage } from "../lib/service-pages";
import { rupiah } from "../lib/building-services";
import { siteConfig } from "../lib/site-config";

export default function ServicePricing({ service }: { service: ServicePage }) {
  const [packageIndex, setPackageIndex] = useState(0);
  const [quantity, setQuantity] = useState(String(service.defaultQuantity));
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const selected = service.packages[packageIndex];
  const total = estimateServiceCost(selected.rate, Number(quantity));
  const message = `Halo Loka Architect, saya ingin informasi ${service.title}.\nPaket: ${selected.title}\nJumlah: ${quantity} ${selected.unit}\nLokasi: ${location}\nCatatan: ${notes || "Akan didiskusikan"}\n\nSimulasi tarif DUMMY: ${rupiah(total)}. Bukan penawaran final.`;

  function selectPackage(index: number) {
    if (service.packages[index].unit !== selected.unit) setQuantity("1");
    setPackageIndex(index);
  }

  return <>
    <fieldset><legend className="mb-6 text-lg font-medium">Pilih paket untuk melihat simulasi</legend><div className="grid gap-5 lg:grid-cols-3">{service.packages.map((option, index) => <label key={option.title} className={`cursor-pointer rounded-2xl border-2 bg-glass-card p-6 shadow-glass backdrop-blur-xl ${index === packageIndex ? "border-primary" : "border-border-subtle hover:border-primary/50"}`}><span className="flex items-center justify-between gap-4 text-xl font-semibold">{option.title}<input type="radio" name={`paket-${service.slug}`} checked={index === packageIndex} onChange={() => selectPackage(index)} className="size-6 shrink-0 accent-primary" /></span><span className="mt-5 block text-3xl font-semibold">{rupiah(option.rate)}</span><span className="mt-1 block text-base text-muted-foreground">per {option.unit} · tarif dummy</span><span className="mt-5 block text-lg leading-8 text-muted-foreground">{option.description}</span></label>)}</div></fieldset>
    <form action={`https://wa.me/${siteConfig.waNumber}`} method="get" target="_blank" rel="noopener noreferrer" className="mt-9 grid gap-8 rounded-2xl border border-border-subtle bg-surface-muted/30 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <input type="hidden" name="text" value={message} />
      <div className="grid gap-5 sm:grid-cols-2"><label className="text-base font-medium">{service.quantityLabel} ({selected.unit})<input type="number" required min="1" max="1000000" step={selected.unit === "m²" ? "0.01" : "1"} value={quantity} onChange={event => setQuantity(event.target.value)} className="mt-2 min-h-14 w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-lg outline-primary" /></label><label className="text-base font-medium">Lokasi proyek<input required type="text" value={location} onChange={event => setLocation(event.target.value)} placeholder="Kota / kabupaten" autoComplete="address-level2" className="mt-2 min-h-14 w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-lg outline-primary" /></label><label className="text-base font-medium sm:col-span-2">Kebutuhan Anda<textarea rows={4} value={notes} onChange={event => setNotes(event.target.value)} placeholder={`Ceritakan kebutuhan ${service.title.toLowerCase()} Anda.`} className="mt-2 w-full resize-y rounded-xl border border-border-subtle bg-background px-4 py-3 text-lg outline-primary" /></label></div>
      <div><p className="text-base font-semibold uppercase tracking-widest text-primary">Simulasi tarif dummy</p><p className="mt-4 text-lg text-muted-foreground">{service.costLabel}</p><output aria-live="polite" className="mt-3 block break-words text-3xl font-semibold sm:text-4xl">{total > 0 ? rupiah(total) : "Masukkan jumlah"}</output><p className="mt-4 text-lg text-muted-foreground">{quantity || "—"} {selected.unit} × {rupiah(selected.rate)} / {selected.unit}</p><p className="mt-5 border-t border-border-subtle pt-5 text-base leading-7 text-muted-foreground">{service.limitations}</p><button type="submit" className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-primary px-5 py-4 text-lg font-semibold text-primary-foreground hover:brightness-110">Diskusikan paket ini <ArrowUpRight size={22} aria-hidden="true" /></button></div>
    </form>
  </>;
}
