import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  { name: "Andi Pratama", city: "Jakarta", quote: "Kebutuhan keluarga kami benar-benar didengarkan. Hasil desainnya terasa lapang, terang, dan tetap sesuai anggaran yang kami siapkan." },
  { name: "Dewi Lestari", city: "Bandung", quote: "Proses diskusi dan revisinya nyaman. Kami terbantu sekali oleh visualisasi 3D sebelum memutuskan detail interior rumah." },
  { name: "Budi Santoso", city: "Surabaya", quote: "Rincian biaya dijelaskan sejak awal dan perkembangan pekerjaan selalu dikabarkan. Membangun rumah jadi terasa lebih tenang." },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Testimoni" title="Cerita di balik rumah yang nyaman" description="Gambaran pengalaman merancang dan membangun bersama tim kami." />
        <p className="mt-4 text-center text-xs text-muted-foreground">Contoh testimoni untuk pratinjau; belum merupakan ulasan klien terverifikasi.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="flex flex-col rounded-3xl border border-border-subtle bg-surface p-8">
              <div className="mb-6 flex gap-1 text-primary" role="img" aria-label="5 dari 5 bintang">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={17} fill="currentColor" aria-hidden="true" />)}</div>
              <blockquote className="mb-8 flex-1 leading-relaxed text-foreground">“{item.quote}”</blockquote>
              <figcaption className="border-t border-border-subtle pt-5"><span className="block font-semibold">{item.name}</span><span className="text-sm text-muted-foreground">{item.city}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
