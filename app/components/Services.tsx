import { Armchair, BadgeCheck, Box, Calculator, Clock3, HardHat, House, RefreshCcw, ShieldCheck, Wallet } from "lucide-react";
import { waLink } from "../lib/site-config";
import SectionHeading from "./SectionHeading";

const services = [
  { id: "desain-villa", icon: House, title: "Jasa Desain Villa", description: "Perancangan villa dengan suasana tenang, ruang terbuka, dan hubungan yang selaras dengan lingkungan sekitar." },
  { id: "desain-rumah-interior", icon: Armchair, title: "Jasa Desain Rumah + Interior", description: "Rancangan arsitektur dan interior yang dikembangkan bersama agar tata ruang, material, dan detail rumah terasa menyatu." },
  { id: "desain-komersial", icon: House, title: "Jasa Desain Bangunan Lain", description: "Perencanaan ruko, kantor, dan ruang usaha yang menyesuaikan kegiatan, kebutuhan pengguna, serta karakter bisnis Anda." },
  { id: "desain-rumah", icon: House, title: "Jasa Desain Arsitektur Rumah", description: "Rumah yang mencerminkan karakter Anda, dengan tata ruang yang nyaman dan pencahayaan alami yang optimal." },
  { id: "desain-interior", icon: Armchair, title: "Jasa Desain Interior", description: "Hadirkan ruang yang hangat dan fungsional melalui pemilihan material, furnitur, serta detail yang selaras." },
  { id: "bangun-kontraktor", icon: HardHat, title: "Jasa Bangun & Kontraktor", description: "Wujudkan rancangan menjadi hunian dengan pelaksanaan terencana dan pengawasan kualitas di setiap tahap." },
  { id: "rab-biaya", icon: Calculator, title: "Jasa RAB & Konsultasi Biaya", description: "Susun prioritas dan anggaran pembangunan melalui perhitungan kebutuhan material serta pekerjaan yang terperinci." },
  { id: "renovasi-rumah", icon: RefreshCcw, title: "Jasa Renovasi Rumah", description: "Berikan kehidupan baru pada rumah Anda dengan penataan ulang yang menyesuaikan kebutuhan keluarga." },
  { id: "visualisasi-3d", icon: Box, title: "Visualisasi 3D & Virtual Tour", description: "Jelajahi suasana dan proporsi ruang sebelum pembangunan dimulai melalui visualisasi yang mudah dipahami." },
];
const strengths = [
  { icon: BadgeCheck, title: "Desainer Berpengalaman" },
  { icon: Wallet, title: "Harga Transparan" },
  { icon: ShieldCheck, title: "Garansi Revisi Desain" },
  { icon: Clock3, title: "Pengerjaan Tepat Waktu" },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-linear-to-b from-background via-surface-muted/70 to-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Layanan Kami" title="Dari gagasan pertama hingga rumah terasa sempurna" description="Layanan desain dan pembangunan yang saling terhubung, disesuaikan dengan kebutuhan serta anggaran Anda." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, description }) => (
            <article data-motion="card" id={id} key={title} className="rounded-2xl border border-glass-edge bg-glass-card p-7 shadow-glass backdrop-blur-[28px] backdrop-saturate-[1.8] transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1 focus-within:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0 hover:border-primary/35 hover:bg-glass-card-hover motion-reduce:transition-none">
              <span className="mb-6 inline-flex rounded-2xl border border-primary/10 bg-primary/8 p-3 text-primary"><Icon size={25} aria-hidden="true" /></span>
              <h3 className="mb-3 font-serif text-2xl font-medium">{title}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
              <a href={waLink(`Halo Loka Architect, saya ingin informasi mengenai ${title}.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline">Diskusikan layanan ini <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <div className="mt-12 border-t border-border-subtle pt-8">
          <h3 className="mb-6 text-center font-serif text-2xl">Mengapa Memilih Kami</h3>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ icon: Icon, title }) => <li data-motion="fade" key={title} className="flex items-center justify-center gap-3 text-lg font-medium"><Icon size={20} className="shrink-0 text-primary" aria-hidden="true" />{title}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
