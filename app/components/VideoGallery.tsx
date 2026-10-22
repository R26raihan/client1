"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, Search, X } from "lucide-react";
import { designVideos, type GalleryVideo } from "../lib/videos";

export default function VideoGallery({ videos = designVideos, label = "Video 3D" }: { videos?: readonly GalleryVideo[]; label?: string }) {
  const categories = ["Semua video", ...new Set(videos.map(video => video.category))];
  const [category, setCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<GalleryVideo | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = videos.filter(video => (category === categories[0] || video.category === category) && `${video.title} ${video.author} ${video.category}`.toLocaleLowerCase("id").includes(query.trim().toLocaleLowerCase("id")));

  return <>
    <div className="flex flex-col justify-between gap-5 border-y border-border-subtle py-5 xl:flex-row xl:items-center">
      <div role="group" aria-label="Kategori video" className="flex gap-2 overflow-x-auto pb-1">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="video-gallery-grid" onClick={() => setCategory(item)} className={`min-h-12 shrink-0 rounded-full border px-5 py-3 text-lg font-medium ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border-subtle hover:border-primary hover:bg-primary/5"}`}>{item}</button>)}</div>
      <label className="flex min-h-14 items-center gap-3 rounded-xl border border-border-subtle bg-surface-muted/40 px-4 focus-within:border-primary xl:w-80"><Search size={22} className="shrink-0 text-muted-foreground" aria-hidden="true" /><span className="sr-only">Cari judul atau pembuat video</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Cari video atau pembuat" className="min-w-0 flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground" /></label>
    </div>
    <div className="my-5 flex flex-wrap justify-between gap-3 text-base leading-7 text-muted-foreground"><p>Video referensi dari pembuat asli, bukan dokumentasi proyek Loka.</p><p role="status">{visible.length} video ditampilkan</p></div>
    <div id="video-gallery-grid" className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">{visible.map(video => <article key={video.id} className="group min-w-0">
      <button type="button" aria-label={`Putar ${video.title}`} onClick={() => { setSelected(video); dialog.current?.showModal(); }} className="block w-full cursor-pointer text-left">
        <span className="relative block aspect-video overflow-hidden rounded-2xl bg-accent"><Image src={video.thumbnail} alt={`Thumbnail ${video.title}`} fill sizes="(max-width: 767px) 90vw, (max-width: 1279px) 45vw, 420px" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" /><span className="absolute inset-0 bg-black/20 group-hover:bg-black/35" /><span className="absolute inset-0 flex items-center justify-center"><span className="flex size-16 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white backdrop-blur-xl group-hover:bg-primary group-hover:text-primary-foreground"><Play size={27} fill="currentColor" className="ml-1" aria-hidden="true" /></span></span><span className="absolute bottom-4 left-4 rounded-full bg-black/65 px-4 py-1.5 text-base font-medium text-white">{video.category}</span></span>
        <h2 className="mt-5 font-serif text-2xl leading-snug group-hover:text-primary">{video.title}</h2>
      </button>
      <p className="mt-3 text-base text-muted-foreground">Oleh {video.author}</p>
      <button type="button" onClick={() => { setSelected(video); dialog.current?.showModal(); }} className="mt-3 inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary underline-offset-4 hover:underline">Tonton video <ArrowUpRight size={20} aria-hidden="true" /></button>
    </article>)}</div>
    {visible.length === 0 && <div className="py-20 text-center"><h2 className="font-serif text-3xl">Video belum ditemukan.</h2><p className="mt-4 text-lg text-muted-foreground">Coba judul lain atau tampilkan semua kategori.</p><button type="button" onClick={() => { setCategory(categories[0]); setQuery(""); }} className="mt-6 min-h-12 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground">Tampilkan semua video</button></div>}

    <dialog ref={dialog} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} aria-labelledby="video-player-title" className="fixed inset-0 m-auto max-h-[90svh] w-[min(1100px,94vw)] overflow-y-auto rounded-2xl border border-border-subtle bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm">
      {selected && <><div className="flex items-center justify-between gap-5 border-b border-border-subtle px-5 py-3"><p className="text-lg font-semibold">{label} · {selected.category}</p><button type="button" aria-label="Tutup pemutar video" onClick={() => dialog.current?.close()} className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-border-subtle hover:bg-surface-muted"><X size={24} /></button></div><div className="aspect-video bg-black"><iframe key={selected.id} src={`https://www.youtube-nocookie.com/embed/${selected.id}?rel=0`} title={selected.title} className="h-full w-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div><div className="p-6 sm:p-8"><h2 id="video-player-title" className="font-serif text-2xl sm:text-3xl">{selected.title}</h2><p className="mt-4 text-lg text-muted-foreground">Video referensi oleh {selected.author}.</p><a href={`https://www.youtube.com/watch?v=${selected.id}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary underline-offset-4 hover:underline">Buka di YouTube <ArrowUpRight size={21} aria-hidden="true" /></a></div></>}
    </dialog>
  </>;
}
