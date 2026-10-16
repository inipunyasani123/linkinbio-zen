import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-sm text-center">
        <p className="font-serif text-6xl italic text-matcha-ink" aria-hidden="true" lang="ja">空</p>
        <h1 className="mt-6 font-serif text-4xl">Halaman ini kosong</h1>
        <p className="mt-3 leading-relaxed text-sumi/75">Kekosongan juga bagian dari perjalanan. Tapi mungkin yang kamu cari ada di tempat lain.</p>
        <Link href="/" className="mt-8 inline-flex min-h-11 items-end border-b border-sumi/40 font-serif text-xl italic hover:text-matcha-ink">← kembali ke ruang teduh</Link>
      </div>
    </main>
  );
}
