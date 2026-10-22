Berikut adalah rangkuman lengkap dari seluruh diskusi arsitektur, teknologi, dan skema bisnis untuk proyek pembuatan Website Portofolio Dynamic (Fitur Update Gambar & Video) harga Rp700.000:
1. Arsitektur & Tech Stack Rekomendasi ($0 / Bebas Biaya Server)
Untuk memastikan website cepat, SEO-friendly, dan 100% gratis biaya langganan backend/hosting, berikut kombinasi terbaik yang digunakan:
Frontend & SEO: Next.js (App Router)
Alasan: Berbasis React, performa tinggi, dan SEO Organik 100% Gratis via Server-Side Rendering (SSR) & Static Site Generation (SSG).
Deployment & Hosting: Vercel
Alasan: Paling optimal untuk Next.js, zero-configuration, cepat via CDN global, free-tier melimpah (100 GB bandwidth & 6.000 build minutes/bulan).
Database & Auth (Admin Panel): Neon.tech (PostgreSQL) atau Firebase / Supabase
Alasan: Untuk menyimpan data teks proyek, judul, deskripsi, dan URL media. Neon.tech / Firebase bebas dari auto-pause walau sepi pengunjung.
Penyimpanan Media (Gambar & Video):
Gambar: Cloudinary (Gratis s.d. 25 GB bandwidth/bulan + kompresi WebP otomatis) atau Supabase/Firebase Storage.
Video: Upload ke YouTube (Set Unlisted) atau Vimeo, lalu embed link-nya ke portofolio agar tidak memenuhi kuota storage.
Monitoring Pengunjung (Analitik Internal): Vercel Analytics atau Umami Cloud
Alasan: Cukup pasang 1 baris kode/komponenten, data total pengunjung, perangkat, dan lokasi bisa dipantau secara pribadi dari dashboard tanpa bayar.
2. Struktur Data Utama (Database Schema Concept)
Sistem dibuat terpisah antara data proyek dan media pendukungnya:
Tabel projects: id, title, slug, description, category (Web/Mobile/AI/dll), thumbnail_url, created_at.
Tabel project_media: id, project_id (relasi), type (IMAGE / VIDEO_EMBED), url, order_index.
3. Rincian Estimasi Keuangan & Kalkulasi Bisnis
Harga Penawaran Total Jasa: Rp700.000
Estimasi Biaya Domain (.com / .id): ± Rp150.000 – Rp200.000 (Ditegaskan untuk ditanggung/dibayar langsung oleh klien).
Biaya Hosting & Infrastructure: Rp0 (Memanfaatkan Free-tier Vercel + Neon + Cloudinary).
Keuntungan Bersih (Margin): ± Rp500.000 – Rp550.000 murni sebagai pendapatan jasa pengerjaan koding/desain Anda!
4. Langkah Taktis Pelaksanaan Proyek
Akad / Kesepakatan: Tegaskan ke klien bahwa harga Rp700k adalah biaya pengerjaan jasa, biaya domain tahunan (.com) ditanggung terpisah oleh klien.
Pengerjaan Cepat:
Gunakan komponen UI siap pakai seperti Shadcn UI / Tailwind CSS agar pengerjaan efisien (1–3 hari selesai).
Buat rute terproteksi (misal /admin) dengan autentikasi sederhana untuk tempat klien melakukan CRUD (upload/edit gambar dan video).
Deploy & Handover:
Hubungkan repositori GitHub ke Vercel.
Daftarkan URL di Google Search Console agar terindeks Google secara gratis.
Serahkan akses dashboard CMS/Admin beserta panduan singkat cara upload gambar & video ke klien.