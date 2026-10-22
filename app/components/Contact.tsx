"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, waLink } from "../lib/site-config";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [fields, setFields] = useState({ name: "", phone: "", city: "", needs: "" });
  const inputClass = "mt-2 min-h-14 w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow] duration-200 focus:shadow-[0_0_0_4px_var(--border-subtle)] motion-reduce:transition-none focus:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Halo ${siteConfig.name}, saya ingin berkonsultasi.\n\nNama: ${fields.name.trim()}\nNo. WhatsApp: ${fields.phone.trim()}\nKota: ${fields.city.trim()}\nKebutuhan: ${fields.needs.trim()}`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="kontak" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Hubungi Kami" title="Rumah impian dimulai dari sebuah percakapan" description="Ceritakan rencana Anda. Mari temukan solusi ruang dan langkah pembangunan yang paling sesuai." align="left" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form data-motion="card" onSubmit={handleSubmit} className="rounded-3xl border border-glass-edge bg-glass-card shadow-glass backdrop-blur-[28px] backdrop-saturate-[1.8] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label htmlFor="contact-name" className="text-lg font-medium">Nama<input id="contact-name" name="name" autoComplete="name" required maxLength={100} value={fields.name} onChange={(event) => setFields({ ...fields, name: event.target.value })} placeholder="Nama lengkap Anda" className={inputClass} /></label>
              <label htmlFor="contact-phone" className="text-lg font-medium">No. WhatsApp<input id="contact-phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} value={fields.phone} onChange={(event) => setFields({ ...fields, phone: event.target.value })} placeholder="Contoh: 081234567890" className={inputClass} /></label>
              <label htmlFor="contact-city" className="text-lg font-medium sm:col-span-2">Kota<input id="contact-city" name="city" autoComplete="address-level2" required maxLength={100} value={fields.city} onChange={(event) => setFields({ ...fields, city: event.target.value })} placeholder="Lokasi rencana proyek" className={inputClass} /></label>
              <label htmlFor="contact-needs" className="text-lg font-medium sm:col-span-2">Kebutuhan<textarea id="contact-needs" name="needs" required maxLength={2000} rows={4} value={fields.needs} onChange={(event) => setFields({ ...fields, needs: event.target.value })} placeholder="Ceritakan luas lahan, kebutuhan ruang, dan rencana Anda…" className={`${inputClass} resize-y`} /></label>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 min-h-14 text-lg font-semibold text-primary-foreground transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-90 active:scale-[.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Kirim via WhatsApp<ArrowUpRight size={18} aria-hidden="true" /></button>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">WhatsApp akan terbuka dengan pesan yang sudah terisi. Anda dapat meninjaunya sebelum mengirim.</p>
          </form>
          <aside data-motion="text" className="rounded-3xl border border-glass-edge bg-glass-card shadow-glass backdrop-blur-[28px] backdrop-saturate-[1.8] p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-medium">Senang bisa mengenal rencana Anda</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">Hubungi tim kami untuk membahas layanan dan jadwal konsultasi.</p>
            <dl className="my-8 space-y-6">
              {[
                { icon: MapPin, label: "Alamat Studio", value: siteConfig.address },
                { icon: Phone, label: "Telepon / WhatsApp", value: siteConfig.phoneDisplay },
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Clock3, label: "Jam Operasional", value: siteConfig.operatingHours },
              ].map(({ icon: Icon, label, value, href }) => <div key={label} className="flex gap-4"><Icon size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" /><div><dt className="mb-1 text-lg font-semibold">{label}</dt><dd className="text-lg leading-relaxed break-words text-muted-foreground">{href ? <a href={href} className="hover:text-primary hover:underline">{value}</a> : value}</dd></div></div>)}
            </dl>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-lg font-semibold text-accent-foreground transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-90 active:scale-[.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"><MessageCircle size={18} aria-hidden="true" />Chat via WhatsApp</a>
          </aside>
        </div>
      </div>
    </section>
  );
}
