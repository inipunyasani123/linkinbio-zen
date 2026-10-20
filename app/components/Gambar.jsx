import manifest from '@/image-manifest.json';

// Gambar statis tanpa JavaScript klien: <img> biasa dengan srcset varian WebP buatan
// scripts/static-images.mjs (peta hash di image-manifest.json, sama seperti image-loader.js).
// width/height = ukuran tampil (px CSS); tanpa `sizes` dipakai deskriptor 1x/2x,
// dengan `sizes` dipakai deskriptor lebar sampai `asli` (lebar berkas sumber).
const LEBAR = [64, 128, 256, 384, 640, 828, 1080, 1280, 1920];
const varian = (src, w) => {
  const hash = manifest[src];
  return hash ? `/_img${src.replace(/\.(png|jpe?g|webp)$/i, '')}.${hash}-${w}.webp` : src;
};
const naik = (w) => LEBAR.find((x) => x >= w) ?? LEBAR[LEBAR.length - 1];

export default function Gambar({ src, alt, width, height, sizes, asli = 1920, priority = false, ...rest }) {
  const srcSet = sizes
    ? LEBAR.filter((w) => w <= naik(asli)).map((w) => `${varian(src, w)} ${w}w`).join(', ')
    : `${varian(src, naik(width))} 1x, ${varian(src, naik(width * 2))} 2x`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={varian(src, naik(sizes ? Math.min(asli, 1080) : width * 2))}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      {...rest}
    />
  );
}
