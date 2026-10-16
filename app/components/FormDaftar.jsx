'use client';

import { useEffect, useState } from 'react';
import { KELAS, PAKET, RETRET, rp } from '@/lib/zen';

const PILIHAN = [
  ...KELAS.map((k) => ({ id: k.id, nama: `Kelas ${k.hari}`, harga: k.harga })),
  { id: 'paket', nama: PAKET.nama, harga: PAKET.harga },
  { id: 'retret', nama: 'Retret Lembang', harga: RETRET.harga },
  { id: 'tim', nama: 'Sesi untuk tim / komunitas', harga: 0 },
];

export default function FormDaftar() {
  const [pilih, setPilih] = useState('selasa');
  const [selesai, setSelesai] = useState(false);
  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (h === 'retret') setPilih('retret');
    if (h === 'undang') setPilih('tim');
  }, []);
  const p = PILIHAN.find((x) => x.id === pilih);
  const input = 'w-full border-b border-sumi/60 bg-transparent py-2 focus:border-matcha-ink';

  return (
    <section id="undang" aria-labelledby="daftar-h" className="mt-16 scroll-mt-8 bg-white px-6 py-8">
      <h2 id="daftar-h" className="font-serif text-4xl">Daftar</h2>
      {selesai ? (
        <div role="status" className="mt-4">
          <p className="font-serif text-2xl italic">Terima kasih. Sampai bertemu di napas berikutnya.</p>
          <p className="mt-2 text-sm text-sumi/75">Ini purwarupa desain: tidak ada pendaftaran yang benar-benar dibuat.</p>
          <button type="button" onClick={() => setSelesai(false)} className="mt-5 min-h-11 border-b border-sumi/40 text-sm hover:text-matcha-ink">Daftar lagi</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-6 space-y-6">
          <fieldset>
            <legend className="text-xs uppercase tracking-[0.25em] text-sumi/70">Pilih</legend>
            <div className="mt-2">
              {PILIHAN.map((x) => (
                <label key={x.id} className="flex min-h-11 cursor-pointer items-center justify-between gap-3 border-b border-sumi/10 py-1.5">
                  <span className="flex items-center gap-3">
                    <input type="radio" name="pilih" value={x.id} checked={pilih === x.id} onChange={() => setPilih(x.id)} className="h-4 w-4 shrink-0 accent-[#55623b]" />
                    <span className="font-serif text-xl">{x.nama}</span>
                  </span>
                  <span className="shrink-0 text-right text-sm text-sumi/75">{x.harga ? rp(x.harga) : 'setelah ngobrol'}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="d-nama" className="text-xs uppercase tracking-[0.25em] text-sumi/70">Nama</label>
              <input id="d-nama" required autoComplete="name" className={input} />
            </div>
            <div>
              <label htmlFor="d-surel" className="text-xs uppercase tracking-[0.25em] text-sumi/70">Surel</label>
              <input id="d-surel" type="email" required autoComplete="email" className={input} />
            </div>
          </div>
          {pilih === 'tim' && (
            <div>
              <label htmlFor="d-tim" className="text-xs uppercase tracking-[0.25em] text-sumi/70">Ceritakan timnya</label>
              <textarea id="d-tim" rows={3} required className={input} />
            </div>
          )}
          <button type="submit" className="w-full bg-sumi py-3.5 font-serif text-xl italic text-washi hover:bg-matcha-ink">Daftar {p.nama.toLowerCase()}</button>
          <p className="text-[11px] text-sumi/75">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}
