"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const questions = [
  { question: "Berapa lama proses desain rumah?", answer: "Durasi menyesuaikan luas bangunan, kompleksitas desain, dan waktu diskusi revisi. Setelah konsultasi awal, kami menyampaikan jadwal setiap tahap agar Anda memiliki gambaran waktu yang jelas." },
  { question: "Apakah tersedia garansi revisi desain?", answer: "Ya, revisi desain tersedia sesuai jumlah dan lingkup yang tercantum dalam penawaran. Kebutuhan utama dibahas di awal agar setiap putaran revisi semakin mendekatkan desain pada harapan Anda." },
  { question: "Apakah bisa melakukan survey ke luar kota?", answer: "Survey luar kota dapat dijadwalkan sesuai lokasi proyek dan ketersediaan tim. Biaya transportasi serta akomodasi, bila diperlukan, akan diinformasikan untuk disepakati sebelum kunjungan." },
  { question: "Bagaimana sistem pembayaran atau cicilannya?", answer: "Pembayaran dilakukan bertahap mengikuti kesepakatan dan progres pekerjaan. Rincian uang muka, tahapan pembayaran, serta hasil pekerjaan di setiap tahap dijelaskan dalam penawaran dan kontrak." },
  { question: "Apakah dapat membantu pengurusan IMB/PBG?", answer: "Kami dapat mendiskusikan kebutuhan gambar dan dokumen teknis untuk pengajuan PBG serta lingkup pendampingannya. Persyaratan, biaya, dan proses persetujuan mengikuti ketentuan pemerintah daerah lokasi proyek." },
  { question: "Berapa estimasi biaya jasa desain per m²?", answer: "Biaya per m² bergantung pada luas bangunan, tingkat detail, dan paket layanan yang dipilih. Kirimkan lokasi, perkiraan luas, serta kebutuhan ruang melalui WhatsApp untuk mendapatkan estimasi penawaran yang sesuai." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Pertanyaan Umum" title="Mari mulai dengan pemahaman yang sama" description="Jawaban awal untuk membantu Anda mempersiapkan perjalanan merancang dan membangun rumah." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = isOpen ? Minus : Plus;
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
                <h3><button id={`faq-question-${index}`} type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 p-6 text-left font-medium focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary">{item.question}<Icon size={20} className="shrink-0 text-primary" aria-hidden="true" /></button></h3>
                <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={!isOpen} className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
