'use client';

import { useEffect, useState } from 'react';
import { hariIniWIB } from '@/lib/waktu';

// Tanggal WIB hari ini untuk komponen klien. Render server/hidrasi memakai
// tanggal dari server (`awal`), lalu peramban menggantinya dengan tanggal
// sesungguhnya — jadwal relatif tetap benar walau situs lama tidak dibangun ulang.
export default function useHariIni(awal) {
  const [hari, setHari] = useState(awal);
  useEffect(() => {
    const h = hariIniWIB();
    if (h !== awal) setHari(h);
  }, [awal]);
  return hari;
}
