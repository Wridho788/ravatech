import { Blocks, Globe2, Workflow } from 'lucide-react'

export const services = [
  {
    number: '01',
    title: 'Sistem internal',
    short: 'Pekerjaan harian jadi lebih tertata.',
    description: 'Dashboard, panel admin, dan alur kerja yang mengikuti cara timmu bekerja.',
    examples: ['Dashboard operasional', 'Alur persetujuan dan pelaporan', 'Pengelolaan data dan pengguna'],
    icon: Workflow,
  },
  {
    number: '02',
    title: 'Platform publik',
    short: 'Tempat yang berguna untuk terhubung.',
    description: 'Produk web untuk pelanggan dan komunitas, dari marketplace sampai platform layanan.',
    examples: ['Marketplace', 'Platform komunitas', 'Aplikasi web untuk pelanggan'],
    icon: Globe2,
  },
  {
    number: '03',
    title: 'Produk khusus',
    short: 'Dibangun mengikuti kebutuhanmu.',
    description: 'Rilis pertama yang fokus atau produk yang terus berkembang, berangkat dari masalah nyata dan mudah dirawat.',
    examples: ['Eksplorasi produk dan MVP', 'Aplikasi web khusus', 'Iterasi dan dukungan'],
    icon: Blocks,
  },
]
