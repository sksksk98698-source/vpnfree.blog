// scripts/audit-meta-tags.cjs
const fs = require('fs');

const html = fs.readFileSync('dist/index.html', 'utf8');

const ogTags = [
  'og:title', 'og:description', 'og:url', 'og:image', 'og:type',
  'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'
];

ogTags.forEach(tag => {
  const match = html.match(new RegExp(`<meta[^>]*property=["']${tag}["'][^>]*content=["'](.*?)["']`, 'i')) ||
                html.match(new RegExp(`<meta[^>]*name=["']${tag}["'][^>]*content=["'](.*?)["']`, 'i'));
  console.log(`${tag}:`, match ? match[1] : 'MISSING');
});
