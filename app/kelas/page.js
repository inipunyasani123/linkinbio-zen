import { KELAS, PAKET, RETRET, SITE, rp } from '@/lib/zen';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import Gambar from '../components/Gambar';
import FormDaftar from '../components/FormDaftar';
import TanggalRetret from '../components/TanggalRetret';

export const metadata = {
  title: 'Kelas & Retret',
  description: 'Kelas meditasi daring Sena tiap Selasa malam dan Kamis pagi, paket delapan pertemuan, retret akhir pekan di Lembang, dan sesi untuk tim.',
  alternates: { canonical: `${SITE}/kelas` },
};

export default function Kelas() {
  return (
    <main className="px-6 py-14">
      <div className="mx-auto max-w-xl">
        <Kembali />
        <h1 className="rise mt-10 font-serif text-5xl">Kelas</h1>
        <p className="rise mt-3 leading-relaxed text-sumi/75" style={{ animationDelay: '0.1s' }}>Tidak perlu bisa duduk bersila. Cukup datang, kamera boleh mati.</p>
        <Gambar src="/images/teh.webp" alt="Tangan menuang teh dari teko putih ke cangkir kecil di atas nampan kayu" width={1200} height={800} asli={1200} priority sizes="(min-width: 640px) 576px, calc(100vw - 48px)" className="mt-8 aspect-[3/2] w-full rounded-sm object-cover" />

        <ol className="mt-10">
          {KELAS.map((k, i) => (
            <li key={k.id} className="hairline border-t py-6 last:border-b">
              <p className="text-xs uppercase tracking-[0.3em] text-sumi/70">{['I', 'II'][i]} · {k.hari} · {k.jam}</p>
              <h2 className="mt-2 font-serif text-3xl">{k.nama}</h2>
              <p className="mt-2 leading-relaxed text-sumi/80">{k.ket}</p>
              <p className="mt-2 font-serif text-lg italic text-matcha-ink">{rp(k.harga)} per pertemuan</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 rounded-sm bg-white px-5 py-4 text-sm leading-relaxed">
          <span className="font-serif text-lg italic text-matcha-ink">{PAKET.nama}</span> — {rp(PAKET.harga)}, {PAKET.ket}.
        </p>

        <section id="retret" aria-labelledby="retret-h" className="mt-16 scroll-mt-8">
          <h2 id="retret-h" className="font-serif text-4xl">Retret akhir pekan</h2>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-sumi/70"><TanggalRetret hari={hariIniWIB()} /></p>
          <Gambar src="/images/retret-lembang.webp" alt="Rumah kebun di antara pohon pisang dan rimbun hijau, dengan bukit berkabut di belakangnya" width={1200} height={800} asli={1200} sizes="(min-width: 640px) 576px, calc(100vw - 48px)" className="mt-5 aspect-[3/2] w-full rounded-sm object-cover" />
          <p className="mt-5 leading-relaxed text-sumi/80">{RETRET.tempat}. Dua hari tanpa sinyal kerja, dua belas orang, satu teko teh yang tidak pernah kosong.</p>
          <ol className="mt-6 border-l border-sumi/20 pl-6">
            {RETRET.acara.map(([w, a]) => (
              <li key={w} className="relative pb-5 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[1.72rem] top-2 h-2 w-2 rounded-full bg-matcha" />
                <p className="text-xs uppercase tracking-[0.2em] text-sumi/70">{w}</p>
                <p className="font-serif text-xl">{a}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 font-serif text-lg italic text-matcha-ink">{rp(RETRET.harga)} · menginap & makan · sisa {RETRET.sisa} dari {RETRET.kuota} tempat</p>
        </section>

        <FormDaftar />
        <p className="mt-10 text-center text-[11px] text-sumi/75">Jadwal dan harga adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
