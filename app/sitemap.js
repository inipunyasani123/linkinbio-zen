const SITE = "https://linkinbio-zen.pintuweb.id";

export default function sitemap() {
  const now = new Date();
  return ["", "/kelas", "/napas"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
