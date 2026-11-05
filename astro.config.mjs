// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://vpnfree.blog',
  server: {
    host: '0.0.0.0',
    port: 4330,
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const p = url.pathname;
        if (p === '/404' || p === '/404.html' || p.startsWith('/go/') || p.includes('/draft') || p.includes('/admin')) {
          return false;
        }
        return true;
      },
      serialize(item) {
        const u = item.url.replace(/\/$/, '');
        if (u === 'https://vpnfree.blog') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (u.includes('/topics') || u.includes('/faq') || u.includes('/airports') || u.includes('/radar')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
