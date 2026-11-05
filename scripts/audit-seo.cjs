// scripts/audit-seo.cjs
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
console.log('Total HTML files in dist:', files.length);

// 1. CANONICAL AUDIT
let noCanonical = [];
let canonicalIssues = [];
let canonicalList = [];

// 2. EXTERNAL LINKS AUDIT (Commercial / Affiliate nofollow sponsored)
let externalLinksWithoutNofollow = [];
let allExternalLinks = [];

// 3. INTERNAL LINKS AUDIT (Dead links, empty hrefs)
let emptyHrefs = [];
let brokenInternalLinks = [];

// 4. THIN CONTENT & WORD COUNT
let wordCounts = [];

// 5. SCHEMA.ORG AUDIT
let schemaIssues = [];

// 6. TITLE & DESCRIPTION DUPLICATION
let titles = {};
let descriptions = {};

// 7. TRACKING / FINGERPRINT AUDIT
let trackingScripts = [];
let infrastructureLeaks = [];

files.forEach(filePath => {
  const relPath = path.relative('dist', filePath).replace(/\\/g, '/');
  const html = fs.readFileSync(filePath, 'utf8');

  // Skip 404.html for certain strict checks
  const is404 = relPath === '404.html';

  // --- Canonical ---
  const canMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i) ||
                   html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["']/i);
  if (!canMatch) {
    if (!is404) noCanonical.push(relPath);
  } else {
    const canonical = canMatch[1];
    canonicalList.push({ relPath, canonical });
    if (!canonical.startsWith('https://vpnfree.blog')) {
      canonicalIssues.push({ relPath, canonical, issue: 'Not starting with https://vpnfree.blog' });
    }
  }

  // --- Title & Description ---
  const tMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = tMatch ? tMatch[1].trim() : '';
  if (title) {
    if (!titles[title]) titles[title] = [];
    titles[title].push(relPath);
  }

  const dMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
  const desc = dMatch ? dMatch[1].trim() : '';
  if (desc) {
    if (!descriptions[desc]) descriptions[desc] = [];
    descriptions[desc].push(relPath);
  }

  // --- External Links & nofollow ---
  const aTags = html.match(/<a\b[^>]*>/gi) || [];
  aTags.forEach(tag => {
    const hrefMatch = tag.match(/href=["'](.*?)["']/i);
    if (!hrefMatch) {
      emptyHrefs.push({ file: relPath, tag });
      return;
    }
    const href = hrefMatch[1];
    if (href === '' || href === '#') {
      emptyHrefs.push({ file: relPath, tag });
    } else if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.includes('vpnfree.blog') && !href.includes('schema.org') && !href.includes('w3.org')) {
        allExternalLinks.push({ file: relPath, href, tag });
        const relMatch = tag.match(/rel=["'](.*?)["']/i);
        const rel = relMatch ? relMatch[1] : '';
        const hasNofollow = rel.includes('nofollow');
        const hasSponsored = rel.includes('sponsored');
        if (!hasNofollow || !hasSponsored) {
          externalLinksWithoutNofollow.push({ file: relPath, href, tag, rel });
        }
      }
    }
  });

  // --- Word Count (Pure Chinese Chars) ---
  const bodyMatch = html.match(/<body[\s\S]*?<\/body>/i);
  const bodyText = bodyMatch ? bodyMatch[0] : html;
  const cleanText = bodyText
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ');
  const chars = cleanText.match(/[\u4e00-\u9fa5]/g) || [];
  wordCounts.push({ file: relPath, chars: chars.length });

  // --- JSON-LD ---
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  jsonLdMatches.forEach(tag => {
    const jsonStr = tag.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
    try {
      const parsed = JSON.parse(jsonStr);
      // check AggregateRating
      if (parsed['@type'] === 'Product' && parsed.aggregateRating) {
        // check synthetic rating
      }
    } catch (e) {
      schemaIssues.push({ file: relPath, error: e.message, snippet: jsonStr.slice(0, 50) });
    }
  });

  // --- Tracking scripts & IP leaks ---
  if (html.includes('UA-') || html.includes('G-') || html.includes('hm.baidu.com')) {
    trackingScripts.push(relPath);
  }
  if (html.match(/192\.168\.\d+\.\d+/) && !html.includes('192.168.1.1')) {
    infrastructureLeaks.push({ file: relPath, match: 'Private IP leak' });
  }
  if (html.match(/C:\\Users\\/i) || html.match(/\/home\/[a-zA-Z0-9_-]+\//i)) {
    infrastructureLeaks.push({ file: relPath, match: 'Local path leak' });
  }
});

console.log('--- AUDIT RESULTS ---');
console.log('No canonical count:', noCanonical.length, noCanonical);
console.log('Canonical issues count:', canonicalIssues.length, canonicalIssues);
console.log('Empty hrefs count:', emptyHrefs.length);
if (emptyHrefs.length > 0) console.log('Sample empty hrefs:', emptyHrefs.slice(0, 5));

console.log('Total external links found:', allExternalLinks.length);
console.log('External links missing nofollow/sponsored:', externalLinksWithoutNofollow.length);
if (externalLinksWithoutNofollow.length > 0) {
  console.log('Missing rel examples:', externalLinksWithoutNofollow.slice(0, 10));
}

console.log('Schema syntax issues:', schemaIssues.length);
console.log('Tracking scripts found:', trackingScripts.length);
console.log('Infrastructure/Local path leaks:', infrastructureLeaks.length);

// Word count summary
wordCounts.sort((a, b) => a.chars - b.chars);
console.log('Lowest 10 word counts:', wordCounts.slice(0, 10));
console.log('Highest 5 word counts:', wordCounts.slice(-5));

// Duplicate titles
const dupTitles = Object.entries(titles).filter(([k, v]) => v.length > 1);
console.log('Duplicate titles count:', dupTitles.length);
if (dupTitles.length > 0) console.log(dupTitles);

// Duplicate descriptions
const dupDescs = Object.entries(descriptions).filter(([k, v]) => v.length > 1);
console.log('Duplicate descriptions count:', dupDescs.length);
if (dupDescs.length > 0) console.log(dupDescs);
