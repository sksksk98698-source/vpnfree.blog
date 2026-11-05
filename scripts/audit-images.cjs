// scripts/audit-images.cjs
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
let missingAlt = [];
let totalImages = 0;

files.forEach(f => {
  const relPath = path.relative('dist', f).replace(/\\/g, '/');
  const html = fs.readFileSync(f, 'utf8');
  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  totalImages += imgTags.length;

  imgTags.forEach(tag => {
    const altMatch = tag.match(/alt=["'](.*?)["']/i);
    if (!altMatch || altMatch[1].trim() === '') {
      missingAlt.push({ file: relPath, tag });
    }
  });
});

console.log('Total images found across site:', totalImages);
console.log('Images missing alt or empty alt:', missingAlt.length);
if (missingAlt.length > 0) {
  console.log('Sample missing alt:', missingAlt.slice(0, 5));
}
