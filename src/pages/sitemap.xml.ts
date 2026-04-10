const siteUrl = 'https://unitcalc.io';

function url(path: string, priority: string, changefreq: string) {
  return `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Static pages
const staticPages = [
  url('/', '1.0', 'weekly'),
  url('/length-converter/', '0.9', 'monthly'),
  url('/weight-converter/', '0.9', 'monthly'),
  url('/temperature-converter/', '0.9', 'monthly'),
  url('/area-converter/', '0.8', 'monthly'),
  url('/volume-converter/', '0.8', 'monthly'),
  url('/speed-converter/', '0.8', 'monthly'),
  url('/data-storage-converter/', '0.7', 'monthly'),
  url('/time-converter/', '0.7', 'monthly'),
  url('/privacy/', '0.3', 'yearly'),
  url('/terms/', '0.3', 'yearly'),
  url('/cookie-policy/', '0.3', 'yearly'),
];

// Length programmatic pages
const lengthConversions = [
  ['meters', 'feet'], ['feet', 'meters'], ['cm', 'inches'], ['inches', 'cm'],
  ['miles', 'km'], ['km', 'miles'], ['feet', 'inches'], ['inches', 'feet'],
  ['meters', 'yards'], ['yards', 'meters'], ['cm', 'feet'], ['meters', 'cm'],
];
const lengthVals = [...Array.from({length: 100}, (_, i) => i + 1), 110, 120, 125, 130, 140, 150, 160, 170, 175, 180, 185, 190, 200, 250, 300, 400, 500];
const lengthPages = lengthConversions.flatMap(([from, to]) =>
  lengthVals.map(v => url(`/length/${v}-${from}-to-${to}/`, '0.6', 'yearly'))
);

// Weight programmatic pages
const weightConversions = [
  ['kg', 'lbs'], ['lbs', 'kg'], ['grams', 'ounces'], ['ounces', 'grams'],
  ['kg', 'grams'], ['lbs', 'ounces'], ['stones', 'lbs'], ['lbs', 'stones'],
];
const weightVals = [...Array.from({length: 200}, (_, i) => i + 1), 250, 300, 400, 500];
const weightPages = weightConversions.flatMap(([from, to]) =>
  weightVals.map(v => url(`/weight/${v}-${from}-to-${to}/`, '0.6', 'yearly'))
);

// Temperature programmatic pages
const tempPages: string[] = [];
for (let c = 0; c <= 250; c++) tempPages.push(url(`/temperature/${c}-celsius-to-fahrenheit/`, '0.6', 'yearly'));
for (let f = 0; f <= 450; f++) tempPages.push(url(`/temperature/${f}-fahrenheit-to-celsius/`, '0.6', 'yearly'));
for (let c = 0; c <= 300; c++) tempPages.push(url(`/temperature/${c}-celsius-to-kelvin/`, '0.5', 'yearly'));

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
