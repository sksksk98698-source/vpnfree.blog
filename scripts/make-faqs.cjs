// scripts/make-faqs.cjs
const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'src', 'data', 'faq-database.ts');

// We will read from a JSON or define plain data
const { items, categories } = require('./faq-raw-data.cjs');

const header = `/**
 * 翻墙机场与科学上网万字级百科知识库与常见问题解答 (FAQ)
 * 80 条专著级权威技术解答 · 涵盖 8 大专业核心维度
 * 专为 vpnfree.blog/faq 打造
 */

export interface FaqItem {
  id: string;
  num: string;
  category: string;
  categoryName: string;
  categoryTag: string;
  question: string;
  answer: string;
  keyTakeaway: string;
  relatedLinks?: { label: string; href: string }[];
}

export const FAQ_CATEGORIES = ${JSON.stringify(categories, null, 2)};

export const FAQ_DATABASE: FaqItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync(targetPath, header, 'utf8');
console.log('Successfully written', items.length, 'FAQs to src/data/faq-database.ts');
