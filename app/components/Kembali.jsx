import Link from 'next/link';

export default function Kembali() {
  return (
    <Link href="/" className="-my-2 inline-flex min-h-11 items-center gap-2 text-sm text-sumi/75 hover:text-matcha-ink">
      <span aria-hidden="true">←</span> <span className="font-serif text-lg italic">Sena</span> · ruang teduh
    </Link>
  );
}
