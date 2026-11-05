// scripts/check-internal-links.cjs
const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getAllHtmlFiles('dist');
const existingRoutes = new Set();
files.forEach(f => {
  let route = f.replace(/^dist[\\\/]/, '').replace(/\\/g, '/');
  if (route.endsWith('index.html')) {
    route = route.slice(0, -10); // remove index.html
  }
  if (!route.startsWith('/')) route = '/' + route;
  if (route !== '/' && route.endsWith('/')) route = route.slice(0, -1);
  existingRoutes.add(route);
});
console.log('Known valid routes count:', existingRoutes.size);

let brokenLinks = [];

files.forEach(filePath => {
  const relPath = path.relative('dist', filePath).replace(/\\/g, '/');
  const html = fs.readFileSync(filePath, 'utf8');
  const aTags = html.match(/<a\b[^>]*>/gi) || [];

  aTags.forEach(tag => {
    const hrefMatch = tag.match(/href=["'](.*?)["']/i);
    if (!hrefMatch) return;
    let href = hrefMatch[1];
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://vpnfree.blog')) return;
      href = href.replace('https://vpnfree.blog', '');
    }

    // Strip hash and query
    const cleanHref = href.split('#')[0].split('?')[0];
    if (!cleanHref) return; // anchor on current page

    let normalized = cleanHref;
    if (!normalized.startsWith('/')) normalized = '/' + normalized;
    if (normalized !== '/' && normalized.endsWith('/')) normalized = normalized.slice(0, -1);

    if (!existingRoutes.has(normalized)) {
      brokenLinks.push({ file: relPath, link: href, normalized });
    }
  });
});

console.log('Broken internal links count:', brokenLinks.length);
if (brokenLinks.length > 0) {
  console.log('Broken links sample:', brokenLinks.slice(0, 10));
}
