import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Ruler } from "lucide-react";
import { projects } from "../../lib/projects";
import { waLink } from "../../lib/site-config";
import { darkSectionTheme } from "../../lib/theme";
import VirtualTour from "../../components/VirtualTour";
import { getProjectDetails } from "../../lib/project-details";
import { designVideos } from "../../lib/videos";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portofolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return { title: "Konsep tidak ditemukan — Loka Architect" };
  return { title: `${project.title} — Loka Architect`, description: project.description };
}

export default async function ProjectDetail({ params }: PageProps<"/portofolio/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const details = getProjectDetails(project);
  const hasTour = Boolean(details.tour);
  const referenceVideo = designVideos.find(video => video.id === details.videoId);
  const consultation = waLink(`Halo Loka Architect, saya tertarik dengan konsep ${project.title}. Saya ingin berdiskusi tentang kebutuhan dan anggaran proyek saya.`);

  return <article id="detail-proyek" className="bg-background text-foreground">
    <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted sm:aspect-[16/8] xl:aspect-[16/7]">
      <Image src={project.image} alt={`Inspirasi arsitektur ${project.title}`} fill sizes="100vw" preload className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" aria-hidden="true" />
      <span className="absolute bottom-6 left-6 rounded-full border border-white/40 bg-black/40 px-5 py-2 text-base font-medium text-white backdrop-blur-xl sm:bottom-10 sm:left-10">{project.category} · Studi konsep</span>
    </div>

    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><Link href="/portofolio" className="hover:text-primary">Portofolio</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span></nav>
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <div><p className="mb-4 text-lg font-semibold text-primary">ARSITEKTUR & RUANG</p><h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">{project.title}</h1><div className="mt-6 flex flex-wrap gap-6 text-lg text-muted-foreground"><span className="inline-flex items-center gap-2"><MapPin size={21} aria-hidden="true" />{project.city}</span><span className="inline-flex items-center gap-2"><Ruler size={21} aria-hidden="true" />{project.area} m²</span><span>{project.category}</span></div></div>
        <a href={consultation} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-4 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground hover:brightness-110">Pesan jasa arsitek <ArrowUpRight size={22} aria-hidden="true" /></a>
      </div>
    </div>

    <nav aria-label="Bagian detail proyek" className="sticky top-[120px] z-30 border-y border-border-subtle bg-background/95 px-6 backdrop-blur-xl sm:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 overflow-x-auto py-3">
        <div className="flex shrink-0 gap-2 sm:gap-5">{[["#ringkasan", "Detail"], ["#spesifikasi", "Spesifikasi"], ["#ruang-per-lantai", "Ruang per lantai"], ["#tim-proyek", "Tim perancang"], ["#galeri", "Foto ruangan"], ["#video", "Video"], ...(hasTour ? [["#tur-360", "Tur 360°"]] : [])].map(([href, label]) => <a key={href} href={href} className="inline-flex min-h-12 items-center whitespace-nowrap rounded-full px-4 text-base font-medium hover:bg-primary/10 hover:text-primary">{label}</a>)}</div>
        <Link href="/portofolio" className="hidden min-h-12 shrink-0 items-center gap-2 text-base font-medium text-primary lg:inline-flex"><ArrowLeft size={18} aria-hidden="true" />Semua karya</Link>
      </div>
    </nav>

    <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="min-w-0 space-y-16">
        <section id="ringkasan" className="scroll-mt-60">
          <p className="mb-4 text-base font-semibold uppercase tracking-widest text-primary">Tentang desain</p>
          <h2 className="mb-5 font-serif text-3xl sm:text-4xl">{details.title}</h2>
          <div className="space-y-5">{details.story.map(paragraph => <p key={paragraph} className="text-lg leading-9 text-muted-foreground">{paragraph}</p>)}</div>
          <p className="mt-6 border-l-2 border-primary pl-4 text-base leading-7 text-muted-foreground">{details.source ? <>Spesifikasi, deskripsi, dan kredit tim pada contoh ini merujuk pada proyek Emporio Architect. Foto, video, dan panorama yang ditampilkan tetap merupakan ilustrasi terpisah. <a href={details.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">Lihat proyek referensi.</a></> : "Studi konsep ilustratif: ukuran lahan, spesifikasi, dan daftar ruang adalah contoh kebutuhan perancangan, bukan data proyek terbangun. Foto, video, dan panorama merupakan referensi terpisah. Penanggung jawab proyek belum ditetapkan."}</p>
        </section>

        <>
          <section id="spesifikasi" className="scroll-mt-60">
            <p className="mb-3 text-base font-semibold uppercase tracking-widest text-primary">Informasi bangunan</p>
            <h2 className="mb-7 font-serif text-3xl sm:text-4xl">{details.source ? "Spesifikasi hunian" : "Spesifikasi konsep"}</h2>
            <dl className="overflow-hidden rounded-2xl border border-border-subtle">{details.specifications.map(([label, value], row) => <div key={label} className={`grid gap-2 border-b border-border-subtle px-6 py-5 last:border-b-0 sm:grid-cols-[1.3fr_1fr] sm:gap-6 ${row % 2 === 0 ? "bg-surface-muted/50" : "bg-background"}`}><dt className="text-lg text-muted-foreground">{label}</dt><dd className="text-lg font-semibold">{value}</dd></div>)}</dl>
          </section>
          <section id="ruang-per-lantai" className="scroll-mt-60">
            <h2 className="mb-7 font-serif text-3xl sm:text-4xl">{project.category === "Interior" ? "Pembagian area interior" : "Ruang di setiap lantai"}</h2>
            <div className="space-y-5">{details.floors.map((floor, floorIndex) => <details key={floor.name} open className="group overflow-hidden rounded-2xl border border-border-subtle bg-glass-card shadow-glass backdrop-blur-xl">
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 p-6 marker:content-none hover:bg-primary/5 [&::-webkit-details-marker]:hidden"><span className="flex items-center gap-4"><span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">0{floorIndex + 1}</span><span><span className="block font-serif text-2xl">{floor.name}</span><span className="mt-1 block text-base text-muted-foreground">{floor.description}</span></span></span><span aria-hidden="true" className="text-2xl text-primary group-open:hidden">+</span><span aria-hidden="true" className="hidden text-2xl text-primary group-open:block">−</span></summary>
              <ul className="grid gap-x-8 gap-y-4 border-t border-border-subtle px-6 py-6 sm:grid-cols-2">{floor.rooms.map(room => <li key={room} className="flex items-start gap-3 text-lg leading-relaxed"><span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />{room}</li>)}</ul>
            </details>)}</div>
          </section>
          <section id="tim-proyek" className="scroll-mt-60">
            <h2 className="font-serif text-3xl sm:text-4xl">{details.source ? "Tim perancang" : "Contoh tim referensi"}</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{details.source ? "Kredit tim proyek referensi Emporio Architect." : "Contoh profil tim Emporio Architect untuk pratinjau tampilan, bukan penugasan personel pada konsep ini."}</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">{details.team.map(group => <div key={group.role} className="rounded-2xl border border-border-subtle bg-surface-muted/40 p-6"><h3 className="mb-4 text-xl font-semibold text-primary">{group.role}</h3><ul className="space-y-5">{group.members.map(member => <li key={member.name} className="flex items-center gap-4"><Image src={member.image} alt={`Foto profil ${member.name}`} width={80} height={80} sizes="80px" className="size-20 shrink-0 rounded-full border-2 border-primary/30 bg-surface-muted object-cover" /><span className="min-w-0 text-lg leading-relaxed">{member.name}</span></li>)}</ul></div>)}</div>
          </section>
        </>


        <section id="galeri" className="scroll-mt-60"><h2 className="font-serif text-3xl sm:text-4xl">Foto & inspirasi ruangan</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">Jelajahi detail ruang, perpaduan material, dan suasana interior sebagai referensi.</p><div className="mt-7 grid gap-6 sm:grid-cols-2">{details.gallery.map((room, photoIndex) => <figure key={room.image} className={photoIndex === 0 ? "sm:col-span-2" : ""}><div className={`relative overflow-hidden rounded-2xl bg-surface-muted ${photoIndex === 0 ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]"}`}><Image src={room.image} alt={room.label} fill sizes="(max-width: 1023px) 90vw, 800px" className="object-cover" /></div><figcaption className="mt-3 flex gap-3 text-lg"><span className="text-primary">{String(photoIndex + 1).padStart(2, "0")}</span>{room.label}</figcaption></figure>)}</div></section>

        <section id="video" className="scroll-mt-60"><h2 className="mb-6 font-serif text-3xl sm:text-4xl">Video inspirasi desain</h2><div className="aspect-video overflow-hidden rounded-2xl bg-black"><iframe src={`https://www.youtube-nocookie.com/embed/${details.videoId}?rel=0`} title={`Video inspirasi visualisasi untuk ${project.title}`} className="h-full w-full border-0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div><p className="mt-4 text-base text-muted-foreground">Video referensi {referenceVideo?.title} · {referenceVideo?.author}. Bukan dokumentasi proyek ini.</p></section>

        {details.tour && <div id="tur-360" className="scroll-mt-60"><VirtualTour key={details.tour.id} tour={details.tour} /></div>}

        <section id="pertanyaan" className="scroll-mt-60 rounded-2xl border border-border-subtle bg-glass-card p-6 shadow-glass backdrop-blur-xl sm:p-8"><h2 className="font-serif text-3xl">Ada yang ingin ditanyakan?</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">Ceritakan ukuran lahan, kebutuhan ruang, dan gaya yang Anda sukai. Tim kami membantu membahas kemungkinan rancangan serta layanan yang sesuai.</p><a href={consultation} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground">Tanya tentang konsep ini <ArrowUpRight size={21} aria-hidden="true" /></a></section>
      </div>

      <aside className={`rounded-2xl border border-primary/30 bg-accent p-7 text-foreground shadow-glass lg:sticky lg:top-60 ${darkSectionTheme}`}>
        <p className="mb-4 text-base font-semibold uppercase tracking-widest text-primary">Rencana Anda berikutnya</p><h2 className="font-serif text-3xl leading-tight">Mulai dari percakapan.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Tertarik dengan arah desain ini? Siapkan beberapa hal sebelum berkonsultasi:</p><ul className="my-6 space-y-4 text-lg"><li className="border-b border-border-subtle pb-4">01 — Ukuran & lokasi lahan</li><li className="border-b border-border-subtle pb-4">02 — Kebutuhan ruangan</li><li>03 — Referensi & anggaran</li></ul><a href={consultation} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-lg font-semibold text-primary-foreground">Konsultasi WhatsApp <ArrowUpRight size={20} aria-hidden="true" /></a><Link href="/#layanan" className="mt-3 flex min-h-12 items-center justify-center text-base font-medium underline underline-offset-4 hover:text-primary">Pelajari layanan kami</Link>
      </aside>
    </div>

    <div className="mx-auto grid max-w-7xl gap-5 border-t border-border-subtle px-6 py-12 sm:grid-cols-2 sm:px-10">{[{ item: previous, label: "Karya sebelumnya", Icon: ArrowLeft }, { item: next, label: "Karya berikutnya", Icon: ArrowRight }].map(({ item, label, Icon }) => <Link key={label} href={`/portofolio/${item.slug}`} className="group flex items-center gap-5 rounded-2xl border border-border-subtle p-4 hover:border-primary"><div className="relative size-24 shrink-0 overflow-hidden rounded-xl"><Image src={item.image} alt={item.title} fill sizes="96px" className="object-cover" /></div><div className="min-w-0 flex-1"><p className="mb-2 text-base text-muted-foreground">{label}</p><p className="font-serif text-xl sm:text-2xl">{item.title}</p></div><Icon size={23} className="shrink-0 text-primary" aria-hidden="true" /></Link>)}</div>
  </article>;
}
