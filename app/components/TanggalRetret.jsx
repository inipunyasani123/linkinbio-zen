'use client';

import { tanggalRetret } from '@/lib/zen';
import useHariIni from './useHariIni';

// Tanggal retret berikutnya (akhir pekan ±3 pekan lagi), dihitung dari hari ini (WIB).
// data-tanggal: penanda teks bertanggal (disembunyikan saat membuat og.jpg statis).
export default function TanggalRetret({ hari: awal, gaya = 'panjang', awalan = '' }) {
  const hari = useHariIni(awal);
  return <span data-tanggal="">{awalan}{tanggalRetret(hari)[gaya]}</span>;
}
