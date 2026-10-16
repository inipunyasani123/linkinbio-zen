/* Sena — guru mindfulness & teman minum teh (persona fiktif). Satu sumber isi
   untuk halaman tautan, kelas, dan latihan napas. Jadwal dan harga adalah
   contoh purwarupa desain. */

import { hariBerikut, rentang, rentangPendek, tambahHari } from './waktu';

export const SITE = 'https://linkinbio-zen.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const LINKS = [
  { no: 'I', label: 'Kelas meditasi daring', meta: 'Selasa malam & Kamis pagi', href: '/kelas' },
  { no: 'II', label: 'Retret akhir pekan', meta: 'Lembang', tanggal: true, href: '/kelas#retret' },
  { no: 'III', label: 'Napas tiga menit', meta: 'Mulai sekarang, di sini', href: '/napas' },
  { no: 'IV', label: 'Undang Sena', meta: 'Sesi untuk tim & komunitas', href: '/kelas#undang' },
];

export const KELAS = [
  { id: 'selasa', hari: 'Selasa', jam: '19.30–20.30 WIB', nama: 'Pulang ke napas', ket: 'Meditasi duduk 30 menit, lalu berbagi pelan-pelan.', harga: 50000 },
  { id: 'kamis', hari: 'Kamis', jam: '06.00–06.45 WIB', nama: 'Pagi yang tidak terburu', ket: 'Peregangan ringan dan napas sebelum membuka ponsel.', harga: 40000 },
];
export const PAKET = { nama: 'Paket 8 pertemuan', harga: 320000, ket: 'berlaku dua bulan, bebas pilih Selasa atau Kamis' };

// Retret diadakan pada akhir pekan pertama yang jatuh paling cepat tiga pekan
// dari hari ini (WIB), supaya tanggal di demo tidak pernah sudah lewat.
export function tanggalRetret(hari) {
  const sabtu = hariBerikut(hari, 6, 21);
  const minggu = tambahHari(sabtu, 1);
  return { panjang: `Sabtu–Minggu, ${rentang(sabtu, minggu)}`, pendek: rentangPendek(sabtu, minggu) };
}

export const RETRET = {
  tempat: 'Rumah kebun di Lembang (fiktif)',
  harga: 1450000,
  kuota: 12,
  sisa: 5,
  acara: [['Sabtu 09.00', 'Datang, teh, dan perkenalan tanpa nama jabatan'], ['Sabtu 13.00', 'Jalan kaki hening di kebun'], ['Sabtu 19.30', 'Meditasi malam & menulis jurnal'], ['Minggu 05.30', 'Napas pagi menghadap bukit'], ['Minggu 11.00', 'Makan siang & pulang']],
};

// Pola napas: [nama, durasi tiap fase dalam detik].
export const POLA = {
  tenang: { nama: 'Tenang (4–6)', fase: [['Tarik', 4], ['Embuskan', 6]] },
  kotak: { nama: 'Kotak (4–4–4–4)', fase: [['Tarik', 4], ['Tahan', 4], ['Embuskan', 4], ['Tahan', 4]] },
  tidur: { nama: 'Menjelang tidur (4–7–8)', fase: [['Tarik', 4], ['Tahan', 7], ['Embuskan', 8]] },
};
