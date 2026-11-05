// scripts/analyze-airport-similarity.cjs
const fs = require('fs');
const path = require('path');

const airportsDir = path.join('dist', 'airports');
const subdirs = fs.readdirSync(airportsDir).filter(d => fs.statSync(path.join(airportsDir, d)).isDirectory());
console.log('Total airport detail pages:', subdirs.length);

let pageData = [];
subdirs.forEach(s => {
  const html = fs.readFileSync(path.join(airportsDir, s, 'index.html'), 'utf8');
  const tMatch = html.match(/<title>(.*?)<\/title>/i);
  const dMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const bodyMatch = html.match(/<body[\s\S]*?<\/body>/i);
  const cleanText = (bodyMatch ? bodyMatch[0] : html)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ');
  const chars = cleanText.match(/[\u4e00-\u9fa5]/g) || [];

  pageData.push({
    slug: s,
    title: tMatch ? tMatch[1] : '',
    desc: dMatch ? dMatch[1] : '',
    h1: h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '',
    charCount: chars.length
  });
});

console.log('--- AIRPORT DETAIL PAGES METRICS ---');
console.log('Min char count:', Math.min(...pageData.map(p => p.charCount)));
console.log('Max char count:', Math.max(...pageData.map(p => p.charCount)));
console.log('Average char count:', Math.round(pageData.reduce((acc, p) => acc + p.charCount, 0) / pageData.length));

// Check description template structure
console.log('Sample desc 1:', pageData[0].desc);
console.log('Sample desc 2:', pageData[1].desc);
console.log('Sample desc 3:', pageData[2].desc);

// Check if description follows an identical regex pattern:
// e.g. "xxx详细评测：xxx网络架构、xxx传输协议、节点覆盖xxx。实测延迟与带宽速率，ChatGPT与奈飞4K流媒体解锁状态，附专属优惠码及官方注册开通地址。"
const templatePattern = /详细评测：.*网络架构、.*传输协议、节点覆盖.*实测延迟与带宽速率，ChatGPT与奈飞4K流媒体解锁状态，附专属优惠码及官方注册开通地址。/;
const matchingTemplateCount = pageData.filter(p => templatePattern.test(p.desc)).length;
console.log('Pages sharing identical meta description template pattern:', matchingTemplateCount, '/', pageData.length);
