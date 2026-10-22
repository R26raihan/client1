import SectionHeading from "./SectionHeading";

const steps = [
  { title: "Konsultasi Awal", description: "Ceritakan kebutuhan, gaya hunian, dan anggaran Anda agar kami dapat menyusun arah perancangan." },
  { title: "Survey & Pengukuran Lokasi", description: "Tim mempelajari kondisi lahan dan melakukan pengukuran sebagai dasar rancangan yang akurat." },
  { title: "Desain & Revisi", description: "Kami mengembangkan konsep dan menyempurnakan desain bersama Anda sesuai lingkup revisi yang disepakati." },
  { title: "Rencana Anggaran Biaya (RAB)", description: "Rincian pekerjaan dan biaya disusun agar Anda dapat merencanakan pembangunan dengan lebih pasti." },
  { title: "Pengerjaan & Pengawasan Lapangan", description: "Pembangunan dilaksanakan dengan pemantauan berkala untuk menjaga kesesuaian desain dan kualitas pekerjaan." },
];

export default function Process() {
  return (
    <section id="proses" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Proses Kerja" title="Langkah yang jelas, dari awal hingga serah terima" description="Anda terlibat di setiap keputusan penting, dengan komunikasi terbuka sepanjang perjalanan membangun." />
        <ol className="relative mt-14 grid gap-8 xl:grid-cols-5">
          {steps.map((step, index) => (
            <li data-motion="step" key={step.title} className="group relative flex gap-5 xl:flex-col">
              {index < steps.length - 1 && <span aria-hidden="true" className="absolute top-12 bottom-[-2rem] left-6 w-px bg-border-subtle xl:top-6 xl:right-[-2rem] xl:bottom-auto xl:left-12 xl:h-px xl:w-auto" />}
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 text-lg font-semibold text-primary-foreground">{String(index + 1).padStart(2, "0")}</span>
              <div><h3 className="mb-3 font-serif text-2xl font-medium">{step.title}</h3><p className="text-lg leading-relaxed text-muted-foreground">{step.description}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
