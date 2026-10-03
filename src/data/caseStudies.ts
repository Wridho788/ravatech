export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  status: 'Live' | 'In Use' | 'Demo';
  visual: 'marketplace' | 'dashboard' | 'coffee' | 'connectivity' | 'photo';
  image?: string;
  imageAlt?: string;
  context: string;
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
  impact: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'payung-negeri',
    title: 'Payung Negeri',
    subtitle: 'Wajah digital untuk institusi pendidikan kesehatan',
    status: 'Live',
    visual: 'photo',
    image: '/projects/payung-negeri.jpg',
    imageAlt: 'Institut Kesehatan Payung Negeri campus building',
    context: 'Institut Kesehatan Payung Negeri menampilkan program studi, profil institusi, berita, dan informasi pendaftaran secara daring.',
    problem: 'Calon mahasiswa dan masyarakat membutuhkan jalur yang jelas untuk menemukan program studi, informasi kampus, dan pendaftaran.',
    solution: 'Website publik yang menata informasi program, fakultas, berita, profil institusi, dan pintu masuk pendaftaran.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    role: 'Frontend website dan arsitektur informasi untuk konten publik institusi.',
    impact: 'Website sudah tayang dan menjadi tempat utama untuk mengenal institusi serta program studinya.',
    link: 'https://payung-negeri.vercel.app',
  },
  {
    id: 'mercedes-benz-w202-club-indonesia',
    title: 'Mercedes-Benz W202 Club Indonesia',
    subtitle: 'Rumah digital untuk komunitas otomotif nasional',
    status: 'Live',
    visual: 'photo',
    image: '/projects/mbw202.jpg',
    imageAlt: 'Mercedes-Benz W202 cars gathered at a club event',
    context: 'Komunitas nasional bagi pemilik dan penggemar Mercedes-Benz W202.',
    problem: 'Anggota, calon anggota, dan mitra membutuhkan satu tempat untuk menemukan informasi klub, acara, kegiatan daerah, dan cara bergabung.',
    solution: 'Website klub yang memuat sejarah, organisasi, acara, berita, galeri, keanggotaan, dan kemitraan merchant.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    role: 'Frontend website untuk konten klub, acara, keanggotaan, dan penemuan mitra.',
    impact: 'Website klub sudah tayang dan dapat diakses publik.',
    link: 'https://merchedes-benz-w202-club-indonesia.vercel.app/',
  },
  {
    id: 'wawa-kopi',
    title: 'Wawa Kopi',
    subtitle: 'Website hangat untuk kedai kopi yang buka 24 jam',
    status: 'Live',
    visual: 'photo',
    image: '/projects/wawa-kopi.png',
    imageAlt: 'Halaman utama website Wawa Kopi',
    context: 'Website kedai kopi yang dibangun di sekitar kebiasaan bertemu, mengobrol, dan singgah kapan saja.',
    problem: 'Pengunjung perlu segera memahami suasana tempat, melihat menu, serta menemukan jam buka dan lokasi.',
    solution: 'Landing page yang menampilkan suasana kedai, pilihan menu, ulasan, lokasi, dan jam operasional.',
    techStack: ['Next.js', 'React', 'TypeScript'],
    role: 'Pengalaman website, implementasi frontend, dan deployment.',
    impact: 'Website sudah tayang dan membantu pengunjung mengenal kedai sebelum datang.',
    link: 'https://wawa-kopi.vercel.app',
  },
  {
    id: 'lapakbenz',
    title: 'LapakBenz',
    subtitle: 'Platform komunitas, acara, dan marketplace',
    status: 'Live',
    visual: 'marketplace',
    context: 'Platform publik yang menyatukan chapter komunitas, acara, berita, kemitraan, dan konten marketplace.',
    problem: 'Aktivitas komunitas dan perdagangan membutuhkan ruang digital yang rapi agar orang mudah menemukan kegiatan dan cara berpartisipasi.',
    solution: 'Pengalaman web dengan penemuan acara, produk, mitra, chapter komunitas, dan berita terkini.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    role: 'Pengalaman frontend dan deployment untuk platform publik.',
    impact: 'Platform publik sudah tayang dengan bagian komunitas, acara, dan marketplace.',
    link: 'https://lapakbenzz.vercel.app'
  },
  {
    id: 'lapakbenz-merchant',
    title: 'LapakBenz Merchant',
    subtitle: 'Ruang kerja merchant untuk katalog dan pesanan',
    status: 'Live',
    visual: 'photo',
    image: '/projects/lapakbenz-merchant.png',
    imageAlt: 'Halaman login portal LapakBenz Merchant',
    context: 'Aplikasi khusus merchant yang melengkapi platform publik LapakBenz.',
    problem: 'Penjual membutuhkan ruang kerja tersendiri untuk mengelola daftar produk dan pesanan.',
    solution: 'Portal merchant dengan login, dashboard, pengelolaan produk, tampilan pesanan, dan profil.',
    techStack: ['React', 'TypeScript', 'Vite', 'React Query', 'Zustand'],
    role: 'Frontend portal merchant dan alur pengelolaan produk.',
    impact: 'Portal merchant sudah di-deploy dan dapat diakses melalui halaman login.',
    link: 'https://lapakbenz-merchant.vercel.app',
  },
  {
    id: 'ravasim',
    title: 'RavaSIM',
    subtitle: 'Konsep marketplace dan pengelolaan eSIM',
    status: 'Demo',
    visual: 'connectivity',
    context: 'Eksplorasi produk Ravatech tentang pengalaman membeli eSIM dan mengelola akun dalam satu tempat.',
    problem: 'Pembelian dan pengelolaan konektivitas digital punya beberapa tahap yang perlu terasa menyatu.',
    solution: 'Demo frontend untuk memilih paket data, simulasi checkout, pengelolaan perangkat, aktivasi eSIM, pemantauan pemakaian, dan transaksi.',
    techStack: ['Next.js', 'React', 'Mantine UI', 'Zustand', 'React Query'],
    role: 'Konsep produk dan implementasi frontend.',
    impact: 'Demo interaktif sudah tayang. Checkout, pembayaran, dan aktivasi masih berupa simulasi, bukan layanan telekomunikasi aktif.',
    link: 'https://ravasim.vercel.app',
  },
  {
    id: 'lpj-ulu-tarukim',
    title: 'LPJ Ulu Tarukim Siantar',
    subtitle: 'Sistem pengelolaan organisasi dan administrasi',
    status: 'In Use',
    visual: 'dashboard',
    context: 'Sistem internal untuk kebutuhan administrasi dan koordinasi komunitas LPJ Ulu Tarukim Siantar.',
    problem: 'Proses berbasis kertas dan informasi yang tersebar membuat administrasi rutin sulit dilacak dan dikoordinasikan.',
    solution: 'Sistem admin untuk pendaftaran anggota, dokumen, kegiatan, dan pelaporan agar pekerjaan harian berada dalam satu tempat.',
    techStack: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Material UI'],
    role: 'Penggalian kebutuhan, desain sistem, implementasi, pelatihan pengguna, dan pemeliharaan.',
    impact: 'Sistem digunakan untuk administrasi harian dan pengelolaan komunitas.',
  }
];
