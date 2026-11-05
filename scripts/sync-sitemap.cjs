const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const sitemap0 = path.join(distDir, 'sitemap-0.xml');
const sitemapTarget = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemap0)) {
  fs.copyFileSync(sitemap0, sitemapTarget);
  console.log('✓ Successfully synced sitemap-0.xml to sitemap.xml in dist (total URLs ready for Google/Bing/Baidu/Shenma)');
}
