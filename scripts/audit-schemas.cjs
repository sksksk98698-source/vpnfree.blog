// scripts/audit-schemas.cjs
const fs = require('fs');
const path = require('path');

const targetPages = [
  'dist/index.html',
  'dist/airports/index.html',
  'dist/speedtest/index.html',
  'dist/radar/index.html',
  'dist/free/index.html',
  'dist/faq/index.html',
  'dist/topics/index.html',
  'dist/clients/index.html',
  'dist/about/index.html'
];

targetPages.forEach(p => {
  if (!fs.existsSync(p)) return;
  const html = fs.readFileSync(p, 'utf8');
  const matches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  console.log(`=== Page: ${p} === (${matches.length} schemas)`);
  matches.forEach((m, idx) => {
    const raw = m.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        console.log(`  Schema [${idx}]: Array of ${parsed.length} items (${parsed.map(x => x['@type']).join(', ')})`);
      } else {
        console.log(`  Schema [${idx}]: ${parsed['@type']}`);
      }
    } catch (e) {
      console.log(`  Schema [${idx}] PARSE ERROR:`, e.message);
    }
  });
});
