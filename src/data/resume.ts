import type {
  CertificationItem,
  CertificationNote,
  EducationItem,
  ExperienceItem,
  ExternalLinkItem,
  ProfileData,
  PublicationItem,
  SkillCategory,
} from '@/types/portfolio';

export const profileData: ProfileData = {
  name: {
    en: 'Hosein Sedaqat',
    fa: 'حسین صداقت',
  },
  shortName: 'Hosein Sedaqat',
  initials: 'HS',
  title: {
    en: 'Full-Stack Developer',
    fa: 'توسعه‌دهنده‌ی Full-Stack',
  },
  headline: {
    en: 'Full-Stack Developer | React · Next.js · Node.js · TypeScript',
    fa: 'توسعه‌دهنده‌ی Full-Stack | React · Next.js · Node.js · TypeScript',
  },
  welcomeGreeting: {
    en: "Hi, I'm Hosein Sedaqat — Full-Stack Developer.",
    fa: 'سلام، من حسین صداقت هستم — توسعه‌دهنده‌ی Full-Stack.',
  },
  welcomeSubtitle: {
    en: '5+ years building data-driven FinTech & SaaS web applications.',
    fa: '+۵ سال تجربه ساخت وب‌اپلیکیشن‌های داده‌محور در حوزه فین‌تک و SaaS.',
  },
  avatarUrl: '/photo/hosein-sedaqat.jpg',
  secondaryPhotoUrl: '/photo/HoseinSedaqat.jpg',
  location: {
    en: 'Bandar Abbas, Iran · Open to Remote',
    fa: 'بندرعباس، ایران · آماده همکاری ریموت',
  },
  email: 'hsedaqat1378@gmail.com',
  websiteUrl: 'https://hoseinsedaqat.github.io/',
  githubUrl: 'https://github.com/hoseinsedaqat',
  linkedinUrl: 'https://www.linkedin.com/in/hoseinsedaqat/',
  stackoverflowUrl: 'https://stackoverflow.com/users/14983011/hosein-sedaqat',
  devtoUrl: 'https://dev.to/hoseinsedaqat',
  mediumUrl: 'https://hoseinsedaqat.medium.com/',
  spokenLanguages: [
    {
      name: { en: 'English', fa: 'انگلیسی' },
      proficiency: {
        en: 'Professional working proficiency',
        fa: 'تسلط حرفه‌ای کاری',
      },
    },
    {
      name: { en: 'Persian', fa: 'فارسی' },
      proficiency: {
        en: 'Native or bilingual proficiency',
        fa: 'زبان مادری',
      },
    },
  ],
  summaryParagraphs: {
    en: [
      'Full-Stack Developer with 5 years of experience building data-driven web applications for FinTech and SaaS companies. Built production features used by 4,000+ active users, real-time dashboards tracking 200+ daily transactions, and a complete online invoicing system used in production.',
    ],
    fa: [
      'توسعه‌دهنده Full-Stack با ۵ سال تجربه در ساخت وب‌اپلیکیشن‌های داده‌محور برای شرکت‌های فین‌تک و SaaS. پیاده‌سازی قابلیت‌های عملیاتی برای +۴٬۰۰۰ کاربر فعال، داشبوردهای لحظه‌ای با رهگیری +۲۰۰ تراکنش روزانه و سامانه کامل صدور فاکتور آنلاین در محیط عملیاتی.',
    ],
  },
  focusAreas: {
    en: [
      '5 years in FinTech & SaaS web apps',
      '4,000+ active users served in production',
      '15,000+ installs on Cafe Bazaar (Mangro)',
      '16-module automated ERP (Rahkar ERP)',
    ],
    fa: [
      '۵ سال تجربه در فین‌تک و SaaS',
      '+۴٬۰۰۰ کاربر فعال در محیط عملیاتی',
      '+۱۵٬۰۰۰ نصب در کافه‌بازار (اپ حسابداری مانگرو)',
      'سامانه ERP شانزده‌ماژوله با سند خودکار (راهکار)',
    ],
  },
  engineeringValues: [
    {
      title: { en: 'Production Impact', fa: 'تأثیر واقعی در محصول' },
      description: {
        en: '4,000+ active FinTech users, 60%+ ownership of online invoicing, and +40% wallet engagement.',
        fa: '+۴٬۰۰۰ کاربر فعال فین‌تک، توسعه بیش از ۶۰٪ فاکتور آنلاین و افزایش ۴۰٪ تعامل کیف پول.',
      },
    },
    {
      title: { en: 'Full-Stack Ownership', fa: 'مسئولیت‌پذیری Full-Stack' },
      description: {
        en: 'React/Next.js & Vue/Nuxt frontends paired with Node.js, Express/NestJS, GraphQL, and PostgreSQL.',
        fa: 'تسلط هم‌زمان بر React/Next.js و Vue/Nuxt در کنار Node.js، GraphQL و PostgreSQL.',
      },
    },
  ],
  valuePropositions: [
    {
      title: {
        en: 'Proven FinTech Impact',
        fa: 'تجربه اثبات‌شده در فین‌تک',
      },
      description: {
        en: 'Shipped features for 4,000+ active users at Paystar, built 60%+ of online invoicing, and boosted wallet engagement by 40%.',
        fa: 'توسعه قابلیت‌ها برای +۴٬۰۰۰ کاربر فعال در پی‌استار، ساخت +۶۰٪ فاکتور آنلاین و رشد ۴۰٪ تعامل کیف پول.',
      },
      proof: {
        en: 'Paystar (May 2022 – May 2025)',
        fa: 'پی‌استار (۲۰۲۲ – ۲۰۲۵)',
      },
    },
    {
      title: {
        en: 'Shipped Products at Scale',
        fa: 'ساخت محصولات واقعی و پرمخاطب',
      },
      description: {
        en: 'Co-built Mangro accounting app (15,000+ Cafe Bazaar installs) and launched 16-module Rahkar ERP.',
        fa: 'ساخت اپ حسابداری مانگرو (+۱۵٬۰۰۰ نصب در کافه‌بازار) و سامانه ۱۶ ماژوله Rahkar ERP.',
      },
      proof: {
        en: 'Mangro & Rahkar ERP (2026)',
        fa: 'مانگرو و راهکار ERP',
      },
    },
    {
      title: {
        en: 'React/Next.js + Vue/Nuxt + Node.js',
        fa: 'تسلط بر React، Vue و Node.js',
      },
      description: {
        en: '5 years across TypeScript, React, Next.js, Vue, Nuxt, Node.js, PostgreSQL, and automated testing.',
        fa: '۵ سال تجربه عملی با TypeScript، React، Next.js، Vue، Nuxt، Node.js و تست خودکار.',
      },
      proof: {
        en: '45 Public GitHub Repos',
        fa: '۴۵ مخزن عمومی گیت‌هاب',
      },
    },
    {
      title: {
        en: 'Tested & AI-Ready Workflow',
        fa: 'تست خودکار و ابزارهای هوش مصنوعی',
      },
      description: {
        en: 'Unit/E2E testing with Jest, Vitest & Cypress plus practical OpenAI API & LangChain integration.',
        fa: 'تست‌نویسی با Jest، Vitest و Cypress به همراه تجربه عملی با OpenAI API و LangChain.',
      },
      proof: {
        en: 'Rahkar ERP, EchMail & Tishra',
        fa: 'پروژه‌های راهکار، EchMail و تیشرا',
      },
    },
  ],
};

