import { curatedProjects, featuredProjectSlugs, getProjectBySlug } from '@/data/projects';
import {
  educationItems,
  experienceItems,
  profileData,
  skillCategories,
} from '@/data/resume';
import type { AssistantResponsePayload } from '@/types/portfolio';

interface ProjectAlias {
  slug: string;
  keywords: string[];
}

const PROJECT_ALIASES: ProjectAlias[] = [
  { slug: 'rahkar-erp', keywords: ['rahkar', 'rahkarerp', 'راهکار', 'erp platform'] },
  { slug: 'cargocraft-erp', keywords: ['cargocraft', 'cargo craft', 'کارگوکرفت', 'logistics dashboard'] },
  { slug: 'nova-admin', keywords: ['novaadmin', 'nova admin', 'نوا ادمین', '206 page', '۲۰۶ صفحه'] },
  { slug: 'tishra-analyzer', keywords: ['tishra', 'تیشرا', 'firefox addon', 'seo extension', 'افزونه'] },
  { slug: 'kalamesaz', keywords: ['kalamesaz', 'کلمه ساز', 'کلمه‌ساز', 'word game', 'بازی واژه'] },
  { slug: 'datoos-crypto-tracker', keywords: ['datoos', 'داتوس', 'crypto tracker', 'dexie', 'رمزارز'] },
  { slug: 'echmail', keywords: ['echmail', 'gmail clone', 'ایچ میل'] },
  { slug: 'neweet', keywords: ['neweet', 'twitter clone', 'نیویت'] },
  { slug: 'wasapp', keywords: ['wasapp', 'whatsapp clone', 'واساپ'] },
  { slug: 'echgram', keywords: ['echgram', 'instagram clone', 'electron social'] },
  { slug: 'wavezon', keywords: ['wavezon', 'amazon clone', 'ویوزون'] },
  { slug: 'echshopy', keywords: ['echshopy', 'digikala', 'اچ شاپی', 'اِچ‌شاپی'] },
];

function matchSpecificProject(normalized: string): string | null {
  for (const entry of PROJECT_ALIASES) {
    if (entry.keywords.some((kw) => normalized.includes(kw))) {
      return entry.slug;
    }
  }
  return null;
}

function matchSkillFocus(normalized: string): {
  categoryIds: string[];
  projectSlugs: string[];
  topicLabelEn: string;
  topicLabelFa: string;
} | null {
  if (/\b(vue|nuxt|pinia|vuex)\b|ویو/.test(normalized)) {
    return {
      categoryIds: ['frontend', 'testing'],
      projectSlugs: ['echmail', 'echgram', 'wasapp'],
      topicLabelEn: 'Vue.js & Nuxt.js',
      topicLabelFa: 'Vue.js و Nuxt.js',
    };
  }
  if (/\b(react native|android|mobile app)\b|موبایل|اندروید|ری‌اکت نیتیو/.test(normalized)) {
    return {
      categoryIds: ['frontend', 'databases'],
      projectSlugs: ['kalamesaz'],
      topicLabelEn: 'React Native & Mobile',
      topicLabelFa: 'React Native و موبایل',
    };
  }
  if (/\b(next\.?js|react)\b|ری‌اکت|نکست/.test(normalized)) {
    return {
      categoryIds: ['frontend', 'testing'],
      projectSlugs: ['cargocraft-erp', 'tishra-analyzer', 'datoos-crypto-tracker'],
      topicLabelEn: 'React & Next.js',
      topicLabelFa: 'React و Next.js',
    };
  }
  if (/\b(node\.?js|backend|postgres|postgresql|database|sql|api|graphql|nestjs|express)\b|بک‌اند|بک اند|سرور|دیتابیس|پستگرس/.test(normalized)) {
    return {
      categoryIds: ['backend', 'databases'],
      projectSlugs: ['rahkar-erp'],
      topicLabelEn: 'Backend & Databases',
      topicLabelFa: 'بک‌اند و پایگاه داده',
    };
  }
  if (/\b(test|testing|vitest|jest|cypress|qa|unit test)\b|تست/.test(normalized)) {
    return {
      categoryIds: ['testing'],
      projectSlugs: ['rahkar-erp', 'echmail', 'kalamesaz'],
      topicLabelEn: 'Testing & QA',
      topicLabelFa: 'تست خودکار نرم‌افزار',
    };
  }
  return null;
}

