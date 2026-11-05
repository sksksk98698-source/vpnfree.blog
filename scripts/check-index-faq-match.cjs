// scripts/check-index-faq-match.cjs
const fs = require('fs');

const html = fs.readFileSync('dist/index.html', 'utf8');
const match = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
if (match) {
  const parsed = JSON.parse(match[1]);
  const faqSchema = parsed.find(x => x['@type'] === 'FAQPage');
  if (faqSchema) {
    console.log('Index FAQ count in Schema:', faqSchema.mainEntity.length);
    faqSchema.mainEntity.forEach((q, i) => {
      const isVisible = html.includes(q.name);
      console.log(`Q${i+1}: "${q.name.slice(0, 25)}..." visible in HTML:`, isVisible);
    });
  }
}
