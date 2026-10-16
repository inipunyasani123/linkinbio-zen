import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/lib/zen';
import { hariIniWIB } from '@/lib/waktu';
import TanggalRetret from './components/TanggalRetret';

export default function Home() {
  const hari = hariIniWIB();
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm text-center">
        <div className="rise relative mx-auto h-24 w-24" aria-hidden="true">
          <span className="breathe absolute inset-0 rounded-full border border-sumi/40" />
          <span className="absolute inset-3 grid place-items-center rounded-full bg-matcha/10 font-serif text-3xl italic text-matcha-ink">禅</span>
        </div>

        <header className="rise mt-8" style={{ animationDelay: '0.08s' }}>
          <p className="text-[10px] uppercase tracking-[0.45em] text-sumi/70">Ruang teduh</p>
          <h1 className="mt-3 font-serif text-5xl">Sena</h1>
          <p className="mt-3 text-sm leading-relaxed text-sumi/75">
            Guru mindfulness &amp; teman minum teh.<br />Mengajak pulang ke napas sendiri.
          </p>
        </header>

        <span className="rise mx-auto mt-8 block h-10 w-px bg-sumi/20" style={{ animationDelay: '0.16s' }} aria-hidden="true" />

        <nav className="mt-8" aria-label="Tautan">
          {LINKS.map((l, i) => (
            <Link
              key={l.no}
              href={l.href}
              className="rise hairline group flex items-baseline gap-4 border-b py-5 text-left transition-colors first:border-t hover:bg-white"
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <span className="w-7 font-serif text-sm italic text-matcha-ink">{l.no}</span>
              <span className="flex-1">
                <span className="block font-serif text-2xl leading-tight transition group-hover:text-matcha-ink">{l.label}</span>
                <span className="mt-0.5 block text-xs text-sumi/70">{l.meta}{l.tanggal && <TanggalRetret hari={hari} gaya="pendek" awalan=" — " />}</span>
              </span>
              <ArrowUpRight size={15} className="translate-y-0.5 text-sumi/50 transition group-hover:text-matcha-ink" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <p className="rise mt-10 font-serif text-lg italic text-sumi/75" style={{ animationDelay: '0.5s' }}>
          “Pelan itu bukan lambat — pelan itu hadir.”
        </p>
        <p className="rise mt-6 text-[11px] tracking-wide text-sumi/75" style={{ animationDelay: '0.55s' }}>Bandung · persona fiktif untuk purwarupa desain</p>
      </div>
    </main>
  );
}
