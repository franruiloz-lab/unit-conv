const siteUrl = 'https://franruiloz-lab.github.io';

function url(path: string, priority: string, changefreq: string) {
  return `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Static pages
const staticPages = [
  url('/unit-conv/', '1.0', 'weekly'),
  url('/unit-conv/length-converter/', '0.9', 'monthly'),
  url('/unit-conv/weight-converter/', '0.9', 'monthly'),
  url('/unit-conv/temperature-converter/', '0.9', 'monthly'),
  url('/unit-conv/area-converter/', '0.8', 'monthly'),
  url('/unit-conv/volume-converter/', '0.8', 'monthly'),
  url('/unit-conv/speed-converter/', '0.8', 'monthly'),
  url('/unit-conv/data-storage-converter/', '0.7', 'monthly'),
  url('/unit-conv/time-converter/', '0.7', 'monthly'),
  url('/unit-conv/privacy/', '0.3', 'yearly'),
  url('/unit-conv/terms/', '0.3', 'yearly'),
  url('/unit-conv/cookie-policy/', '0.3', 'yearly'),
];

// Length programmatic pages
const lengthConversions = [
  ['meters', 'feet'], ['feet', 'meters'], ['cm', 'inches'], ['inches', 'cm'],
  ['miles', 'km'], ['km', 'miles'], ['feet', 'inches'], ['inches', 'feet'],
  ['meters', 'yards'], ['yards', 'meters'], ['cm', 'feet'], ['meters', 'cm'],
];
const lengthVals = [...Array.from({length: 100}, (_, i) => i + 1), 110, 120, 125, 130, 140, 150, 160, 170, 175, 180, 185, 190, 200, 250, 300, 400, 500];
const lengthPages = lengthConversions.flatMap(([from, to]) =>
  lengthVals.map(v => url(`/unit-conv/length/${v}-${from}-to-${to}/`, '0.6', 'yearly'))
);

// Weight programmatic pages
const weightConversions = [
  ['kg', 'lbs'], ['lbs', 'kg'], ['grams', 'ounces'], ['ounces', 'grams'],
  ['kg', 'grams'], ['lbs', 'ounces'], ['stones', 'lbs'], ['lbs', 'stones'],
];
const weightVals = [...Array.from({length: 200}, (_, i) => i + 1), 250, 300, 400, 500];
const weightPages = weightConversions.flatMap(([from, to]) =>
  weightVals.map(v => url(`/unit-conv/weight/${v}-${from}-to-${to}/`, '0.6', 'yearly'))
);

// Temperature programmatic pages
const tempPages: string[] = [];
for (let c = 0; c <= 250; c++) tempPages.push(url(`/unit-conv/temperature/${c}-celsius-to-fahrenheit/`, '0.6', 'yearly'));
for (let f = 0; f <= 450; f++) tempPages.push(url(`/unit-conv/temperature/${f}-fahrenheit-to-celsius/`, '0.6', 'yearly'));
for (let c = 0; c <= 300; c++) tempPages.push(url(`/unit-conv/temperature/${c}-celsius-to-kelvin/`, '0.5', 'yearly'));

const allUrls = [...staticPages, ...lengthPages, ...weightPages, ...tempPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.join('\n')}
</urlset>`;

export async function GET() {
  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
}