export const experienceItems: ExperienceItem[] = [
  {
    id: 'freelance-fullstack',
    role: {
      en: 'Full-Stack Developer',
      fa: 'توسعه‌دهنده‌ی Full-Stack',
    },
    company: {
      en: 'Freelancer',
      fa: 'فریلنسر',
    },
    location: {
      en: 'Bandar Abbas, Iran · Hybrid',
      fa: 'بندرعباس، ایران · ترکیبی',
    },
    period: {
      en: 'Jan 2026 – Present',
      fa: 'ژانویه ۲۰۲۶ – اکنون',
    },
    employmentType: {
      en: 'Full-time',
      fa: 'تمام‌وقت',
    },
    domain: {
      en: 'Accounting & Enterprise ERP Software',
      fa: 'نرم‌افزارهای حسابداری و ERP',
    },
    summary: {
      en: 'Building accounting and automated ERP applications for small and mid-sized businesses.',
      fa: 'توسعه نرم‌افزارهای حسابداری و سامانه یکپارچه ERP برای کسب‌وکارها.',
    },
    responsibilities: {
      en: [
        'Built Mangro accounting app (team of 3) and published it on Cafe Bazaar with 15,000+ installs.',
        'Launched Rahkar ERP with 16 modules that automatically creates accounting records from every invoice and stock entry, reducing manual work for small businesses.',
      ],
      fa: [
        'ساخت اپلیکیشن حسابداری مانگرو (در تیم ۳ نفره) و انتشار در کافه‌بازار با بیش از ۱۵٬۰۰۰ نصب فعال.',
        'راه‌اندازی سامانه Rahkar ERP با ۱۶ ماژول که از هر فاکتور و حواله انبار به‌طور خودکار سند حسابداری ثبت می‌کند.',
      ],
    },
    achievements: [
      {
        problem: {
          en: 'Manual double-entry bookkeeping across sales and inventory.',
          fa: 'ثبت دستی و زمان‌بر اسناد حسابداری از روی فاکتورها.',
        },
        action: {
          en: 'Built Mangro (team of 3) and 16-module Rahkar ERP.',
          fa: 'توسعه اپ مانگرو و سامانه ۱۶ ماژوله راهکار ERP.',
        },
        outcome: {
          en: '15,000+ installs on Cafe Bazaar & automated accounting entries.',
          fa: '+۱۵٬۰۰۰ نصب در کافه‌بازار و اتوماسیون کامل ثبت سند.',
        },
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'GraphQL',
      'PHP',
      'Docker',
      'Unit Testing',
      'Prompt Engineering',
      'Git',
    ],
  },
  {
    id: 'paystar',
    role: {
      en: 'Front-End Developer',
      fa: 'توسعه‌دهنده‌ی فرانت‌اند',
    },
    company: {
      en: 'Paystar | پی‌استار',
      fa: 'پی‌استار (Paystar)',
    },
    companyUrl: 'https://paystar.ir',
    location: {
      en: 'Tehran, Iran · Remote',
      fa: 'تهران، ایران · دورکاری',
    },
    period: {
      en: 'May 2022 – May 2025 · 3 yrs 1 mo',
      fa: 'می ۲۰۲۲ – می ۲۰۲۵ · ۳ سال و ۱ ماه',
    },
    employmentType: {
      en: 'Full-time',
      fa: 'تمام‌وقت',
    },
    domain: {
      en: 'FinTech, Payment Gateway & Online Invoicing',
      fa: 'فین‌تک، درگاه پرداخت و فاکتور آنلاین',
    },
    summary: {
      en: 'Shipped FinTech payment, wallet, and online invoicing applications for 4,000+ active users.',
      fa: 'توسعه سامانه فاکتور آنلاین، کیف پول و پنل پرداخت برای بیش از ۴٬۰۰۰ کاربر فعال.',
    },
    responsibilities: {
      en: [
        'Shipped production features used by 4,000+ active users in a team of 5.',
        'Developed over 60% of the online invoicing application that enabled users to generate, send, and manage invoices.',
        'Redesigned the wallet payment section, increasing user engagement by 40%.',
      ],
      fa: [
        'پیاده‌سازی قابلیت‌های عملیاتی مورد استفاده بیش از ۴٬۰۰۰ کاربر فعال در یک تیم ۵ نفره.',
        'توسعه بیش از ۶۰٪ اپلیکیشن صدور فاکتور آنلاین برای ساخت، ارسال و مدیریت فاکتورها.',
        'بازطراحی بخش پرداخت کیف پول که منجر به افزایش ۴۰ درصدی تعامل کاربران شد.',
      ],
    },
    achievements: [
      {
        problem: {
          en: 'Merchants needed fast online invoicing and smoother wallet checkout.',
          fa: 'نیاز پذیرندگان به صدور سریع فاکتور و تجربه روان‌تر کیف پول.',
        },
        action: {
          en: 'Built 60%+ of online invoicing and redesigned wallet payment flows.',
          fa: 'توسعه +۶۰٪ سامانه فاکتور آنلاین و بازطراحی بخش کیف پول.',
        },
        outcome: {
          en: 'Served 4,000+ active users and increased wallet engagement by 40%.',
          fa: 'خدمت‌رسانی به +۴٬۰۰۰ کاربر فعال و رشد ۴۰٪ تعامل کیف پول.',
        },
      },
    ],
    technologies: [
      'TypeScript',
      'Vue.js',
      'Nuxt.js',
      'Vuex',
      'React.js',
      'Redux',
      'Laravel',
      'PHP',
      'jQuery',
      'REST API',
      'MySQL',
      'Chart.js',
      'Unit Testing',
      'Git',
    ],
  },
  {
    id: 'npa-oman',
    role: {
      en: 'Front-End Developer',
      fa: 'توسعه‌دهنده‌ی فرانت‌اند',
    },
    company: {
      en: 'National Publishing & Advertising',
      fa: 'National Publishing & Advertising',
    },
    location: {
      en: 'Muscat, Oman · Remote',
      fa: 'مسقط، عمان · دورکاری',
    },
    period: {
      en: 'Feb 2022 – Apr 2022 · 3 mos',
      fa: 'فوریه ۲۰۲۲ – آوریل ۲۰۲۲ · ۳ ماه',
    },
    employmentType: {
      en: 'Contract',
      fa: 'قراردادی',
    },
    domain: {
      en: 'Publishing & Event Platform (Muscat, Oman)',
      fa: 'پلتفرم نشر، تبلیغات و رویداد (عمان)',
    },
    summary: {
      en: 'Frontend delivery for a publishing and event platform in Muscat, Oman.',
      fa: 'توسعه رابط کاربری پلتفرم نشر و تبلیغات در مسقط عمان.',
    },
    responsibilities: {
      en: [
        'Streamlined responsive UI across devices for a publishing and advertising platform in Muscat (including Oman Social Media Week Event).',
        'Delivered new features in a team of 3 that improved platform functionality.',
      ],
      fa: [
        'بهینه‌سازی رابط کاربری واکنش‌گرا در دستگاه‌های مختلف برای پلتفرم نشر و تبلیغات در مسقط (شامل رویداد Oman Social Media Week).',
        'پیاده‌سازی قابلیت‌های جدید در تیم ۳ نفره جهت ارتقای کارایی پلتفرم.',
      ],
    },
    achievements: [],
    technologies: [
      'Vue.js',
      'Vuex',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Git/GitHub',
    ],
  },
  {
    id: 'freelance-frontend',
    role: {
      en: 'Front-End Developer',
      fa: 'توسعه‌دهنده‌ی فرانت‌اند',
    },
    company: {
      en: 'Freelancer',
      fa: 'فریلنسر',
    },
    location: {
      en: 'Bandar Abbas, Iran · Remote',
      fa: 'بندرعباس، ایران · دورکاری',
    },
    period: {
      en: 'Jun 2020 – Jan 2022 · 1 yr 8 mos',
      fa: 'ژوئن ۲۰۲۰ – ژانویه ۲۰۲۲ · ۱ سال و ۸ ماه',
    },
    employmentType: {
      en: 'Full-time',
      fa: 'تمام‌وقت',
    },
    domain: {
      en: 'Responsive Web Apps & Multilingual RTL UI',
      fa: 'وب‌اپلیکیشن‌های واکنش‌گرا و رابط‌های چندزبانه',
    },
    summary: {
      en: 'Delivered 10+ responsive web applications, e-commerce UIs, and corporate websites.',
      fa: 'توسعه بیش از ۱۰ وب‌اپلیکیشن واکنش‌گرا، مارکت‌پلیس و وب‌سایت شرکتی.',
    },
    responsibilities: {
      en: [
        'Developed 10+ responsive web applications and localized UI themes into Persian (Farsi) for multilingual users.',
        'Created an e-commerce marketplace inspired by Digikala that achieved a Lighthouse performance score of 84/100.',
        'Designed and launched a corporate website for Mohabbat Studio in a team of 2, improving brand presence and user engagement.',
      ],
      fa: [
        'توسعه بیش از ۱۰ وب‌اپلیکیشن واکنش‌گرا و بومی‌سازی قالب‌های رابط کاربری به فارسی برای کاربران چندزبانه.',
        'ساخت مارکت‌پلیس فروشگاهی با الهام از دیجی‌کالا و کسب امتیاز عملکرد ۸۴/۱۰۰ در Lighthouse.',
        'طراحی و راه‌اندازی وب‌سایت شرکتی استودیو محبت در تیم ۲ نفره و افزایش تعامل کاربران.',
      ],
    },
    achievements: [],
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'Vuex',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'REST API',
      'Git/GitHub',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: { en: 'Frontend', fa: 'فرانت‌اند (Frontend)' },
    description: {
      en: 'Modern SPA/SSR frameworks & data visualization',
      fa: 'فریم‌ورک‌های مدرن وب و مصورسازی داده',
    },
    skills: [
      { name: 'React', context: { en: 'Production apps & dashboards', fa: 'اپلیکیشن‌ها و داشبوردهای عملیاتی' }, evidenceSlugs: ['cargocraft-erp', 'tishra-analyzer'] },
      { name: 'Next.js', context: { en: 'App Router & SSG/SSR', fa: 'معماری App Router و خروجی بهینه' }, evidenceSlugs: ['cargocraft-erp'] },
      { name: 'Vue.js', context: { en: 'Paystar FinTech & PWAs', fa: 'محصولات فین‌تک پی‌استار و PWA' }, evidenceSlugs: ['echmail', 'echgram'] },
      { name: 'Nuxt.js', context: { en: 'SSR & modular Vue apps', fa: 'وب‌اپلیکیشن‌های ماژولار Vue' } },
      { name: 'TypeScript', context: { en: 'Strict end-to-end typing', fa: 'تایپ‌سیفتی کامل در فرانت‌اند و بک‌اند' }, evidenceSlugs: ['rahkar-erp', 'cargocraft-erp'] },
      { name: 'Tailwind CSS', context: { en: 'Design tokens & RTL/LTR', fa: 'سیستم طراحی و چیدمان دوجهته' }, evidenceSlugs: ['cargocraft-erp', 'tishra-analyzer'] },
      { name: 'Chart.js', context: { en: 'Financial & KPI charts', fa: 'نمودارهای مالی و تحلیلی' } },
    ],
  },
  {
    id: 'backend',
    title: { en: 'Backend', fa: 'بک‌اند (Backend)' },
    description: {
      en: 'APIs, business logic & auth',
      fa: 'سرویس‌های سمت سرور و منطق کسب‌وکار',
    },
    skills: [
      { name: 'Node.js', context: { en: 'REST services & ERP backend', fa: 'بک‌اند ERP و سرویس‌های REST' }, evidenceSlugs: ['rahkar-erp'] },
      { name: 'Express', context: { en: 'Modular API routing & JWT', fa: 'روتینگ ماژولار و احراز هویت JWT' }, evidenceSlugs: ['rahkar-erp'] },
      { name: 'NestJS', context: { en: 'Structured TypeScript APIs', fa: 'معماری ساختاریافته بک‌اند' } },
      { name: 'GraphQL', context: { en: 'Typed query schemas', fa: 'ارتباط داده تایپ‌شده' } },
      { name: 'REST APIs', context: { en: '78+ ERP endpoints & FinTech APIs', fa: 'طراحی و مصرف APIهای مالی و سازمانی' }, evidenceSlugs: ['rahkar-erp'] },
      { name: 'PHP / Laravel', context: { en: 'FinTech & accounting integration', fa: 'یکپارچه‌سازی سرویس‌های مالی' } },
    ],
  },
  {
    id: 'databases',
    title: { en: 'Database', fa: 'پایگاه داده (Database)' },
    description: {
      en: 'Relational, document & in-memory stores',
      fa: 'پایگاه‌های داده رابطه‌ای، سندی و کش',
    },
    skills: [
      { name: 'PostgreSQL', context: { en: '31-table ERP relational schema', fa: 'طراحی ۳۱ جدول رابطه‌ای در راهکار ERP' }, evidenceSlugs: ['rahkar-erp'] },
      { name: 'MongoDB', context: { en: 'Document data modeling', fa: 'مدل‌سازی داده‌های NoSQL' } },
      { name: 'Redis', context: { en: 'Caching & session speedups', fa: 'کش و مدیریت نشست‌ها' } },
      { name: 'MySQL', context: { en: 'Production financial records', fa: 'داده‌های عملیاتی در پی‌استار' } },
    ],
  },
  {
    id: 'testing',
    title: { en: 'Testing', fa: 'تست و کیفیت (Testing)' },
    description: {
      en: 'Unit, component & E2E verification',
      fa: 'تست واحد، کامپوننت و End-to-End',
    },
    skills: [
      { name: 'Jest', context: { en: 'Unit & store test suites', fa: 'تست واحد و استورها' }, evidenceSlugs: ['echmail', 'kalamesaz'] },
      { name: 'Vitest', context: { en: 'Fast TypeScript domain tests', fa: 'تست سریع موتورهای محاسباتی' }, evidenceSlugs: ['rahkar-erp'] },
      { name: 'React Testing Library', context: { en: 'Interactive UI component tests', fa: 'تست تعاملات کامپوننت‌های رابط کاربری' } },
      { name: 'Cypress', context: { en: 'End-to-end user flow testing', fa: 'تست End-to-End سناریوهای کاربر' } },
    ],
  },
  {
    id: 'ai',
    title: { en: 'AI Automation', fa: 'اتوماسیون هوش مصنوعی (AI)' },
    description: {
      en: 'LLM workflows & intelligent features',
      fa: 'یکپارچه‌سازی مدل‌های زبانی در محصول',
    },
    skills: [
      { name: 'Prompt Engineering', context: { en: 'Structured, grounded prompts', fa: 'طراحی پرامپت‌های دقیق و ساختاریافته' } },
      { name: 'OpenAI API', context: { en: 'Assistant & workflow integration', fa: 'اتصال API مدل‌های هوش مصنوعی' } },
      { name: 'LangChain', context: { en: 'Chained AI pipelines', fa: 'ساخت زنجیره‌های پردازش هوشمند' } },
    ],
  },
  {
    id: 'tools',
    title: { en: 'Infrastructure & Tools', fa: 'زیرساخت و ابزارها (DevOps)' },
    description: {
      en: 'Containers, CI/CD & cloud deployment',
      fa: 'کانتینر، استقرار خودکار و ابزارهای مهندسی',
    },
    skills: [
      { name: 'Docker', context: { en: 'Containerized local & prod setups', fa: 'کانتینرسازی محیط توسعه و محصول' } },
      { name: 'Git & GitHub Actions', context: { en: 'CI/CD workflows & version control', fa: 'کنترل نسخه و پایپ‌لاین CI/CD' } },
      { name: 'Vercel & Netlify', context: { en: 'Frontend & preview deployments', fa: 'استقرار سریع وب‌اپلیکیشن‌ها' } },
      { name: 'Postman', context: { en: 'API testing & contract checks', fa: 'تست و مستندسازی API' } },
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    id: 'usb-bsc',
    degree: {
      en: "Bachelor's degree, Industrial Engineering",
      fa: 'کارشناسی مهندسی صنایع',
    },
    institution: {
      en: 'University of Sistan and Baluchestan',
      fa: 'دانشگاه سیستان و بلوچستان',
    },
    location: {
      en: 'Iran',
      fa: 'ایران',
    },
    period: {
      en: 'Jan 2018 – Sep 2023',
      fa: 'ژانویه ۲۰۱۸ – سپتامبر ۲۰۲۳',
    },
    note: {
      en: 'Systems analysis, process optimization, and data-driven engineering.',
      fa: 'تحلیل سیستم‌ها، بهینه‌سازی فرآیندها و مهندسی داده‌محور.',
    },
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'sololearn-react-redux',
    title: 'React + Redux Tutorial Course',
    issuer: 'Sololearn',
    issuedDate: { en: 'Issued Aug 2022', fa: 'آگوست ۲۰۲۲' },
    credentialId: 'CT-BVO7P03Z',
    url: 'https://www.sololearn.com/certificates/CT-BVO7P03Z',
  },
  {
    id: 'sololearn-rwd',
    title: 'Responsive Web Design Course',
    issuer: 'Sololearn',
    issuedDate: { en: 'Issued Apr 2021', fa: 'آوریل ۲۰۲۱' },
    credentialId: '1162-21427246',
    url: 'https://www.linkedin.com/in/hoseinsedaqat/details/certifications/',
  },
  {
    id: 'sololearn-jquery',
    title: 'JQuery Tutorial Course',
    issuer: 'Sololearn',
    issuedDate: { en: 'Issued Apr 2021', fa: 'آوریل ۲۰۲۱' },
    credentialId: '1082-21427246',
    url: 'https://www.linkedin.com/in/hoseinsedaqat/details/certifications/',
  },
  {
    id: 'sololearn-javascript',
    title: 'JavaScript Tutorial Course',
    issuer: 'Sololearn',
    issuedDate: { en: 'Issued Mar 2021', fa: 'مارس ۲۰۲۱' },
    credentialId: '21427246-1024',
    url: 'https://www.linkedin.com/in/hoseinsedaqat/details/certifications/',
  },
  {
    id: 'sololearn-css',
    title: 'CSS Fundamentals Course',
    issuer: 'Sololearn',
    issuedDate: { en: 'Issued Mar 2021', fa: 'مارس ۲۰۲۱' },
    credentialId: '1023-21427246',
    url: 'https://www.linkedin.com/in/hoseinsedaqat/details/certifications/',
  },
  {
    id: 'sololearn-html',
    title: 'HTML Fundamentals Course',
    issuer: 'Sololearn',
    issuedDate: { en: 'Issued Mar 2021', fa: 'مارس ۲۰۲۱' },
    credentialId: '1014-21427246',
    url: 'https://www.linkedin.com/in/hoseinsedaqat/details/certifications/',
  },
];

export const certificationNote: CertificationNote = {
  title: {
    en: 'Licenses & Certifications',
    fa: 'گواهینامه‌های تخصصی',
  },
  description: {
    en: 'Verified course credentials on LinkedIn.',
    fa: 'گواهینامه‌های آموزشی ثبت‌شده در لینکدین.',
  },
  verificationUrl: 'https://www.linkedin.com/in/hoseinsedaqat/details/certifications/',
};

export const publications: PublicationItem[] = [
  {
    id: 'tishra-article',
    title: 'Building Tishra Analyzer: How I Created a Privacy-First SEO & Security Extension',
    platform: 'DEV Community & Medium',
    date: 'Feb 2026',
    url: 'https://dev.to/hoseinsedaqat/building-tishra-analyzer-how-i-created-a-privacy-first-seo-security-extension-16j3',
    summary: {
      en: 'How I built a 100% local Manifest V3 SEO & security audit browser extension with React.',
      fa: 'نحوه ساخت افزونه مرورگر بررسی سئو و امنیت به صورت کاملاً محلی با React و Manifest V3.',
    },
    tags: ['React', 'Manifest V3', 'SEO'],
  },
  {
    id: 'developer-efficiency-article',
    title: 'How Can We Be More Efficient as Developers',
    platform: 'DEV Community & Medium',
    date: 'Aug 2025',
    url: 'https://dev.to/hoseinsedaqat/how-can-we-be-more-efficient-as-developers-51he',
    summary: {
      en: 'Practical habits for deep engineering focus, sustainable energy, and preventing burnout.',
      fa: 'راهکارهای کاربردی برای تمرکز عمیق برنامه‌نویسی و جلوگیری از فرسودگی شغلی.',
    },
    tags: ['Productivity', 'Engineering'],
  },
];

export const externalLinks: ExternalLinkItem[] = [
  {
    id: 'linkedin',
    label: { en: 'LinkedIn', fa: 'لینکدین (LinkedIn)' },
    url: 'https://www.linkedin.com/in/hoseinsedaqat/',
    handle: 'in/hoseinsedaqat',
    category: 'primary',
    description: {
      en: '500+ connections · Full experience, 6 certifications & direct messaging.',
      fa: '+۵۰۰ ارتباط حرفه‌ای · سوابق کامل، ۶ گواهینامه و پیام مستقیم.',
    },
  },
  {
    id: 'github',
    label: { en: 'GitHub', fa: 'گیت‌هاب (GitHub)' },
    url: 'https://github.com/hoseinsedaqat',
    handle: '@hoseinsedaqat',
    category: 'primary',
    description: {
      en: '45 public repositories including Rahkar ERP, CargoCraft, NovaAdmin & Tishra.',
      fa: '۴۵ مخزن عمومی شامل Rahkar ERP، CargoCraft، NovaAdmin و Tishra.',
    },
  },
  {
    id: 'stackoverflow',
    label: { en: 'Stack Overflow', fa: 'استک اورفلو (Stack Overflow)' },
    url: 'https://stackoverflow.com/users/14983011/hosein-sedaqat',
    handle: '57k+ reached',
    category: 'community',
    description: {
      en: '5+ years answering Node.js, React, Express & SSL questions.',
      fa: '+۵ سال فعالیت فنی با بیش از ۵۷ هزار بازدید از پاسخ‌ها.',
    },
  },
  {
    id: 'devto',
    label: { en: 'DEV Community', fa: 'جامعه توسعه‌دهندگان DEV' },
    url: 'https://dev.to/hoseinsedaqat',
    handle: '@hoseinsedaqat',
    category: 'writing',
    description: {
      en: 'Technical articles on browser extensions and developer productivity.',
      fa: 'مقالات فنی درباره ساخت افزونه مرورگر و بهره‌وری برنامه‌نویسی.',
    },
  },
  {
    id: 'medium',
    label: { en: 'Medium', fa: 'مدیوم (Medium)' },
    url: 'https://hoseinsedaqat.medium.com/',
    handle: 'hoseinsedaqat.medium.com',
    category: 'writing',
    description: {
      en: 'Software engineering essays and tutorials.',
      fa: 'یادداشت‌ها و آموزش‌های مهندسی نرم‌افزار.',
    },
  },
];
