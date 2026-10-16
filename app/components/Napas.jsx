'use client';

import { useEffect, useRef, useState } from 'react';
import { POLA } from '@/lib/zen';

const MENIT = [1, 3, 5];

export default function Napas() {
  const [pola, setPola] = useState('tenang');
  const [menit, setMenit] = useState(3);
  const [jalan, setJalan] = useState(false);
  const [detik, setDetik] = useState(0); // detik berlalu
  const ref = useRef(null);

  const fase = POLA[pola].fase;
  const siklus = fase.reduce((s, [, d]) => s + d, 0);
  const total = menit * 60;
  const selesai = detik >= total;

  useEffect(() => {
    if (!jalan || selesai) return undefined;
    ref.current = setInterval(() => setDetik((d) => d + 1), 1000);
    return () => clearInterval(ref.current);
  }, [jalan, selesai]);

  // Fase aktif dan sisa detik di fase itu.
  let t = detik % siklus;
  let i = 0;
  while (t >= fase[i][1]) { t -= fase[i][1]; i += 1; }
  const [namaFase, lama] = fase[i];
  const sisaFase = lama - t;
  const besar = namaFase === 'Tarik' ? 1 : namaFase === 'Embuskan' ? 0.55 : i > 0 && fase[i - 1][0] === 'Tarik' ? 1 : 0.55;
  const ulang = () => { setJalan(false); setDetik(0); };
  const sisa = Math.max(0, total - detik);

  return (
    <section aria-label="Latihan napas" className="mt-10">
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Pilih pola napas">
        {Object.entries(POLA).map(([k, p]) => (
          <button key={k} type="button" aria-pressed={pola === k} onClick={() => { setPola(k); ulang(); }} className={`min-h-11 rounded-full border px-4 py-1.5 text-sm ${pola === k ? 'border-sumi bg-sumi text-washi' : 'border-sumi/25 hover:border-sumi'}`}>{p.nama}</button>
        ))}
      </div>
      <div className="mt-2 flex justify-center gap-1" role="group" aria-label="Pilih durasi">
        {MENIT.map((m) => (
          <button key={m} type="button" aria-pressed={menit === m} onClick={() => { setMenit(m); ulang(); }} className={`min-h-11 rounded-full px-3 text-xs uppercase tracking-[0.2em] ${menit === m ? 'text-matcha-ink underline underline-offset-4' : 'text-sumi/70 hover:text-sumi'}`}>{m} menit</button>
        ))}
      </div>

      <div className="relative mx-auto mt-10 grid h-72 w-72 place-items-center" aria-hidden="true">
        <span className="absolute inset-0 rounded-full border border-sumi/15" />
        {/* Lingkaran mengembang/mengempis; bila gerak dikurangi, hanya kepekatannya yang berubah (lihat globals.css). */}
        <span
          className="napas-lingkar absolute inset-6 rounded-full bg-matcha/20"
          style={{ transform: `scale(${jalan && !selesai ? besar : 0.75})`, opacity: jalan && !selesai ? (besar === 1 ? 1 : 0.45) : 0.8, transition: `transform ${jalan ? lama : 0.6}s ease-in-out, opacity ${jalan ? lama : 0.6}s ease-in-out` }}
        />
        <span className="relative font-serif text-6xl italic text-matcha-ink">{jalan && !selesai ? sisaFase : '禅'}</span>
      </div>

      <p role="status" aria-live="polite" className="mt-6 font-serif text-3xl">
        {selesai ? 'Selesai. Rasakan napasmu sebentar.' : jalan ? namaFase : 'Siap bila kamu siap.'}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-sumi/70">{String(Math.floor(sisa / 60)).padStart(2, '0')}:{String(sisa % 60).padStart(2, '0')} tersisa</p>

      <div className="mt-6 flex justify-center gap-3">
        {!selesai && <button type="button" onClick={() => setJalan((j) => !j)} className="min-h-12 bg-sumi px-8 py-3 font-serif text-xl italic text-washi hover:bg-matcha-ink">{jalan ? 'Jeda' : detik ? 'Lanjut' : 'Mulai'}</button>}
        {(detik > 0 || selesai) && <button type="button" onClick={ulang} className="min-h-12 border border-sumi/30 px-6 py-3 font-serif text-xl italic hover:border-sumi">Ulang</button>}
      </div>
    </section>
  );
}