export function generateLocalAssistantResponse(rawInput: string): AssistantResponsePayload {
  const normalized = rawInput.trim().toLowerCase();

  // 1. Specific project query (including "Tell me about Rahkar ERP")
  const matchedProjectSlug = matchSpecificProject(normalized);
  if (matchedProjectSlug) {
    const project = getProjectBySlug(matchedProjectSlug);
    if (project) {
      return {
        intent: matchedProjectSlug === 'rahkar-erp' ? 'rahkar' : 'project-detail',
        content: {
          en: `${project.name.en} — ${project.tagline.en}.`,
          fa: `${project.name.fa} — ${project.tagline.fa}.`,
        },
        bulletPoints: {
          en: project.architecture.en.slice(0, 3),
          fa: project.architecture.fa.slice(0, 3),
        },
        blocks: [{ type: 'project-detail', slug: project.slug }],
        followUpIds:
          project.slug === 'rahkar-erp'
            ? ['explore-projects', 'strongest-skills', 'professional-experience']
            : ['rahkar-erp', 'explore-projects', 'contact-me'],
        actionLinks: [
          {
            label: { en: `Project Details`, fa: `جزئیات پروژه` },
            href: `/projects/${project.slug}`,
          },
          ...(project.demoUrl
            ? [
                {
                  label: project.demoLabel || { en: 'Live Demo', fa: 'دموی زنده' },
                  href: project.demoUrl,
                  external: true,
                },
              ]
            : []),
          {
            label: { en: 'GitHub', fa: 'گیت‌هاب' },
            href: project.repoUrl,
            external: true,
          },
        ],
        sourceMode: 'knowledge-base',
      };
    }
  }

  // 2. Portfolio differentiation ("Why build a chat-style portfolio?")
  if (
    normalized.includes('portfolio different') ||
    normalized.includes('chat-style portfolio') ||
    normalized.includes('why build') ||
    normalized.includes('makes your portfolio') ||
    normalized.includes('makes my portfolio')
  ) {
    return {
      intent: 'portfolio-different',
      content: {
        en: 'Instead of making visitors dig through long pages, you can jump straight to the exact project, stack, or work history you care about.',
        fa: 'Instead of making visitors dig through long pages, you can jump straight to the exact project, stack, or work history you care about.',
      },
      bulletPoints: {
        en: [
          'Backed by real numbers: 4,000+ FinTech users, 15,000+ app installs, and 45 public repos.',
          'Navigate via chat, Ctrl+K quick jump, or one-click A4 PDF resume.',
        ],
        fa: [
          'Backed by real numbers: 4,000+ FinTech users, 15,000+ app installs, and 45 public repos.',
          'Navigate via chat, Ctrl+K quick jump, or one-click A4 PDF resume.',
        ],
      },
      blocks: [
        {
          type: 'projects',
          slugs: ['rahkar-erp', 'tishra-analyzer'],
        },
      ],
      followUpIds: ['rahkar-erp', 'why-hire', 'contact-me'],
      actionLinks: [
        { label: { en: 'Resume', fa: 'رزومه' }, href: '/resume' },
        { label: { en: 'All Projects', fa: 'همه پروژه‌ها' }, href: '/projects' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 3. GitHub projects specifically ("Show me my GitHub projects")
  if (
    normalized.includes('github') ||
    normalized.includes('repositories') ||
    normalized.includes('repos') ||
    normalized.includes('گیت‌هاب') ||
    normalized.includes('گیت هاب') ||
    normalized.includes('مخازن') ||
    normalized.includes('ریپو')
  ) {
    return {
      intent: 'github-projects',
      content: {
        en: '45 public repositories on @hoseinsedaqat covering ERP systems, Next.js & Vue dashboards, a Firefox extension, and React Native.',
        fa: '۴۵ مخزن عمومی در @hoseinsedaqat شامل سامانه ERP، داشبوردهای Next.js و Vue، افزونه فایرفاکس و اپ React Native.',
      },
      blocks: [
        { type: 'github-overview' },
        {
          type: 'projects',
          slugs: ['rahkar-erp', 'cargocraft-erp', 'nova-admin', 'tishra-analyzer'],
          showViewAll: true,
        },
      ],
      followUpIds: ['rahkar-erp', 'explore-projects', 'strongest-skills'],
      actionLinks: [
        {
          label: { en: 'GitHub (@hoseinsedaqat)', fa: 'گیت‌هاب من' },
          href: profileData.githubUrl,
          external: true,
        },
        {
          label: { en: 'All Projects', fa: 'همه پروژه‌ها' },
          href: '/projects',
        },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 4. Real product contributions ("What have you shipped to production?")
  if (
    normalized.includes('real product') ||
    normalized.includes('contributed') ||
    normalized.includes('shipped') ||
    normalized.includes('production') ||
    normalized.includes('mangro')
  ) {
    return {
      intent: 'contributions',
      content: {
        en: 'Key production shipments across FinTech, accounting, and developer tools:',
        fa: 'مهم‌ترین دستاوردهای عملیاتی من در محصولات واقعی:',
      },
      bulletPoints: {
        en: [
          'Paystar FinTech: Shipped features for 4,000+ active users, built 60%+ of online invoicing, and increased wallet engagement by 40%.',
          'Mangro Accounting App: Built in a team of 3 and published on Cafe Bazaar with 15,000+ installs.',
          'Rahkar ERP: Launched a 16-module ERP that auto-generates accounting entries from invoices and stock movements.',
          'Tishra Analyzer: Published privacy-first SEO & security extension on Mozilla Firefox Add-ons.',
        ],
        fa: [
          'پی‌استار (فین‌تک): توسعه قابلیت‌ها برای +۴٬۰۰۰ کاربر فعال، ساخت +۶۰٪ فاکتور آنلاین و رشد ۴۰٪ تعامل کیف پول.',
          'اپلیکیشن حسابداری مانگرو: توسعه در تیم ۳ نفره و انتشار در کافه‌بازار با +۱۵٬۰۰۰ نصب.',
          'سامانه Rahkar ERP: راه‌اندازی ۱۶ ماژول یکپارچه با ثبت خودکار سند حسابداری از روی فاکتور و انبار.',
          'افزونه Tishra Analyzer: انتشار رسمی در فروشگاه Firefox Add-ons.',
        ],
      },
      blocks: [
        { type: 'experience', ids: ['freelance-fullstack', 'paystar'] },
      ],
      followUpIds: ['rahkar-erp', 'professional-experience', 'why-hire'],
      actionLinks: [
        { label: { en: 'Full Experience', fa: 'سوابق کامل' }, href: '/experience' },
        { label: { en: 'Featured Projects', fa: 'پروژه‌های شاخص' }, href: '/projects' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 5. Why hire me ("What can you bring to a team?")
  if (
    normalized.includes('hire') ||
    normalized.includes('bring to a team') ||
    normalized.includes('bring to our team') ||
    normalized.includes('why should') ||
    normalized.includes('fit for') ||
    normalized.includes('strength')
  ) {
    return {
      intent: 'why-hire',
      content: {
        en: '5 years shipping FinTech & SaaS products with measurable user impact across React/Next.js, Vue/Nuxt, TypeScript, and Node.js:',
        fa: '۵ سال تجربه ساخت محصولات فین‌تک و SaaS با نتایج قابل اندازه‌گیری در React/Next.js، Vue/Nuxt، TypeScript و Node.js:',
      },
      blocks: [{ type: 'highlights', items: profileData.valuePropositions }],
      followUpIds: ['rahkar-erp', 'strongest-skills', 'contact-me'],
      actionLinks: [
        { label: { en: 'Download Resume', fa: 'دانلود رزومه' }, href: '/resume?print=1' },
        { label: { en: 'Contact Me', fa: 'ارتباط با من' }, href: '/contact' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 6. Targeted technology / skill questions
  const specificSkillMatch = matchSkillFocus(normalized);
  if (
    specificSkillMatch &&
    !normalized.includes('main tech stack') &&
    !normalized.includes('strongest technical skills')
  ) {
    return {
      intent: 'skills',
      content: {
        en: `${specificSkillMatch.topicLabelEn} skills & verified repositories:`,
        fa: `مهارت‌ها و پروژه‌های مرتبط با ${specificSkillMatch.topicLabelFa}:`,
      },
      blocks: [
        { type: 'skills', categoryIds: specificSkillMatch.categoryIds },
        { type: 'projects', slugs: specificSkillMatch.projectSlugs },
      ],
      followUpIds: ['strongest-skills', 'explore-projects', 'contact-me'],
      actionLinks: [
        { label: { en: 'All Skills', fa: 'همه مهارت‌ها' }, href: '/skills' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  if (
    normalized.includes('skill') ||
    normalized.includes('stack') ||
    normalized.includes('technolog') ||
    normalized.includes('typescript') ||
    normalized.includes('مهارت') ||
    normalized.includes('تکنولوژی') ||
    normalized.includes('فنی')
  ) {
    return {
      intent: 'skills',
      content: {
        en: 'Core stack across Frontend, Backend, Databases, Testing, AI Automation, and DevOps:',
        fa: 'تکنولوژی‌ها و ابزارهای اصلی من در فرانت‌اند، بک‌اند، دیتابیس، تست، هوش مصنوعی و DevOps:',
      },
      blocks: [
        {
          type: 'skills',
          categoryIds: skillCategories.map((c) => c.id),
        },
      ],
      followUpIds: ['rahkar-erp', 'explore-projects', 'professional-experience'],
      actionLinks: [
        { label: { en: 'Full Skills Page', fa: 'صفحه مهارت‌ها' }, href: '/skills' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 7. Experience / Work history / Paystar / NPA
  if (
    normalized.includes('experience') ||
    normalized.includes('work history') ||
    normalized.includes('worked') ||
    normalized.includes('where have you') ||
    normalized.includes('career') ||
    normalized.includes('paystar') ||
    normalized.includes('npa') ||
    normalized.includes('national publishing') ||
    normalized.includes('oman') ||
    normalized.includes('company') ||
    normalized.includes('companies') ||
    normalized.includes('job')
  ) {
    return {
      intent: 'experience',
      content: {
        en: '5 years of software engineering experience across FinTech (Paystar), SaaS/ERP products, and international remote teams:',
        fa: '۵ سال تجربه حرفه‌ای در توسعه محصولات فین‌تک (پی‌استار)، سامانه‌های حسابداری/ERP و تیم‌های ریموت:',
      },
      blocks: [{ type: 'experience', ids: experienceItems.map((e) => e.id) }],
      followUpIds: ['real-products', 'rahkar-erp', 'why-hire'],
      actionLinks: [
        { label: { en: 'Experience Page', fa: 'صفحه سوابق کاری' }, href: '/experience' },
        {
          label: { en: 'LinkedIn', fa: 'لینکدین' },
          href: profileData.linkedinUrl,
          external: true,
        },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 8. Projects overview
  if (
    normalized.includes('project') ||
    normalized.includes('portfolio work') ||
    normalized.includes('built') ||
    normalized.includes('demo') ||
    normalized.includes('پروژه') ||
    normalized.includes('نمونه‌کار') ||
    normalized.includes('نمونه کار')
  ) {
    return {
      intent: 'projects',
      content: {
        en: 'Featured full-stack, dashboard, browser extension, and mobile projects:',
        fa: 'پروژه‌های شاخص Full-Stack، داشبورد مدیریتی، افزونه مرورگر و موبایل:',
      },
      blocks: [
        {
          type: 'projects',
          slugs: featuredProjectSlugs,
          showViewAll: true,
        },
      ],
      followUpIds: ['rahkar-erp', 'github-projects', 'strongest-skills'],
      actionLinks: [
        {
          label: {
            en: `All ${curatedProjects.length} Projects`,
            fa: `مشاهده همه ${curatedProjects.length} پروژه`,
          },
          href: '/projects',
        },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 9. Education, Certifications, Articles
  if (
    normalized.includes('education') ||
    normalized.includes('university') ||
    normalized.includes('degree') ||
    normalized.includes('bachelor') ||
    normalized.includes('certificat') ||
    normalized.includes('article') ||
    normalized.includes('blog') ||
    normalized.includes('تحصیل') ||
    normalized.includes('دانشگاه') ||
    normalized.includes('مدرک') ||
    normalized.includes('گواهینامه') ||
    normalized.includes('مقاله')
  ) {
    const edu = educationItems[0];
    return {
      intent: 'education',
      content: {
        en: `${edu.degree.en} — ${edu.institution.en} (${edu.period?.en}), plus 6 verified Sololearn certifications:`,
        fa: `${edu.degree.fa} — ${edu.institution.fa} (${edu.period?.fa})، به همراه ۶ گواهینامه تخصصی Sololearn:`,
      },
      blocks: [{ type: 'education' }],
      followUpIds: ['professional-experience', 'strongest-skills', 'contact-me'],
      actionLinks: [
        { label: { en: 'Education', fa: 'تحصیلات' }, href: '/education' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 10. Resume / CV / PDF Download
  if (
    normalized.includes('resume') ||
    normalized.includes('cv') ||
    normalized.includes('download') ||
    normalized.includes('pdf') ||
    normalized.includes('print') ||
    normalized.includes('رزومه') ||
    normalized.includes('دانلود') ||
    normalized.includes('چاپ')
  ) {
    return {
      intent: 'resume',
      content: {
        en: 'View or download my Resume as PDF:',
        fa: 'مشاهده یا دانلود رزومه به صورت PDF:',
      },
      blocks: [{ type: 'resume-cta' }],
      followUpIds: ['professional-experience', 'why-hire', 'contact-me'],
      actionLinks: [
        { label: { en: 'Save as PDF', fa: 'ذخیره PDF' }, href: '/resume?print=1' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 11. Contact ("How can you contact me?")
  if (
    normalized.includes('contact') ||
    normalized.includes('email') ||
    normalized.includes('reach') ||
    normalized.includes('linkedin') ||
    normalized.includes('touch') ||
    normalized.includes('تماس') ||
    normalized.includes('ایمیل') ||
    normalized.includes('ارتباط') ||
    normalized.includes('لینکدین')
  ) {
    return {
      intent: 'contact',
      content: {
        en: `Reach me directly at ${profileData.email} or on LinkedIn:`,
        fa: `ارتباط مستقیم از طریق ایمیل ${profileData.email} یا لینکدین:`,
      },
      blocks: [{ type: 'contact' }],
      followUpIds: ['why-hire', 'about-me', 'explore-projects'],
      actionLinks: [
        { label: { en: 'Contact Page', fa: 'صفحه تماس' }, href: '/contact' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 12. About / Background / Greeting
  if (
    normalized.includes('background') ||
    normalized.includes('about yourself') ||
    normalized.includes('who are you') ||
    normalized.includes('who is hosein') ||
    normalized.includes('introduce') ||
    normalized.includes('about hosein') ||
    normalized.includes('tell me about you') ||
    /^(hi|hello|hey|greetings)[!.?\s]*$/.test(normalized)
  ) {
    return {
      intent: 'about',
      content: {
        en: profileData.summaryParagraphs.en[0],
        fa: profileData.summaryParagraphs.fa[0],
      },
      bulletPoints: profileData.focusAreas,
      blocks: [
        {
          type: 'projects',
          slugs: ['rahkar-erp', 'cargocraft-erp'],
        },
      ],
      followUpIds: ['professional-experience', 'explore-projects', 'strongest-skills', 'contact-me'],
      actionLinks: [
        { label: { en: 'About Page', fa: 'صفحه معرفی' }, href: '/about' },
        { label: { en: 'Resume', fa: 'رزومه' }, href: '/resume' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 13. Honest Unknown / Out-of-Scope Fallback
  return {
    intent: 'unknown',
    content: {
      en: `That detail isn’t listed in my portfolio. For availability, rates, or specific team questions, reach out directly at ${profileData.email} or on LinkedIn.`,
      fa: `این مورد در اطلاعات پورتفولیو ثبت نشده است. برای هماهنگی همکاری یا سؤالات اختصاصی، مستقیماً از طریق ایمیل ${profileData.email} یا لینکدین پیام بدهید.`,
    },
    blocks: [{ type: 'contact' }],
    followUpIds: ['about-me', 'explore-projects', 'professional-experience', 'strongest-skills'],
    actionLinks: [
      {
        label: { en: 'LinkedIn', fa: 'لینکدین' },
        href: profileData.linkedinUrl,
        external: true,
      },
    ],
    sourceMode: 'knowledge-base',
  };
}
