import { curatedProjects, featuredProjectSlugs, getProjectBySlug } from '@/data/projects';
import {
  educationItems,
  experienceItems,
  profileData,
  publications,
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
      projectSlugs: ['echmail', 'wasapp', 'echgram', 'echshopy'],
      topicLabelEn: 'Vue.js, Pinia & Vuex',
      topicLabelFa: 'اکوسیستم Vue.js، Pinia و Vuex',
    };
  }
  if (/\b(react native|android|mobile app)\b|موبایل|اندروید|ری‌اکت نیتیو/.test(normalized)) {
    return {
      categoryIds: ['frontend', 'databases'],
      projectSlugs: ['kalamesaz'],
      topicLabelEn: 'React Native & Mobile Engineering',
      topicLabelFa: 'توسعه موبایل با React Native',
    };
  }
  if (/\b(next\.?js|react)\b|ری‌اکت|نکست/.test(normalized)) {
    return {
      categoryIds: ['frontend', 'testing'],
      projectSlugs: ['cargocraft-erp', 'datoos-crypto-tracker', 'tishra-analyzer', 'neweet'],
      topicLabelEn: 'React & Next.js Engineering',
      topicLabelFa: 'توسعه با React و Next.js',
    };
  }
  if (/\b(node\.?js|backend|postgres|postgresql|database|sql|api|jwt|rbac)\b|بک‌اند|بک اند|سرور|دیتابیس|پستگرس/.test(normalized)) {
    return {
      categoryIds: ['backend', 'databases'],
      projectSlugs: ['rahkar-erp'],
      topicLabelEn: 'Backend, Node.js APIs & PostgreSQL',
      topicLabelFa: 'بک‌اند، Node.js API و پایگاه داده PostgreSQL',
    };
  }
  if (/\b(test|testing|vitest|jest|qa|unit test|e2e)\b|تست/.test(normalized)) {
    return {
      categoryIds: ['testing'],
      projectSlugs: ['rahkar-erp', 'echmail', 'nova-admin', 'kalamesaz'],
      topicLabelEn: 'Software Testing & Automated QA',
      topicLabelFa: 'تست نرم‌افزار و کنترل کیفیت خودکار',
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
          en: `${project.name.en} — ${project.tagline.en}. ${project.summary.en}\n\nProblem & Domain Integration: ${project.businessLogic.en}`,
          fa: `${project.name.fa} — ${project.tagline.fa}. ${project.summary.fa}\n\nمنطق کسب‌وکار و یکپارچگی: ${project.businessLogic.fa}`,
        },
        bulletPoints: project.architecture,
        blocks: [{ type: 'project-detail', slug: project.slug }],
        followUpIds:
          project.slug === 'rahkar-erp'
            ? ['explore-projects', 'strongest-skills', 'professional-experience']
            : ['rahkar-erp', 'explore-projects', 'contact-me'],
        actionLinks: [
          {
            label: { en: `Full Case Study: ${project.name.en}`, fa: `صفحه کامل ${project.name.fa}` },
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
            label: { en: 'GitHub Repository', fa: 'مخزن گیت‌هاب' },
            href: project.repoUrl,
            external: true,
          },
        ],
        sourceMode: 'knowledge-base',
      };
    }
  }

  // 2. Portfolio differentiation ("What makes my portfolio different?")
  if (
    normalized.includes('portfolio different') ||
    normalized.includes('makes your portfolio') ||
    normalized.includes('makes my portfolio') ||
    normalized.includes('تمایز') ||
    normalized.includes('متمایز') ||
    normalized.includes('فرقی')
  ) {
    return {
      intent: 'portfolio-different',
      content: {
        en: 'Instead of a static brochure with self-rated skill bars, this portfolio is itself a working software product—engineered with Next.js App Router, strict TypeScript, a centralized Resume Knowledge Base, bilingual LTR/RTL tokens, local conversation persistence, and print-ready resume generation.',
        fa: 'به‌جای یک صفحه تبلیغاتی ایستا با درصدهای فرضی مهارت، این وب‌سایت خودش یک محصول نرم‌افزاری واقعی است؛ ساخته‌شده با Next.js App Router، تایپ‌اسکریپت سخت‌گیرانه، پایگاه دانش مرکزی، پشتیبانی بومی دوجهته (انگلیسی LTR و فارسی RTL)، ذخیره‌سازی محلی مکالمات و خروجی چاپی استاندارد رزومه.',
      },
      bulletPoints: {
        en: [
          'Zero fabricated metrics: every project card distinguishes flagship engineering products from UI/architecture practice studies.',
          'Recruiter-respecting UX: ask targeted questions in chat OR jump straight into structured Experience, Projects, Skills, and PDF views.',
          'Production-grade frontend craft: flash-free dark/light theme tokens, keyboard accessibility, mobile safe-area composer, and resilient GitHub API fallback.',
        ],
        fa: [
          'صداقت کامل محتوایی: تفکیک شفاف محصولات مهندسی شاخص (مانند Rahkar ERP و Tishra Analyzer) از پروژه‌های تمرینی رابط کاربری.',
          'احترام به وقت ریکروتر: امکان پرسش‌وپاسخ تعاملی در چت و دسترسی هم‌زمان به صفحات ساختاریافته سوابق، پروژه‌ها، مهارت‌ها و رزومه قابل چاپ.',
          'کیفیت فنی در سطح محصول: تم تاریک/روشن بدون پرش تصویر، دسترس‌پذیری کیبورد، بهینه‌سازی موبایل و پایداری در برابر خطای API.',
        ],
      },
      blocks: [
        {
          type: 'projects',
          slugs: ['rahkar-erp', 'nova-admin', 'tishra-analyzer'],
        },
      ],
      followUpIds: ['rahkar-erp', 'why-hire', 'contact-me'],
      actionLinks: [
        { label: { en: 'View Printable Resume', fa: 'مشاهده نسخه چاپی رزومه' }, href: '/resume' },
        { label: { en: 'Explore All Projects', fa: 'مشاهده همه پروژه‌ها' }, href: '/projects' },
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
        en: 'My GitHub profile (@hoseinsedaqat) hosts 45 public repositories spanning full-stack TypeScript ERP architecture, Next.js 15 & Vue 3 applications, a published Firefox Manifest V3 extension, and a React Native Android word game. Below are the curated highlights along with direct repository access.',
        fa: 'در پروفایل گیت‌هاب من (@hoseinsedaqat) ۴۵ مخزن عمومی قرار دارد؛ از سامانه‌ی Full-Stack راهکار (ERP) و داشبوردهای Next.js 15 / Vue 3 گرفته تا افزونه‌ی منتشرشده فایرفاکس و بازی موبایل React Native. در ادامه خلاصه‌ی مخازن شاخص را مشاهده می‌کنید.',
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
          label: { en: 'Open GitHub (@hoseinsedaqat)', fa: 'باز کردن گیت‌هاب من' },
          href: profileData.githubUrl,
          external: true,
        },
        {
          label: { en: 'Browse Full Projects Directory', fa: 'فهرست کامل پروژه‌ها و مخازن' },
          href: '/projects',
        },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 4. Real product contributions ("How have I contributed to real products?")
  if (
    normalized.includes('real product') ||
    normalized.includes('contributed') ||
    normalized.includes('production') ||
    normalized.includes('محصولات واقعی') ||
    normalized.includes('مشارکت') ||
    normalized.includes('عملیاتی')
  ) {
    return {
      intent: 'contributions',
      content: {
        en: 'My work spans production FinTech frontend development at Paystar and end-to-end engineering of usable, publicly verifiable software products:',
        fa: 'مشارکت من در محصولات واقعی شامل توسعه فرانت‌اند در حوزه پرداخت الکترونیک در شرکت پی‌استار و همچنین طراحی و انتشار ابزارهای کاربردی و قابل راستی‌آزمایی است:',
      },
      bulletPoints: {
        en: [
          'FinTech & Payment Interfaces at Paystar (2022–Present): Building and maintaining merchant-facing payment gateway flows, online invoicing, and settlement views.',
          'Rahkar ERP: Engineered a 16-module Persian ERP connecting sales, inventory, manufacturing, payroll, and double-entry accounting across 78 API routes and 31 PostgreSQL tables.',
          'Tishra Analyzer: Shipped a privacy-first Manifest V3 SEO & security audit extension publicly listed on Mozilla Firefox Add-ons.',
          'NovaAdmin & Kalamesaz: Built a 206-page RTL/LTR admin architecture with automated QA scripts and a 50-level offline Persian Android word game in React Native.',
        ],
        fa: [
          'رابط‌های مالی و پرداخت در پی‌استار (۲۰۲۲ تاکنون): توسعه و نگهداری جریان‌های کاربری درگاه پرداخت، صدور فاکتور آنلاین و پنل تسویه‌ی پذیرندگان.',
          'سامانه‌ی Rahkar ERP: طراحی و پیاده‌سازی ۱۶ ماژول یکپارچه مالی و عملیاتی با ۷۸ مسیر API، صدور خودکار سند حسابداری و ۳۱ جدول PostgreSQL.',
          'افزونه‌ی Tishra Analyzer: ساخت و انتشار رسمی اکستنشن بررسی سئو و امنیت در فروشگاه Firefox Add-ons با اجرای صددرصد محلی.',
          'سیستم NovaAdmin و بازی کلمه‌ساز: پیاده‌سازی سیستم مدیریت ۲۰۶ صفحه‌ای با تست کیفیت خودکار و بازی اندروید ۵۰ مرحله‌ای با React Native.',
        ],
      },
      blocks: [
        { type: 'experience', ids: ['paystar'] },
        { type: 'projects', slugs: ['rahkar-erp', 'tishra-analyzer'] },
      ],
      followUpIds: ['rahkar-erp', 'professional-experience', 'why-hire'],
      actionLinks: [
        { label: { en: 'View Full Experience', fa: 'مشاهده کامل سوابق کاری' }, href: '/experience' },
        { label: { en: 'Explore Featured Projects', fa: 'مشاهده پروژه‌های شاخص' }, href: '/projects' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 5. Why hire me ("Why should your team hire me?")
  if (
    normalized.includes('hire') ||
    normalized.includes('why should') ||
    normalized.includes('fit for') ||
    normalized.includes('strength') ||
    normalized.includes('استخدام') ||
    normalized.includes('همکاری با من') ||
    normalized.includes('مزیت')
  ) {
    return {
      intent: 'why-hire',
      content: {
        en: 'Hiring me brings a developer who combines multi-year FinTech frontend discipline with full-stack architectural ownership across React/Next.js, Vue 3, TypeScript, and Node.js—backed by inspectable code, tests, and live deployments rather than vague claims.',
        fa: 'همکاری با من ترکیبی از تجربه‌ی واقعی در رابط‌های حساس فین‌تک، تسلط عملی بر هر دو اکوسیستم React/Next.js و Vue 3، و توانایی پیاده‌سازی Full-Stack با TypeScript و Node.js را به تیم شما می‌آورد؛ قابلیت‌هایی که همگی با سورس‌کد، تست و دموی زنده قابل بررسی هستند.',
      },
      blocks: [{ type: 'highlights', items: profileData.valuePropositions }],
      followUpIds: ['rahkar-erp', 'strongest-skills', 'contact-me'],
      actionLinks: [
        { label: { en: 'Download / Print Resume', fa: 'دانلود / چاپ رزومه' }, href: '/resume?print=1' },
        { label: { en: 'Contact Hosein', fa: 'ارتباط مستقیم با من' }, href: '/contact' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 6. Targeted technology / skill questions (e.g., "Do you know Vue?" or "What are my strongest technical skills?")
  const specificSkillMatch = matchSkillFocus(normalized);
  if (
    specificSkillMatch &&
    !normalized.includes('strongest technical skills') &&
    !normalized.includes('قوی‌ترین مهارت')
  ) {
    return {
      intent: 'skills',
      content: {
        en: `Here is how I apply ${specificSkillMatch.topicLabelEn} in real repositories, along with the projects where you can inspect the implementation directly:`,
        fa: `در ادامه جزئیات تجربه‌ی عملی من در حوزه‌ی ${specificSkillMatch.topicLabelFa} و پروژه‌هایی که این مهارت‌ها در آن‌ها پیاده‌سازی شده‌اند را مشاهده می‌کنید:`,
      },
      blocks: [
        { type: 'skills', categoryIds: specificSkillMatch.categoryIds },
        { type: 'projects', slugs: specificSkillMatch.projectSlugs },
      ],
      followUpIds: ['strongest-skills', 'explore-projects', 'contact-me'],
      actionLinks: [
        { label: { en: 'View Complete Skills Matrix', fa: 'مشاهده کامل مهارت‌ها' }, href: '/skills' },
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
        en: `My core stack centers on TypeScript across Frontend (React 19, Next.js App Router, Vue 3, Pinia, Tailwind CSS, SCSS) and Backend (Node.js REST APIs, PostgreSQL, JWT/RBAC), reinforced by automated testing with Vitest and Jest. Instead of arbitrary percentages, every skill group below links directly to real project evidence.`,
        fa: `هسته‌ی اصلی مهارت‌های فنی من بر پایه‌ی TypeScript در بخش فرانت‌اند (React 19، Next.js App Router، Vue 3، Pinia، Tailwind CSS و SCSS) و بک‌اند (Node.js، طراحی REST API، PostgreSQL و امنیت JWT/RBAC) همراه با تست‌نویسی در Vitest و Jest شکل گرفته است. هر گروه مهارتی در ادامه مستقیماً به پروژه‌های واقعی متصل شده است.`,
      },
      blocks: [
        {
          type: 'skills',
          categoryIds: skillCategories.map((c) => c.id),
        },
      ],
      followUpIds: ['rahkar-erp', 'explore-projects', 'professional-experience'],
      actionLinks: [
        { label: { en: 'Open Full Skills Page', fa: 'صفحه کامل مهارت‌های فنی' }, href: '/skills' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 7. Experience / Work history / Paystar
  if (
    normalized.includes('experience') ||
    normalized.includes('work history') ||
    normalized.includes('career') ||
    normalized.includes('paystar') ||
    normalized.includes('company') ||
    normalized.includes('companies') ||
    normalized.includes('job') ||
    normalized.includes('سابقه') ||
    normalized.includes('سوابق') ||
    normalized.includes('تجربه') ||
    normalized.includes('شغلی') ||
    normalized.includes('پی‌استار') ||
    normalized.includes('پی استار')
  ) {
    return {
      intent: 'experience',
      content: {
        en: 'I have been working in web software development since 2020—currently serving as a Front-End Developer at Paystar (FinTech & payment gateway provider, 2022–Present), alongside architecting full-stack open-source systems and earlier agency/freelance frontend roles.',
        fa: 'فعالیت حرفه‌ای من در توسعه وب از سال ۲۰۲۰ آغاز شده است؛ از سال ۲۰۲۲ تاکنون به‌عنوان Front-End Developer در شرکت فین‌تک و پرداخت الکترونیک پی‌استار (Paystar) فعالیت دارم و هم‌زمان سامانه‌های Full-Stack و متن‌باز را طراحی و پیاده‌سازی می‌کنم.',
      },
      blocks: [{ type: 'experience', ids: experienceItems.map((e) => e.id) }],
      followUpIds: ['real-products', 'rahkar-erp', 'why-hire'],
      actionLinks: [
        { label: { en: 'View Full Experience Timeline', fa: 'مشاهده تایم‌لاین کامل سوابق' }, href: '/experience' },
        {
          label: { en: 'Verify on LinkedIn', fa: 'مشاهده در لینکدین' },
          href: profileData.linkedinUrl,
          external: true,
        },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 8. Projects overview ("Explore my projects" / "Show me your projects")
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
        en: `Here are my curated featured projects—led by Rahkar ERP (16-module TypeScript/Node.js ERP), CargoCraft (Next.js 15 analytics studio), NovaAdmin (206-page RTL/LTR admin system), Tishra Analyzer (Firefox SEO/security extension), Kalamesaz (React Native Android game), and EchMail (Vue 3 + Pinia + Jest workspace).`,
        fa: `در ادامه پروژه‌های منتخب من نمایش داده شده‌اند؛ شامل سامانه‌ی Rahkar ERP (با ۱۶ ماژول مالی و عملیاتی)، داشبورد CargoCraft (با Next.js 15)، سیستم مدیریت NovaAdmin (با ۲۰۶ صفحه RTL/LTR)، افزونه‌ی فایرفاکس Tishra Analyzer، بازی موبایل کلمه‌ساز و کلاینت EchMail.`,
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
            en: `Explore All ${curatedProjects.length} Curated Projects`,
            fa: `مشاهده همه ${curatedProjects.length} پروژه منتخب`,
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
        en: `I hold a ${edu.degree.en} from the ${edu.institution.en}, alongside ${publications.length} published engineering articles on DEV Community & Medium and active contributions on Stack Overflow (57k+ developers reached). Up-to-date course certificates can be verified directly on my LinkedIn profile.`,
        fa: `من دارای ${edu.degree.fa} از ${edu.institution.fa} هستم و علاوه بر انتشار مقالات فنی در DEV Community و Medium، بیش از ۵ سال در Stack Overflow فعالیت دارم. گواهینامه‌های آموزشی نیز مستقیماً در پروفایل لینکدین من قابل بررسی هستند.`,
      },
      blocks: [{ type: 'education' }],
      followUpIds: ['professional-experience', 'strongest-skills', 'contact-me'],
      actionLinks: [
        { label: { en: 'Education & Writing Page', fa: 'صفحه تحصیلات و مقالات' }, href: '/education' },
        {
          label: { en: 'LinkedIn Profile', fa: 'پروفایل لینکدین' },
          href: profileData.linkedinUrl,
          external: true,
        },
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
        en: 'You can view my clean, single-source Executive Resume right inside the app or save/print it directly as a formatted A4 PDF with all chat controls stripped automatically.',
        fa: 'می‌توانید نسخه‌ی ساختاریافته و رسمی رزومه‌ی من را مستقیماً مشاهده کنید یا با یک کلیک آن را بدون اجزای چت، در قالب PDF استاندارد ذخیره و چاپ نمایید.',
      },
      blocks: [{ type: 'resume-cta' }],
      followUpIds: ['professional-experience', 'why-hire', 'contact-me'],
      actionLinks: [
        { label: { en: 'Download / Save as PDF', fa: 'دانلود / ذخیره PDF رزومه' }, href: '/resume?print=1' },
        { label: { en: 'Open Interactive Resume View', fa: 'مشاهده صفحه رزومه' }, href: '/resume' },
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
        en: `The fastest ways to reach me are via direct email (${profileData.email}) or LinkedIn. Below you can copy my email address in one click, launch your mail client, or open my verified profiles.`,
        fa: `سریع‌ترین راه ارتباط با من از طریق ایمیل مستقیم (${profileData.email}) یا پیام در لینکدین است. از کارت زیر می‌توانید ایمیل را با یک کلیک کپی کنید یا وارد پروفایل‌های حرفه‌ای من شوید.`,
      },
      blocks: [{ type: 'contact' }],
      followUpIds: ['why-hire', 'about-me', 'explore-projects'],
      actionLinks: [
        { label: { en: 'Open Contact Page', fa: 'باز کردن صفحه تماس' }, href: '/contact' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 12. About / Tell me about yourself / Greeting
  if (
    normalized.includes('about yourself') ||
    normalized.includes('who are you') ||
    normalized.includes('introduce') ||
    normalized.includes('about hosein') ||
    normalized.includes('tell me about you') ||
    normalized.includes('درباره خودت') ||
    normalized.includes('معرفی') ||
    normalized.includes('کی هستی') ||
    normalized.includes('حسین صداقت') ||
    /^(hi|hello|hey|greetings|سلام|درود|وقت بخیر)[!.?؟\s]*$/.test(normalized)
  ) {
    return {
      intent: 'about',
      content: {
        en: `${profileData.summaryParagraphs.en[0]}\n\n${profileData.summaryParagraphs.en[1]}`,
        fa: `${profileData.summaryParagraphs.fa[0]}\n\n${profileData.summaryParagraphs.fa[1]}`,
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
        { label: { en: 'Full Profile & Principles', fa: 'صفحه معرفی کامل' }, href: '/about' },
        { label: { en: 'View Printable Resume', fa: 'مشاهده رزومه کامل' }, href: '/resume' },
      ],
      sourceMode: 'knowledge-base',
    };
  }

  // 13. Honest Unknown / Out-of-Scope Fallback (Zero Hallucination Rule)
  return {
    intent: 'unknown',
    content: {
      en: `That specific detail isn’t included in my verified portfolio knowledge base—and to keep everything accurate, this assistant never guesses or invents unverified information.\n\nYou can ask me about my experience at Paystar, featured engineering projects (such as Rahkar ERP, NovaAdmin, CargoCraft, Tishra Analyzer, or Kalamesaz), technical stack, education, or reach out directly via LinkedIn or email (${profileData.email}) for specifics like availability, compensation, or custom team requirements.`,
      fa: `جزئیات دقیق این پرسش در پایگاه دانش تأییدشده‌ی رزومه‌ی من ثبت نشده است و این دستیار برای حفظ صداقت حرفه‌ای، هیچ اطلاعات حدسی یا تأییدنشده‌ای تولید نمی‌کند.\n\nمی‌توانید درباره تجربه‌ی کاری من در پی‌استار، پروژه‌های شاخص (مانند Rahkar ERP، NovaAdmin، CargoCraft، Tishra Analyzer یا کلمه‌ساز)، مهارت‌های فنی و تحصیلات بپرسید، یا برای جزئیات تکمیلی همکاری مستقیماً از طریق لینکدین یا ایمیل (${profileData.email}) با من در ارتباط باشید.`,
    },
    blocks: [{ type: 'contact' }],
    followUpIds: ['about-me', 'explore-projects', 'professional-experience', 'strongest-skills'],
    actionLinks: [
      {
        label: { en: 'Message on LinkedIn', fa: 'ارسال پیام در لینکدین' },
        href: profileData.linkedinUrl,
        external: true,
      },
      {
        label: { en: 'Browse GitHub Repositories', fa: 'بررسی مخازن گیت‌هاب' },
        href: profileData.githubUrl,
        external: true,
      },
    ],
    sourceMode: 'knowledge-base',
  };
}
