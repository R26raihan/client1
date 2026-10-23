export const projects = [
  { title: "The Tropical Residence", category: "Tropis", city: "Bekasi", image: "/images/residence.webp", area: "726", description: "Hunian dengan bukaan lebar yang menghubungkan ruang keluarga, taman, dan kolam. Material alami memberi kehangatan pada komposisi modern yang bersih." },
  { title: "Villa Teras Teduh", category: "Villa", city: "Bali", image: "/images/villa.webp", area: "280", description: "Konsep villa dengan ruang komunal yang lapang dan nuansa alami. Dirancang sebagai tempat beristirahat yang tetap dekat dengan alam." },
  { title: "Ruang untuk Pulang", category: "Interior", city: "Bandung", image: "/images/interior.webp", area: "120", description: "Eksplorasi interior dengan warna netral, tekstur kayu, dan pencahayaan lembut. Setiap sudut mengutamakan kenyamanan kegiatan sehari-hari." },
  { title: "Casa Cahaya", category: "Modern", city: "Tangerang", image: "/images/modern.webp", area: "240", description: "Garis geometris dan permainan bidang menghadirkan hunian modern yang terbuka. Penataan ruang mengutamakan privasi sekaligus koneksi antarruang." },
  { title: "Courtyard House", category: "Tropis", city: "Yogyakarta", image: "/images/courtyard.webp", area: "210", description: "Studi rumah dengan ruang terbuka sebagai pusat aktivitas. Taman menjadi penghubung visual untuk menghadirkan suasana teduh dalam keseharian." },
  { title: "The Quiet Living", category: "Interior", city: "Surabaya", image: "/images/living-room.webp", area: "160", description: "Ruang keluarga yang tenang dengan komposisi furnitur sederhana dan material bertekstur. Konsep yang menyeimbangkan estetika dan kebutuhan penghuni." },
  {"title": "Classic White Residence", "category": "Klasik", "city": "Semarang", "image": "/images/classic.webp", "area": "360", "description": "Inspirasi hunian klasik dengan komposisi simetris, kolom pada teras, dan warna fasad yang lembut. Detail arsitektur memberi karakter yang bertahan lintas waktu."},
  {"title": "The Urban Loft", "category": "Industrial", "city": "Jakarta", "image": "/images/industrial-loft.webp", "area": "180", "description": "Eksplorasi ruang loft terbuka dengan struktur yang terekspos dan mezzanine. Perpaduan material menonjolkan karakter industrial yang hangat."},
  {"title": "Loft Kayu & Baja", "category": "Industrial", "city": "Bandung", "image": "/images/industrial-space.webp", "area": "200", "description": "Konsep interior dengan rangka baja hitam, tekstur kayu, dan jendela tinggi. Ruang komunal mengalir dalam satu area yang lapang."},
  {"title": "Casa Terakota", "category": "Mediteran", "city": "Bali", "image": "/images/mediterranean-house.webp", "area": "290", "description": "Inspirasi rumah dengan lengkung teras, atap terakota, dan taman hijau. Suasana Mediteran dipadukan dengan kedekatan pada alam tropis."},
  {"title": "Villa Palma", "category": "Mediteran", "city": "Lombok", "image": "/images/mediterranean-villa.webp", "area": "340", "description": "Warna putih, bukaan melengkung, dan area kolam menjadi pusat inspirasi villa ini. Ruang luar dirancang sebagai perpanjangan kegiatan di dalam rumah."},
  {"title": "American Garden House", "category": "American", "city": "Bogor", "image": "/images/american-house.webp", "area": "260", "description": "Inspirasi rumah American dengan atap pelana, fasad berlapis, dan halaman depan yang hijau. Komposisi sederhana menghadirkan suasana rumah yang akrab."},
  {"title": "The Welcoming Porch", "category": "American", "city": "Tangerang", "image": "/images/american-porch.webp", "area": "230", "description": "Teras depan yang teduh, cerobong batu, dan warna netral membentuk karakter hunian American. Ruang transisi memberi tempat untuk menikmati suasana luar."},
].map(project => ({ ...project, slug: project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") }));

export const roomGallery = [
  { image: "/images/living-room.webp", label: "Inspirasi ruang keluarga" },
  { image: "/images/interior.webp", label: "Detail interior & penataan ruang" },
  { image: "/images/industrial-loft.webp", label: "Inspirasi ruang terbuka" },
  { image: "/images/industrial-space.webp", label: "Material & pencahayaan ruang" },
];



export const referenceProjectDetails = {
  slug: "the-tropical-residence",
  title: "Rumah Bapak HDL di Bekasi",
  source: "https://www.emporioarchitect.com/proyek-konstruksi/hasil-konstruksi-desain-rumah-modern-3-lantai-35021225",
  specifications: [
    ["Style", "Style Modern Tropis"],
    ["Ukuran Tanah Keseluruhan", "Lebar 14 m × Panjang 25 m"],
    ["Luas Bangunan", "726 m²"],
    ["Jumlah Kamar Tidur", "4"],
    ["Jumlah Kamar Mandi", "5+1"],
    ["Jumlah Powder Room / Toilet Tamu", "1"],
    ["Jumlah Maid Room", "1"],
    ["Jumlah Mobil yang bisa ditampung", "2 (Carport)"],
    ["Jumlah Lantai", "3"],
  ],
  floors: [
    { name: "Lantai 1", description: "Area bersama, aktivitas & tamu", rooms: ["Foyer", "Ruang Tamu", "Ruang Keluarga", "Ruang Makan", "Pantry", "Ruang Rak Sepatu", "Mushola", "Ruang Tunggu Driver", "Ruang Gym", "Ruang Kucing", "Gudang", "Dapur Kotor", "Kolam Renang dan Area Deck", "Kamar Tidur Tamu (1)", "Kamar Mandi Tamu (1)", "Kamar Mandi Driver (1)", "Ruang Bilas (1)"] },
    { name: "Lantai 2", description: "Area privat & istirahat", rooms: ["Ruang Keluarga", "Gudang", "Kamar Tidur Utama (1)", "Kamar Mandi Utama (1)", "Kamar Tidur Anak (2)", "Kamar Mandi Anak (2)", "Kamar Tidur ART (1)", "Kamar Mandi ART (1)"] },
    { name: "Lantai 3", description: "Rooftop & area servis", rooms: ["Rooftop", "Foyer", "Laundry", "Gudang"] },
  ],
  story: [
    "Hunian ini merupakan rumah tinggal milik Bapak HDL yang berlokasi di Bekasi. Sebuah rumah yang sejak pandangan pertama sudah memperlihatkan karakter yang tegas, modern, dan matang. Desain fasad mengusung pendekatan modern tropis dengan komposisi yang rapi dan proporsional. Permainan bidang, bukaan kaca besar, serta pemilihan materialnya menciptakan kesan rumah yang elegan, namun tetap hangat dan menciptakan kesan tropis yang sangat kuat.",
    "Area entrance dirancang sebagai transisi yang tenang sebelum memasuki rumah. Seolah memberi pertanda bahwa ini adalah tempat relaksasi yang memanjakan, setelah beraktivitas seharian. Elemen batu alam, aksen kayu, dan pencahayaan lembut memperkuat kesan welcoming sekaligus berkelas. Pada area outdoor, kehadiran inner court dan kolam renang menjadi pusat keseimbangan hunian ini.",
    "Vertical garden tidak hanya berfungsi sebagai elemen visual, tetapi juga membantu menghadirkan suasana sejuk dan privat di tengah lingkungan perkotaan. Seluruh elemen eksterior dirancang untuk saling terhubung, menciptakan sirkulasi udara yang baik serta pengalaman ruang yang lapang dan nyaman. Ini saatnya untuk kamu memiliki hunian yang bisa membuatmu merasa tenang meski berada di tengah hiruk pikuk perkotaan.",
  ],
  team: [
    { role: "Designer", members: [{ name: "Satya G.P., S.T.", image: "/images/team-reference-1.webp" }, { name: "Rifqy Adz Dzahaby, S.Ars.", image: "/images/team-reference-2.webp" }, { name: "Ar. I Gede Bagus Dharma Laksana, S.T., IAI", image: "/images/team-reference-3.webp" }, { name: "Fernando Arnold Siso, S.Ars.", image: "/images/team-reference-4.webp" }] },
    { role: "Ahli Struktur", members: [{ name: "I Gede Agus Parwata, S.T.", image: "/images/team-reference-5.webp" }, { name: "Gede Buana Budiarta, S.T.", image: "/images/team-reference-6.webp" }] },
    { role: "Ahli MEP", members: [{ name: "Pande Made Agus Yudi Adnyana, S.T.", image: "/images/team-reference-7.webp" }] },
    { role: "Ahli Gambar", members: [{ name: "Agus Yasa Rahayu, S.T.", image: "/images/team-reference-8.webp" }, { name: "Gede Wangun Arta Dana Yasa", image: "/images/team-reference-9.webp" }] },
  ],
};
