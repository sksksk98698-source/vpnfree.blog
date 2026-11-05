// scripts/check-html-comments.cjs
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
let leakedComments = [];

files.forEach(f => {
  const relPath = path.relative('dist', f).replace(/\\/g, '/');
  const html = fs.readFileSync(f, 'utf8');
  const comments = html.match(/<!--([\s\S]*?)-->/g) || [];
  comments.forEach(c => {
    if (c.includes('TODO') || c.includes('FIXME') || c.includes('localhost') || c.includes('Pro User') || c.includes('c:\\')) {
      leakedComments.push({ file: relPath, comment: c });
    }
  });
});

console.log('Suspicious HTML comments count:', leakedComments.length);
if (leakedComments.length > 0) {
  console.log(leakedComments.slice(0, 5));
}
