This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Adaptasi referensi arsitektur

Referensi: https://www.emporioarchitect.com/ (ditinjau 22 Oktober 2026).
Inspeksi konten publik mengidentifikasi navigasi portofolio berdasarkan gaya,
layanan desain, video 3D dan VR, testimoni, profil tim, penghargaan, artikel,
proses kerja, FAQ, serta kontak WhatsApp. Akses HTML langsung terkena
Cloudflare dan koneksi tab browser tidak tersedia; kesamaan visual persis
belum diverifikasi melalui screenshot referensi.

Implementasi saat ini menggunakan identitas Loka Architect: hero foto lebar,
strip kontak, galeri responsif, filter gaya, pencarian judul/kota, dialog detail
proyek, dan tautan konsultasi dengan konteks proyek. Layanan, proses kerja,
testimoni, formulir WhatsApp, dan FAQ yang sudah ada tetap digunakan.

Video/VR, artikel, profil tim, penghargaan, harga paket, dan CMS upload belum
tersedia. Fitur tersebut membutuhkan konten klien dan/atau backend yang nyata.
Formulir membuka draft WhatsApp, tidak menyimpan data atau mengirim otomatis.

Foto di `public/images/` adalah ilustrasi dari Unsplash, bukan karya klien:
- residence: ID CDN photo-1600596542815-ffad4c1539a9
- villa: ID CDN photo-1600607687920-4e2a09cf159d
- interior: ID CDN photo-1600210492486-724fe5c67fb0
- modern: ID CDN photo-1600047509807-ba8f99d2cdde

Sebelum tayang, ganti foto, contoh testimoni, statistik, nomor WhatsApp,
alamat, dan akun sosial dengan data klien terverifikasi di
`app/lib/site-config.ts` dan komponen terkait. Data galeri contoh berada di
`app/components/Portfolio.tsx`.

Validasi: `npm run lint`, `npx tsc --noEmit`, dan
`npx next build --webpack` berhasil. Build Turbopack di lingkungan ini
terhalang izin proses/port; gunakan Webpack untuk build lokal bila diperlukan.
# client1
