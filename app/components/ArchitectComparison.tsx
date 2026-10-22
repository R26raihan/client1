import { ArrowUpRight } from "lucide-react";
import { darkSectionTheme } from "../lib/theme";
import { waLink } from "../lib/site-config";
import SectionHeading from "./SectionHeading";

const comparisons = [
  { topic: "Tata ruang", risk: "Ruang berisiko terasa sempit, alur aktivitas kurang nyaman, atau sulit menyesuaikan kebutuhan keluarga.", benefit: "Denah dirancang berdasarkan kebiasaan, kebutuhan ruang, dan karakter lahan Anda." },
  { topic: "Anggaran pembangunan", risk: "Perubahan saat pengerjaan dapat menambah pembelian material dan biaya bongkar pasang.", benefit: "Prioritas desain, pilihan material, dan estimasi biaya dibahas sebelum pembangunan." },
  { topic: "Gambaran hasil akhir", risk: "Proporsi bangunan dan suasana ruang baru terlihat jelas ketika sudah terbangun.", benefit: "Visualisasi 3D membantu Anda menilai tampilan dan menyepakati arah desain lebih awal." },
  { topic: "Cahaya & sirkulasi udara", risk: "Penempatan bukaan yang kurang tepat bisa membuat ruang terasa gelap atau pengap.", benefit: "Arah matahari, bukaan, dan hubungan antar ruang dipertimbangkan sejak perencanaan." },
  { topic: "Acuan pelaksanaan", risk: "Instruksi yang hanya disampaikan secara lisan lebih mudah ditafsirkan berbeda di lapangan.", benefit: "Gambar kerja dan detail sesuai paket menjadi acuan bersama untuk pelaksanaan." },
  { topic: "Kebutuhan masa depan", risk: "Renovasi atau penambahan ruang bisa lebih sulit bila tidak dipikirkan sejak awal.", benefit: "Potensi pengembangan rumah dapat dibicarakan agar rancangan mengikuti perjalanan keluarga." },
];

export default function ArchitectComparison() {
  return <section id="manfaat-arsitek" className="bg-background py-20 text-foreground sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="Sebelum Anda Membangun" title="Keputusan hari ini, kenyamanan bertahun-tahun." description="Membangun tanpa perencanaan arsitektur dapat membawa risiko yang baru terasa belakangan. Lihat bagaimana perencanaan bersama Loka Architect membantu Anda mengambil keputusan." />
      <div className="mt-12 overflow-hidden rounded-3xl border border-border-subtle">
        <div className="hidden grid-cols-2 md:grid" aria-hidden="true">
          <div className="bg-surface-muted p-7"><p className="text-xl font-semibold">Tanpa arsitek</p><p className="mt-2 text-lg text-muted-foreground">Risiko yang perlu dipertimbangkan</p></div>
          <div className={`bg-accent p-7 text-foreground ${darkSectionTheme}`}><p className="text-xl font-semibold">Bersama Loka Architect</p><p className="mt-2 text-lg text-muted-foreground">Rencanakan sebelum mewujudkan</p></div>
        </div>
        {comparisons.map((item, index) => <article data-motion="card" key={item.topic} className="group grid border-t border-border-subtle first:border-t-0 md:grid-cols-2">
          <div className="bg-surface-muted/40 p-6 transition-colors duration-300 group-hover:bg-surface-muted sm:p-7 motion-reduce:transition-none">
            <p className="mb-3 text-base font-medium text-muted-foreground md:hidden">Tanpa arsitek</p>
            <h3 className="mb-3 flex items-center gap-3 text-xl font-semibold"><span className="font-mono text-base text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>{item.topic}</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">{item.risk}</p>
          </div>
          <div className={`border-t border-primary/20 bg-accent p-6 text-foreground sm:p-7 md:border-t-0 md:border-l ${darkSectionTheme}`}>
            <p className="mb-3 text-base font-semibold text-primary md:hidden">Bersama Loka Architect</p>
            <p className="mb-3 hidden text-xl font-semibold text-primary md:block">{item.topic}</p>
            <p className="text-lg leading-relaxed">{item.benefit}</p>
          </div>
        </article>)}
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">Setiap proyek memiliki kondisi berbeda. Detail layanan, estimasi biaya, dan pendampingan mengikuti paket serta kesepakatan proyek Anda.</p>
        <a href={waLink("Halo Loka Architect, saya ingin berdiskusi tentang perencanaan rumah saya.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">Diskusikan rencana Anda <ArrowUpRight size={22} aria-hidden="true" /></a>
      </div>
    </div>
  </section>;
}
