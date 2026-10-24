import type { RecommendationPrompt } from '@/types/portfolio';

export const recommendationPrompts: RecommendationPrompt[] = [
  {
    id: 'about-me',
    prompt: {
      en: 'Tell me about yourself',
      fa: 'درباره خودت برایم بگو',
    },
    shortLabel: {
      en: 'Tell me about yourself',
      fa: 'معرفی حرفه‌ای من',
    },
    hint: {
      en: 'Background, full-stack focus & engineering approach',
      fa: 'پیشینه، تمرکز فنی و دیدگاه مهندسی',
    },
    iconName: 'user',
    intentHint: 'about',
  },
  {
    id: 'explore-projects',
    prompt: {
      en: 'Explore my projects',
      fa: 'پروژه‌های منتخب من را نشان بده',
    },
    shortLabel: {
      en: 'Explore my projects',
      fa: 'بررسی پروژه‌های منتخب',
    },
    hint: {
      en: 'Curated ERP, dashboards, extension & mobile apps',
      fa: 'ERP، داشبوردهای سازمانی، افزونه و اپ موبایل',
    },
    iconName: 'folder-git',
    intentHint: 'projects',
  },
  {
    id: 'professional-experience',
    prompt: {
      en: 'Show me my professional experience',
      fa: 'سوابق کاری و حرفه‌ای من را نمایش بده',
    },
    shortLabel: {
      en: 'Show me my professional experience',
      fa: 'سوابق شغلی و تجربیات',
    },
    hint: {
      en: 'Paystar FinTech role, timeline & key outcomes',
      fa: 'تجربه فین‌تک در پی‌استار و مسیر حرفه‌ای',
    },
    iconName: 'briefcase',
    intentHint: 'experience',
  },
  {
    id: 'strongest-skills',
    prompt: {
      en: 'What are my strongest technical skills?',
      fa: 'قوی‌ترین مهارت‌های فنی من کدام‌اند؟',
    },
    shortLabel: {
      en: 'What are my strongest technical skills?',
      fa: 'قوی‌ترین مهارت‌های فنی',
    },
    hint: {
      en: 'React, Next.js, Vue 3, TypeScript, Node.js & testing',
      fa: 'React، Next.js، Vue 3، TypeScript، Node.js و تست',
    },
    iconName: 'cpu',
    intentHint: 'skills',
  },
  {
    id: 'rahkar-erp',
    prompt: {
      en: 'Tell me about Rahkar ERP',
      fa: 'درباره پروژه Rahkar ERP توضیح بده',
    },
    shortLabel: {
      en: 'Tell me about Rahkar ERP',
      fa: 'آشنایی با Rahkar ERP',
    },
    hint: {
      en: '16-module Persian ERP, 78 APIs & accounting engine',
      fa: 'ERP فارسی با ۱۶ ماژول، ۷۸ مسیر API و هسته مالی',
    },
    iconName: 'layers',
    intentHint: 'rahkar',
  },
  {
    id: 'real-products',
    prompt: {
      en: 'How have I contributed to real products?',
      fa: 'چگونه در ساخت محصولات واقعی مشارکت داشته‌ام؟',
    },
    shortLabel: {
      en: 'How have I contributed to real products?',
      fa: 'مشارکت در محصولات واقعی',
    },
    hint: {
      en: 'FinTech payment flows, shipped tools & open source',
      fa: 'جریان‌های پرداخت، ابزارهای منتشرشده و متن‌باز',
    },
    iconName: 'rocket',
    intentHint: 'contributions',
  },
  {
    id: 'why-hire',
    prompt: {
      en: 'Why should your team hire me?',
      fa: 'چرا تیم شما باید من را استخدام کند؟',
    },
    shortLabel: {
      en: 'Why should your team hire me?',
      fa: 'چرا همکاری با من؟',
    },
    hint: {
      en: 'Evidence-backed value for Frontend & Full-Stack teams',
      fa: 'ارزش فنی مستند برای تیم‌های Frontend و Full-Stack',
    },
    iconName: 'check-circle',
    intentHint: 'why-hire',
  },
  {
    id: 'github-projects',
    prompt: {
      en: 'Show me my GitHub projects',
      fa: 'پروژه‌های گیت‌هاب من را نشان بده',
    },
    shortLabel: {
      en: 'Show me my GitHub projects',
      fa: 'مخازن گیت‌هاب من',
    },
    hint: {
      en: '45 public repositories, live demos & source code',
      fa: '۴۵ مخزن عمومی، دموهای زنده و سورس‌کدها',
    },
    iconName: 'github',
    intentHint: 'github-projects',
  },
  {
    id: 'portfolio-different',
    prompt: {
      en: 'What makes my portfolio different?',
      fa: 'چه چیزی پورتفولیوی من را متمایز می‌کند؟',
    },
    shortLabel: {
      en: 'What makes my portfolio different?',
      fa: 'تمایز این پورتفولیو',
    },
    hint: {
      en: 'Conversational UX, verified data & full-stack craft',
      fa: 'تجربه گفت‌وگومحور، داده‌های مستند و دقت مهندسی',
    },
    iconName: 'sparkles',
    intentHint: 'portfolio-different',
  },
  {
    id: 'contact-me',
    prompt: {
      en: 'How can you contact me?',
      fa: 'چطور می‌توانید با من در ارتباط باشید؟',
    },
    shortLabel: {
      en: 'How can you contact me?',
      fa: 'راه‌های ارتباط با من',
    },
    hint: {
      en: 'Direct email, LinkedIn, GitHub & professional links',
      fa: 'ایمیل مستقیم، لینکدین، گیت‌هاب و شبکه‌های حرفه‌ای',
    },
    iconName: 'mail',
    intentHint: 'contact',
  },
];

export function getRecommendationById(id: string): RecommendationPrompt | undefined {
  return recommendationPrompts.find((item) => item.id === id);
}
