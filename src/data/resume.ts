import type {
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
    en: 'Full-Stack Developer | React, Next.js, Vue.js, TypeScript & Node.js',
    fa: 'توسعه‌دهنده‌ی Full-Stack | متخصص React، Next.js، Vue.js، TypeScript و Node.js',
  },
  welcomeGreeting: {
    en: "Hi, I'm Hosein Sedaqat. Explore my work, experience, and technical skills through a conversation.",
    fa: 'سلام، من حسین صداقت هستم. سوابق کاری، پروژه‌ها و مهارت‌های فنی من را از طریق گفت‌وگو بررسی کنید.',
  },
  welcomeSubtitle: {
    en: 'Full-Stack Developer building practical, data-driven web applications across FinTech, ERP, and modern SaaS interfaces.',
    fa: 'توسعه‌دهنده‌ی Full-Stack با تمرکز بر ساخت وب‌اپلیکیشن‌های کاربردی، داده‌محور، ابزارهای سازمانی و محصولات مالی.',
  },
  avatarUrl: '/photo/HoseinSedaqat.jpg',
  secondaryPhotoUrl: '/photo/IMG_2795h-min.jpg',
  location: {
    en: 'Iran · Open to Remote & International Opportunities',
    fa: 'ایران · آماده‌ی همکاری ریموت و فرصت‌های بین‌المللی',
  },
  email: 'hsedaqat1378@gmail.com',
  websiteUrl: 'https://hoseinsedaqat.github.io/',
  githubUrl: 'https://github.com/hoseinsedaqat',
  linkedinUrl: 'https://www.linkedin.com/in/hoseinsedaqat/',
  stackoverflowUrl: 'https://stackoverflow.com/users/14983011/hosein-sedaqat',
  devtoUrl: 'https://dev.to/hoseinsedaqat',
  mediumUrl: 'https://hoseinsedaqat.medium.com/',
  summaryParagraphs: {
    en: [
      'I am a Full-Stack Software Developer with strong roots in Frontend Engineering—experienced in building financial payment interfaces at Paystar and architecting data-heavy operational products such as Rahkar ERP, NovaAdmin, and CargoCraft.',
      'Across both React/Next.js and Vue/Nuxt ecosystems, I focus on strict TypeScript modeling, predictable state management, native bilingual (LTR/RTL) design systems, Node.js REST APIs, and automated testing that keeps business rules reliable as software grows.',
      'Rather than treating UI as isolated screens, I enjoy connecting user workflows to real domain logic—whether that means balanced double-entry accounting engines, IndexedDB caching strategies, or privacy-first browser extensions.',
    ],
    fa: [
      'من توسعه‌دهنده‌ی نرم‌افزار Full-Stack با پیشینه‌ی عمیق در مهندسی فرانت‌اند هستم؛ با تجربه‌ی توسعه رابط‌های حوزه فین‌تک و پرداخت در شرکت پی‌استار (Paystar) و طراحی و پیاده‌سازی سامانه‌های داده‌محور مانند Rahkar ERP، NovaAdmin و CargoCraft.',
      'در هر دو اکوسیستم React/Next.js و Vue/Nuxt، تمرکز من بر مدل‌سازی دقیق با TypeScript، مدیریت وضعیت قابل پیش‌بینی، سیستم‌های طراحی دوجهته (RTL/LTR)، توسعه API با Node.js و تست‌نویسی هدفمند برای حفظ پایداری منطق کسب‌وکار است.',
      'به‌جای نگاه صرفاً ظاهری به صفحات، به پیوند دادن تجربه کاربری با منطق واقعی دامنه علاقه دارم؛ از موتورهای حسابداری دوطرفه و انبارداری در ERP گرفته تا کش محلی IndexedDB و افزونه‌های مرورگر حریم‌خصوصی‌محور.',
    ],
  },
  focusAreas: {
    en: [
      'Frontend Architecture with React, Next.js (App Router), Vue 3, and TypeScript',
      'Full-Stack Web Development with Node.js HTTP/REST APIs & PostgreSQL',
      'Data-Driven Dashboards, ERP Workflows, FinTech & Enterprise SaaS Interfaces',
      'Native Bilingual & Bi-Directional (LTR / Persian RTL) Design Token Systems',
      'Unit & End-to-End Software Testing (Vitest, Jest, React Testing Library, Vue Test Utils)',
      'Pragmatic AI-Assisted Engineering for faster prototyping, QA scripts, and documentation',
    ],
    fa: [
      'معماری فرانت‌اند با React، Next.js (App Router)، Vue 3 و TypeScript',
      'توسعه‌ی Full-Stack وب با Node.js، طراحی REST API و پایگاه داده PostgreSQL',
      'طراحی رابط‌های داده‌محور، سامانه‌های ERP، محصولات مالی (FinTech) و ابزارهای SaaS',
      'سیستم‌های طراحی توکن‌محور با پشتیبانی بومی دوجهته (انگلیسی LTR و فارسی RTL)',
      'تست نرم‌افزار و کدنویسی قابل نگهداری (Vitest، Jest، Testing Library)',
      'استفاده‌ی هدفمند و شفاف از ابزارهای هوش مصنوعی برای تسریع توسعه، کنترل کیفیت و مستندسازی',
    ],
  },
  engineeringValues: [
    {
      title: {
        en: 'Domain Integrity & Typed Contracts',
        fa: 'صحت منطق دامنه و تایپ‌سیفتی',
      },
      description: {
        en: 'Separating business calculations from UI rendering and enforcing TypeScript contracts across frontend and backend boundaries.',
        fa: 'جداسازی موتورهای منطق کسب‌وکار از لایه‌ی نمایش و اعمال قراردادهای دقیق TypeScript بین فرانت‌اند و سرور.',
      },
    },
    {
      title: {
        en: 'Clarity in Data-Dense Interfaces',
        fa: 'شفافیت در رابط‌های داده‌محور',
      },
      description: {
        en: 'Turning complex financial tables, multi-step forms, and KPI telemetry into calm, keyboard-accessible workflows.',
        fa: 'تبدیل جداول مالی پرتراکم، فرم‌های چندمرحله‌ای و شاخص‌های تحلیلی به جریان‌های کاری خوانا، سریع و دسترس‌پذیر.',
      },
    },
    {
      title: {
        en: 'Maintainability & Automated Verification',
        fa: 'نگهداری‌پذیری و کنترل کیفیت خودکار',
      },
      description: {
        en: 'Backing critical state stores, domain formulas, and multi-language layouts with automated unit, smoke, and E2E checks.',
        fa: 'پشتیبانی از استورها، فرمول‌های مالی و چیدمان‌های چندزبانه با تست‌های واحد، Smoke و End-to-End.',
      },
    },
    {
      title: {
        en: 'Honest, User-Respecting Engineering',
        fa: 'مهندسی شفاف و احترام به کاربر',
      },
      description: {
        en: 'Building privacy-first client tools, offline-capable PWAs, and fast bundles without unnecessary third-party bloat.',
        fa: 'توسعه‌ی ابزارهای حریم‌خصوصی‌محور، پشتیبانی آفلاین (PWA) و باندل‌های سبک بدون وابستگی‌های اضافی.',
      },
    },
  ],
  valuePropositions: [
    {
      title: {
        en: 'Cross-Ecosystem Frontend Depth (React/Next.js + Vue 3)',
        fa: 'تسلط عملی بر هر دو اکوسیستم React/Next.js و Vue 3',
      },
      description: {
        en: 'Comfortable joining teams running React 19 / Next.js App Router or Vue 3 / Pinia / Vite without ramp-up friction.',
        fa: 'آمادگی ورود سریع به تیم‌های مبتنی بر React 19 / Next.js یا Vue 3 / Pinia / Vite با تجربه‌ی واقعی در هر دو پشته.',
      },
      proof: {
        en: 'Demonstrated across CargoCraft & Datoos (Next.js 15), Tishra Analyzer (React 19), and EchMail / Wasapp (Vue 3 + Pinia).',
        fa: 'قابل مشاهده در CargoCraft و Datoos (با Next.js 15)، افزونه Tishra (با React 19) و پروژه‌های EchMail و Wasapp (با Vue 3 و Pinia).',
      },
    },
    {
      title: {
        en: 'Proven FinTech & Enterprise ERP Mindset',
        fa: 'درک عمیق محصولات مالی (FinTech) و سازمانی (ERP)',
      },
      description: {
        en: 'Hands-on experience with payment gateway interfaces at Paystar and end-to-end financial/operational workflows in Rahkar ERP.',
        fa: 'تجربه‌ی کار در حوزه‌ی درگاه‌های پرداخت در پی‌استار و پیاده‌سازی چرخه‌ی کامل مالی، انبار، حقوق و تولید در Rahkar ERP.',
      },
      proof: {
        en: 'Paystar Front-End Developer role (2022–Present) + Rahkar ERP (16 modules, 78 API routes, 31 PostgreSQL tables).',
        fa: 'فعالیت در Paystar (۲۰۲۲ تاکنون) و مخزن متن‌باز Rahkar ERP با ۱۶ ماژول، ۷۸ مسیر API و ۳۱ جدول پایگاه داده.',
      },
    },
    {
      title: {
        en: 'Full-Stack Ownership & Clean Architecture',
        fa: 'مسئولیت‌پذیری Full-Stack و معماری تمیز',
      },
      description: {
        en: 'Capable of designing database schemas, JWT/RBAC security layers, REST endpoints, calculation engines, and the UI that consumes them.',
        fa: 'توانایی طراحی اسکیمای دیتابیس، احراز هویت JWT و RBAC، مسیرهای REST API، موتورهای محاسباتی و رابط کاربری متصل به آن.',
      },
      proof: {
        en: 'Inspect `server/` and `database/` in Rahkar ERP alongside its 29 unit tests and E2E workflow suite.',
        fa: 'مستند و قابل بررسی در کدهای سمت سرور، مهاجرت‌های دیتابیس و تست‌های خودکار پروژه‌ی Rahkar ERP.',
      },
    },
    {
      title: {
        en: 'Product Polish, RTL/LTR Mastery & Shipping Discipline',
        fa: 'توجه به جزئیات محصول، تسلط بر RTL/LTR و تحویل واقعی',
      },
      description: {
        en: 'Ships real artifacts—live demos, a published Mozilla Firefox extension, mobile builds, and this interactive conversational portfolio itself.',
        fa: 'تمرکز بر تحویل محصول قابل استفاده: دموهای زنده، افزونه‌ی منتشرشده در استور فایرفاکس، اپ موبایل و همین رزومه‌ی تعاملی.',
      },
      proof: {
        en: 'Published Tishra Analyzer on Firefox Add-ons, NovaAdmin 206-page RTL/LTR token system, and Kalamesaz v2.0 Android app.',
        fa: 'انتشار رسمی Tishra Analyzer در Firefox Add-ons، سیستم ۲۰۶ صفحه‌ای NovaAdmin و نسخه‌ی ۲ بازی کلمه‌ساز.',
      },
    },
  ],
};

export const experienceItems: ExperienceItem[] = [
  {
    id: 'paystar',
    role: {
      en: 'Front-End Developer',
      fa: 'توسعه‌دهنده‌ی فرانت‌اند (Front-End Developer)',
    },
    company: {
      en: 'Paystar (پی‌استار)',
      fa: 'پی‌استار (Paystar)',
    },
    companyUrl: 'https://paystar.ir',
    location: {
      en: 'Iran',
      fa: 'ایران',
    },
    period: {
      en: '2022 – Present',
      fa: '۲۰۲۲ – اکنون',
    },
    employmentType: {
      en: 'Full-Time · FinTech & Payment Services',
      fa: 'تمام‌وقت · فین‌تک و پرداخت الکترونیک',
    },
    domain: {
      en: 'Online Payment Gateways, Merchant Settlement Workflows, Invoicing & Financial Web Interfaces',
      fa: 'درگاه‌های پرداخت اینترنتی، تسویه‌حساب هوشمند پذیرندگان، صدور فاکتور آنلاین و پنل‌های مالی',
    },
    summary: {
      en: 'Contributing to frontend web interfaces at Paystar, an online payment gateway and financial technology provider offering merchant payment pages, online invoicing, smart banking gateway routing, and automated multi-account transaction settlements.',
      fa: 'توسعه و بهبود رابط‌های کاربری وب در شرکت پی‌استار (ارائه‌دهنده‌ی خدمات درگاه پرداخت اینترنتی، صفحات پرداخت شخصی، فاکتور آنلاین، مسیردهی هوشمند بانکی و تسویه‌ی خودکار تراکنش‌ها).',
    },
    responsibilities: {
      en: [
        'Developing and maintaining responsive merchant-facing financial interfaces, transaction views, and payment workflows.',
        'Implementing structured form validation, clear error states, and reliable API integration for sensitive financial operations.',
        'Collaborating with backend and product teams to translate payment, invoicing, and settlement business rules into intuitive user journeys.',
        'Ensuring cross-browser compatibility, Persian RTL typographic accuracy, and maintainable component architecture.',
      ],
      fa: [
        'توسعه و نگهداری رابط‌های کاربری پنل‌های مالی، صفحات پرداخت، گزارش تراکنش‌ها و جریان‌های کاربری پذیرندگان.',
        'پیاده‌سازی اعتبارسنجی دقیق فرم‌ها، مدیریت خطاها و یکپارچه‌سازی مطمئن با وب‌سرویس‌های مالی و بانکی.',
        'همکاری نزدیک با تیم‌های بک‌اند و محصول برای تبدیل قوانین تجاری تسویه و صدور فاکتور به تجربه کاربری شفاف و روان.',
        'حفظ سازگاری در مرورگرها و نمایشگرهای مختلف، دقت تایپوگرافی فارسی (RTL) و ساختار کامپوننت‌های قابل نگهداری.',
      ],
    },
    achievements: [
      {
        problem: {
          en: 'Financial and payment interfaces require high trust, unambiguous transaction statuses, and error-resistant user input.',
          fa: 'رابط‌های مالی و پرداخت نیازمند اعتماد بالا، نمایش بی‌ابهام وضعیت تراکنش‌ها و جلوگیری از خطای ورودی کاربر هستند.',
        },
        action: {
          en: 'Built modular, reusable frontend components with strict state handling for loading, validation, and settlement/invoicing flows.',
          fa: 'ساخت کامپوننت‌های ماژولار و قابل استفاده مجدد با مدیریت دقیق وضعیت‌های بارگذاری، اعتبارسنجی و جریان‌های صدور فاکتور و تسویه.',
        },
        outcome: {
          en: 'Delivered consistent, maintainable merchant UI workflows aligned with Paystar’s payment gateway and settlement product suite.',
          fa: 'ارائه‌ی رابط کاربری یکپارچه، پایدار و قابل توسعه در هماهنگی کامل با سرویس‌های پرداخت و تسویه‌ی پی‌استار.',
        },
      },
    ],
    technologies: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React / Vue Ecosystem',
      'REST APIs',
      'HTML5 & CSS3 / SCSS',
      'Responsive & RTL UI',
      'Git',
    ],
  },
  {
    id: 'independent-fullstack',
    role: {
      en: 'Independent Full-Stack & Open-Source Product Engineer',
      fa: 'توسعه‌دهنده‌ی مستقل Full-Stack و پروژه‌های محصول‌محور',
    },
    company: {
      en: 'Open-Source & Product Engineering (GitHub)',
      fa: 'توسعه محصولات مستقل و متن‌باز (GitHub)',
    },
    companyUrl: 'https://github.com/hoseinsedaqat',
    location: {
      en: 'Remote',
      fa: 'ریموت',
    },
    period: {
      en: '2023 – Present',
      fa: '۲۰۲۳ – اکنون',
    },
    employmentType: {
      en: 'Product Engineering & Open Source',
      fa: 'مهندسی محصول و متن‌باز',
    },
    domain: {
      en: 'Enterprise ERP Systems, Admin Design Systems, Browser Extensions & Mobile Apps',
      fa: 'سامانه‌های ERP، پنل‌های مدیریتی سازمانی، افزونه‌های مرورگر و اپلیکیشن موبایل',
    },
    summary: {
      en: 'Expanding from frontend specialization into end-to-end full-stack engineering by designing, testing, and shipping complete multi-module web applications, developer tools, and mobile software.',
      fa: 'گسترش مسیر حرفه‌ای از تمرکز فرانت‌اند به مهندسی Full-Stack از طریق طراحی معماری، تست‌نویسی و انتشار سامانه‌های چندماژوله، ابزارهای توسعه‌دهندگان و اپلیکیشن موبایل.',
    },
    responsibilities: {
      en: [
        'Architected Rahkar ERP from scratch with 16 operational/financial modules, 78 Node.js API endpoints, and dual JSON/PostgreSQL persistence.',
        'Engineered NovaAdmin (206 generated pages, 10 specialized dashboards, native CSS logical RTL/LTR, and automated DOM QA scripts).',
        'Developed and published Tishra Analyzer on Mozilla Firefox Add-ons using React 19 and Manifest V3.',
        'Built Kalamesaz v2.0 (offline Persian Android puzzle game in React Native 0.87 & TypeScript) and Next.js 15 dashboards (CargoCraft, Datoos).',
      ],
      fa: [
        'معماری و پیاده‌سازی کامل Rahkar ERP با ۱۶ ماژول عملیاتی و مالی، ۷۸ مسیر API در Node.js و پشتیبانی از PostgreSQL و فایل JSON.',
        'مهندسی سیستم مدیریت NovaAdmin شامل ۲۰۶ صفحه، ۱۰ داشبورد تخصصی، چیدمان دوجهته بومی و اسکریپت‌های تست کیفیت خودکار.',
        'توسعه و انتشار رسمی افزونه‌ی Tishra Analyzer در مخزن Firefox Add-ons با React 19 و Manifest V3.',
        'ساخت بازی اندرویدی کلمه‌ساز (React Native 0.87 و TypeScript) و داشبوردهای مبتنی بر Next.js 15 (CargoCraft و Datoos).',
      ],
    },
    achievements: [
      {
        problem: {
          en: 'Operational modules in small-business software often drift out of sync with accounting ledgers when built without a unified domain core.',
          fa: 'در نرم‌افزارهای کسب‌وکار، نبود هسته‌ی حسابداری یکپارچه باعث ناهماهنگی بین عملیات فروش/انبار/حقوق و گزارش‌های مالی می‌شود.',
        },
        action: {
          en: 'Implemented 10 isolated server-side TypeScript engines in Rahkar ERP with automated journal posting, 31 PostgreSQL tables, 29 Vitest unit tests, and E2E scenarios.',
          fa: 'پیاده‌سازی ۱۰ موتور محاسباتی مستقل TypeScript در Rahkar ERP با صدور خودکار سند حسابداری، ۳۱ جدول PostgreSQL و پوشش تست واحد و E2E.',
        },
        outcome: {
          en: 'Shipped a self-hostable ERP plus a zero-backend live browser demo (`rahkar-erp.netlify.app`) built from the same codebase.',
          fa: 'ارائه‌ی سامانه‌ی ERP قابل نصب روی سرور شخصی به‌همراه دموی زنده‌ی بدون سرور از یک کدبیس واحد.',
        },
      },
      {
        problem: {
          en: 'Web developers needed a fast way to inspect SEO health, SERP previews, and security headers without leaking page data to external servers.',
          fa: 'نیاز توسعه‌دهندگان به ابزار سریع بررسی سئو و امنیت صفحه بدون ارسال اطلاعات سایت به سرویس‌های بیرونی.',
        },
        action: {
          en: 'Built Tishra Analyzer with React 19 and Manifest V3 executing 100% locally in the browser, and documented its architecture on DEV Community & Medium.',
          fa: 'ساخت افزونه‌ی Tishra Analyzer با اجرای صددرصد محلی در مرورگر و انتشار مستندات فنی ساخت آن در DEV و Medium.',
        },
        outcome: {
          en: 'Publicly listed and downloadable on the official Mozilla Firefox Add-ons store.',
          fa: 'انتشار رسمی و در دسترس عموم در فروشگاه افزونه‌های مرورگر فایرفاکس.',
        },
      },
    ],
    technologies: [
      'TypeScript',
      'Next.js 15',
      'React 19',
      'Node.js',
      'PostgreSQL',
      'Vue 3 & Pinia',
      'React Native',
      'Tailwind CSS & SCSS',
      'Vitest & Jest',
      'Docker',
    ],
  },
  {
    id: 'national-publishing',
    role: {
      en: 'Front-End Developer',
      fa: 'توسعه‌دهنده‌ی فرانت‌اند (Front-End Developer)',
    },
    company: {
      en: 'National Publishing and Advertising',
      fa: 'نشر و تبلیغات ملی (National Publishing and Advertising)',
    },
    location: {
      en: 'Iran',
      fa: 'ایران',
    },
    period: {
      en: '2022',
      fa: '۲۰۲۲',
    },
    employmentType: {
      en: 'Front-End Development',
      fa: 'توسعه فرانت‌اند',
    },
    domain: {
      en: 'Web Publishing, Digital Media & Responsive Client Interfaces',
      fa: 'وب‌سایت‌های محتوایی، رسانه دیجیتال و رابط‌های کاربری واکنش‌گرا',
    },
    summary: {
      en: 'Worked as a Front-End Developer delivering responsive web pages, Persian RTL layouts, and interactive client-side components.',
      fa: 'فعالیت به‌عنوان توسعه‌دهنده‌ی فرانت‌اند در زمینه پیاده‌سازی صفحات وب واکنش‌گرا، چیدمان‌های راست‌چین استاندارد و اجزای تعاملی سمت کاربر.',
    },
    responsibilities: {
      en: [
        'Translated visual layouts into clean, semantic HTML5, CSS3/SCSS, and JavaScript/Vue interfaces.',
        'Optimized page structure for mobile responsiveness, RTL readability, and fast browser rendering.',
      ],
      fa: [
        'تبدیل طرح‌های بصری به کدهای معنایی HTML5، CSS3/SCSS و کامپوننت‌های تعاملی جاوااسکریپت.',
        'بهینه‌سازی نمایش در موبایل، خوانایی تایپوگرافی فارسی و سرعت بارگذاری صفحات.',
      ],
    },
    achievements: [
      {
        problem: {
          en: 'Content-heavy Persian pages required consistent visual hierarchy across desktop and mobile viewports.',
          fa: 'صفحات محتوامحور فارسی نیازمند حفظ سلسله‌مراتب بصری و خوانایی در ابعاد مختلف نمایشگر بودند.',
        },
        action: {
          en: 'Standardized reusable layout rules, responsive grids, and RTL-compatible styling patterns.',
          fa: 'استانداردسازی گریدهای واکنش‌گرا و الگوهای استایل‌دهی سازگار با ساختار راست‌به‌چپ.',
        },
        outcome: {
          en: 'Improved UI consistency and reduced layout regressions across device sizes.',
          fa: 'افزایش یکپارچگی رابط کاربری و کاهش به‌هم‌ریختگی چیدمان در نمایشگرهای موبایل و دسکتاپ.',
        },
      },
    ],
    technologies: ['HTML5', 'CSS3 / SCSS', 'JavaScript', 'Vue.js', 'Bootstrap', 'Git'],
  },
  {
    id: 'freelance',
    role: {
      en: 'Freelance Front-End Developer',
      fa: 'توسعه‌دهنده‌ی فرانت‌اند (فریلنسر)',
    },
    company: {
      en: 'Freelance / Self-Employed',
      fa: 'فریلنسینگ و پروژه‌های مستقل',
    },
    location: {
      en: 'Iran',
      fa: 'ایران',
    },
    period: {
      en: '2020 – 2021',
      fa: '۲۰۲۰ – ۲۰۲۱',
    },
    employmentType: {
      en: 'Freelance',
      fa: 'پروژه‌ای / فریلنس',
    },
    domain: {
      en: 'Custom Business Websites, RTL Themes, and Single-Page Web Applications',
      fa: 'وب‌سایت‌های شرکتی، قالب‌های راست‌چین فارسی و وب‌اپلیکیشن‌های تک‌صفحه‌ای',
    },
    summary: {
      en: 'Delivered custom static and SPA web interfaces for clients and independent web projects while building foundational expertise in Vue.js, React, JavaScript, and Persian RTL theming.',
      fa: 'طراحی و اجرای وب‌سایت‌های ایستا و تک‌صفحه‌ای (SPA) و قالب‌های راست‌چین فارسی هم‌زمان با تعمیق مهارت در JavaScript، Vue.js و React.',
    },
    responsibilities: {
      en: [
        'Built responsive corporate websites (e.g., architecture & studio showcases), Persian RTL themes, and progressive web app prototypes.',
        'Handled end-to-end frontend delivery from layout implementation to static hosting on GitHub Pages and Netlify.',
      ],
      fa: [
        'پیاده‌سازی وب‌سایت‌های معرفی کسب‌وکار (مانند حوزه‌ی معماری و استودیو)، قالب‌های فارسی RTL و پروتوتایپ‌های PWA.',
        'تحویل کامل بخش فرانت‌اند از کدنویسی رابط تا استقرار روی GitHub Pages و Netlify.',
      ],
    },
    achievements: [
      {
        problem: {
          en: 'Clients and Persian web users needed fast-loading, mobile-friendly RTL websites without heavy CMS overhead.',
          fa: 'نیاز به وب‌سایت‌های سبک، سریع و راست‌چین بدون سربار سیستم‌های مدیریت محتوای سنگین.',
        },
        action: {
          en: 'Crafted clean HTML/SCSS and Vue.js interfaces with lightweight assets and responsive breakpoints.',
          fa: 'توسعه‌ی رابط‌های بهینه با HTML/SCSS و Vue.js همراه با ساختار واکنش‌گرا.',
        },
        outcome: {
          en: 'Shipped multiple public web templates and applications—including Architecture-Website (23 GitHub stars) and PWA utilities.',
          fa: 'انتشار چندین قالب و وب‌اپلیکیشن عمومی از جمله پروژه‌ی Architecture-Website (با ۲۳ ستاره در گیت‌هاب).',
        },
      },
    ],
    technologies: ['JavaScript', 'Vue.js', 'HTML5', 'SCSS / CSS3', 'Bootstrap', 'PWA'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: {
      en: 'Frontend Engineering',
      fa: 'مهندسی فرانت‌اند',
    },
    description: {
      en: 'Component architecture, SSR/SPA routing, state management, and accessible bilingual design systems.',
      fa: 'معماری کامپوننت، مسیریابی SSR و SPA، مدیریت وضعیت و سیستم‌های طراحی دوزبانه و دسترس‌پذیر.',
    },
    skills: [
      {
        name: 'React 18 / 19',
        context: {
          en: 'Component systems, hooks, data dashboards, and Manifest V3 browser extensions.',
          fa: 'توسعه کامپوننت‌ها، هوک‌ها، داشبوردهای تحلیلی و افزونه مرورگر.',
        },
        evidenceSlugs: ['cargocraft-erp', 'tishra-analyzer', 'datoos-crypto-tracker', 'wavezon'],
      },
      {
        name: 'Next.js (App Router)',
        context: {
          en: 'Server/Client component boundaries, route handlers, SEO metadata, and multi-module layouts.',
          fa: 'معماری App Router، تفکیک Server/Client، مسیرهای API و بهینه‌سازی سئو.',
        },
        evidenceSlugs: ['cargocraft-erp', 'datoos-crypto-tracker', 'neweet'],
      },
      {
        name: 'TypeScript',
        context: {
          en: 'Strict domain modeling, API contracts, calculation engines, and typed React/Vue components.',
          fa: 'مدل‌سازی دقیق دامنه، قراردادهای API، موتورهای محاسباتی و کامپوننت‌های تایپ‌شده.',
        },
        evidenceSlugs: ['rahkar-erp', 'kalamesaz', 'cargocraft-erp', 'wasapp'],
      },
      {
        name: 'Vue 3, Nuxt & Pinia / Vuex',
        context: {
          en: 'Modular state stores, persisted client workspaces, `vue-tsc` type checking, and SPA routing.',
          fa: 'مدیریت وضعیت ماژولار با Pinia و Vuex، بررسی نوع `vue-tsc` و اپلیکیشن‌های تک‌صفحه‌ای.',
        },
        evidenceSlugs: ['echmail', 'wasapp', 'echgram', 'echshopy'],
      },
      {
        name: 'Tailwind CSS, SCSS & Design Tokens',
        context: {
          en: 'CSS custom properties, native logical RTL/LTR layouts, dark/light theming, and responsive grids.',
          fa: 'سیستم توکن طراحی، ویژگی‌های منطقی CSS برای RTL/LTR بومی و تم تاریک و روشن.',
        },
        evidenceSlugs: ['nova-admin', 'tishra-analyzer', 'cargocraft-erp', 'echmail'],
      },
      {
        name: 'Data Visualization (SVG, Recharts, ApexCharts, Leaflet)',
        context: {
          en: 'Custom zero-dependency SVG charts as well as interactive financial & geospatial dashboards.',
          fa: 'نمودارهای SVG دست‌نویس بدون کتابخانه و مصورسازی تعاملی مالی و مکانی.',
        },
        evidenceSlugs: ['rahkar-erp', 'cargocraft-erp', 'nova-admin'],
      },
      {
        name: 'React Native & Cross-Platform (PWA, Electron)',
        context: {
          en: 'Gesture-driven Android mobile UI, offline Service Workers, and desktop Electron builds.',
          fa: 'رابط لمسی موبایل اندروید با React Native، وب‌اپلیکیشن پیش‌رونده (PWA) و خروجی Electron.',
        },
        evidenceSlugs: ['kalamesaz', 'rahkar-erp', 'echgram'],
      },
    ],
  },
  {
    id: 'backend',
    title: {
      en: 'Backend & API Development',
      fa: 'بک‌اند و توسعه‌ی API',
    },
    description: {
      en: 'Server-side TypeScript services, authentication/authorization, and business-rule engines.',
      fa: 'توسعه‌ی سرویس‌های سمت سرور با TypeScript، امنیت و احراز هویت، و موتورهای منطق کسب‌وکار.',
    },
    skills: [
      {
        name: 'Node.js & REST API Design',
        context: {
          en: '78 structured API endpoints in Rahkar ERP using native `node:http` & `tsx`, plus Express/MEVN experience.',
          fa: 'طراحی و پیاده‌سازی ۷۸ مسیر REST API در Rahkar ERP با Node.js و تجربه‌ی کار با Express.',
        },
        evidenceSlugs: ['rahkar-erp'],
      },
      {
        name: 'Authentication, JWT & RBAC Security',
        context: {
          en: 'HS256 JWT with refresh-token rotation, `scrypt` hashing, 5-role RBAC permissions, rate limiting, and audit logs.',
          fa: 'احراز هویت JWT با چرخش توکن، هش `scrypt`، کنترل دسترسی مبتنی بر نقش (RBAC) و ثبت وقایع حسابرسی.',
        },
        evidenceSlugs: ['rahkar-erp'],
      },
      {
        name: 'Domain & Financial Calculation Engines',
        context: {
          en: 'Double-entry accounting, FIFO/WAC inventory costing, BOM manufacturing, depreciation, and payroll formulas.',
          fa: 'موتورهای حسابداری دوطرفه، ارزش‌گذاری انبار FIFO/WAC، بهای تمام‌شده تولید و محاسبات حقوق.',
        },
        evidenceSlugs: ['rahkar-erp'],
      },
      {
        name: 'Python Automation & Bot Integrations',
        context: {
          en: 'Telegram bot services integrating external weather & tide APIs with proxy and deployment configuration.',
          fa: 'ساخت ربات و اسکریپت‌های پایتون متصل به وب‌سرویس‌های بیرونی (مانند KhamirSportApp).',
        },
      },
    ],
  },
  {
    id: 'databases',
    title: {
      en: 'Databases & Client Persistence',
      fa: 'پایگاه داده و ذخیره‌سازی داده',
    },
    description: {
      en: 'Relational schema modeling alongside resilient offline and browser-side storage layers.',
      fa: 'طراحی مدل داده‌ی رابطه‌ای در کنار راهکارهای ذخیره‌سازی پایدار و آفلاین سمت کلاینت.',
    },
    skills: [
      {
        name: 'PostgreSQL & Relational Modeling',
        context: {
          en: '31 tables, 50 foreign keys, SQL migrations, multi-tenant company isolation, and accounting `CHECK` constraints.',
          fa: 'طراحی ۳۱ جدول با ۵۰ رابطه‌ی کلید خارجی، مهاجرت‌های SQL و جداسازی چندشرکتی در Rahkar ERP.',
        },
        evidenceSlugs: ['rahkar-erp'],
      },
      {
        name: 'IndexedDB (Dexie.js) & TanStack Query Caching',
        context: {
          en: 'Client-side market data caching paired with stale-while-revalidate API synchronization.',
          fa: 'کش پایدار مرورگر با IndexedDB و همگام‌سازی داده‌های سرور با React Query.',
        },
        evidenceSlugs: ['datoos-crypto-tracker'],
      },
      {
        name: 'Atomic JSON Stores, LocalStorage & AsyncStorage',
        context: {
          en: 'Zero-DB server file persistence, persisted Pinia/chat stores, and offline mobile game progression.',
          fa: 'ذخیره‌سازی اتمیک فایل در سرور، ماندگاری مکالمات و وضعیت برنامه در مرورگر و موبایل.',
        },
        evidenceSlugs: ['rahkar-erp', 'kalamesaz', 'echmail'],
      },
      {
        name: 'MongoDB & Firebase (Prior Stack Experience)',
        context: {
          en: 'Used in earlier full-stack MEVN blog/task applications and Vuex authentication prototypes.',
          fa: 'تجربه‌ی استفاده در پروژه‌های Full-Stack مبتنی بر MEVN و احراز هویت Firebase.',
        },
      },
    ],
  },
  {
    id: 'testing',
    title: {
      en: 'Software Testing & Quality Assurance',
      fa: 'تست نرم‌افزار و تضمین کیفیت',
    },
    description: {
      en: 'Protecting business logic, UI components, links, and localization from regressions.',
      fa: 'پوشش منطق محاسباتی، کامپوننت‌های رابط، لینک‌ها و ترجمه‌ها در برابر خطاهای رگرسیون.',
    },
    skills: [
      {
        name: 'Vitest & End-to-End Scenario Suites',
        context: {
          en: '29 unit tests covering financial/security engines + automated E2E scenarios with `pg-mem` and `jsdom`.',
          fa: '۲۹ تست واحد برای موتورهای مالی و امنیتی به‌همراه سناریوهای E2E در Rahkar ERP.',
        },
        evidenceSlugs: ['rahkar-erp'],
      },
      {
        name: 'Jest, React Testing Library & Vue Test Utils',
        context: {
          en: 'Unit and component interaction tests across Vue 3 stores/views, Next.js apps, and React Native logic.',
          fa: 'تست واحد و تعامل کامپوننت‌ها در استورها و نماهای Vue 3، اپلیکیشن‌های Next.js و React Native.',
        },
        evidenceSlugs: ['echmail', 'datoos-crypto-tracker', 'kalamesaz'],
      },
      {
        name: 'Automated Build-Time & DOM QA Tooling',
        context: {
          en: 'Custom Node scripts verifying broken links, i18n keys, responsive breakpoints, and game level solvability.',
          fa: 'اسکریپت‌های اختصاصی بررسی لینک‌ها، کلیدهای ترجمه، واکنش‌گرایی و اعتبارسنجی داده‌های مرحله‌ها.',
        },
        evidenceSlugs: ['nova-admin', 'kalamesaz'],
      },
    ],
  },
  {
    id: 'tools',
    title: {
      en: 'Tools, Build Systems & Workflow',
      fa: 'ابزارها، بیلد و گردش کار مهندسی',
    },
    description: {
      en: 'Modern frontend/full-stack build pipelines, containerization, and deployment.',
      fa: 'ابزارهای ساخت مدرن، کانتینرسازی، کنترل نسخه و استقرار مستمر.',
    },
    skills: [
      {
        name: 'Vite, Webpack & Next.js Turbopack',
        context: {
          en: 'Fast production bundling, multi-page static generation, and browser extension packaging.',
          fa: 'باندلینگ بهینه، تولید صفحات ایستا و بسته‌بندی افزونه‌های مرورگر.',
        },
        evidenceSlugs: ['rahkar-erp', 'nova-admin', 'tishra-analyzer'],
      },
      {
        name: 'Docker, Git, GitHub, Vercel & Netlify',
        context: {
          en: 'Multi-stage `Dockerfile` + `docker-compose`, CI/CD previews, and production static/serverless deployments.',
          fa: 'داکرایز چندمرحله‌ای با HEALTHCHECK، مدیریت مخازن گیت و استقرار روی Vercel و Netlify.',
        },
        evidenceSlugs: ['rahkar-erp', 'cargocraft-erp'],
      },
      {
        name: 'Technical SEO, Web Security & Accessibility',
        context: {
          en: 'SERP metadata, OpenGraph, CSP/SSL headers, semantic HTML, keyboard navigation, and `prefers-reduced-motion`.',
          fa: 'بهینه‌سازی متاتگ‌ها و OpenGraph، هدرهای امنیتی CSP/SSL، دسترس‌پذیری کیبورد و کاهش حرکت.',
        },
        evidenceSlugs: ['tishra-analyzer', 'nova-admin'],
      },
    ],
  },
  {
    id: 'ai',
    title: {
      en: 'AI-Assisted Software Engineering',
      fa: 'مهندسی نرم‌افزار به کمک هوش مصنوعی',
    },
    description: {
      en: 'Practical, transparent use of AI coding assistants and conversational UX patterns where documented.',
      fa: 'بهره‌گیری عملی، هدفمند و شفاف از ابزارهای هوش مصنوعی در چرخه‌ی توسعه و طراحی رابط‌های گفت‌وگومحور.',
    },
    skills: [
      {
        name: 'AI-Assisted Prototyping, Refactoring & QA',
        context: {
          en: 'Using tools like GitHub Copilot and Gemini to accelerate UI scaffolding, edge-case test generation, and bilingual docs while verifying every architectural decision in code.',
          fa: 'استفاده از ابزارهایی مانند GitHub Copilot و Gemini برای تسریع نمونه‌سازی رابط، نوشتن تست‌ها و مستندسازی دوزبانه با بازبینی دقیق مهندسی.',
        },
        evidenceSlugs: ['tishra-analyzer', 'cargocraft-erp'],
      },
      {
        name: 'Conversational UI & Server-Side LLM Architecture',
        context: {
          en: 'Designing ChatGPT-grade conversational interfaces backed by deterministic knowledge bases and secure server-only API routes.',
          fa: 'طراحی رابط‌های کاربری گفت‌وگومحور متصل به پایگاه دانش ساختاریافته و مسیرهای امن سمت سرور بدون افشای کلید API.',
        },
      },
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    id: 'usb-bachelor',
    degree: {
      en: "Bachelor's Degree",
      fa: 'مدرک کارشناسی (Bachelor’s Degree)',
    },
    institution: {
      en: 'University of Sistan and Baluchestan',
      fa: 'دانشگاه سیستان و بلوچستان',
    },
    location: {
      en: 'Iran',
      fa: 'ایران',
    },
    note: {
      en: 'Academic foundation complemented by continuous hands-on software engineering across web, financial systems, and open-source product development.',
      fa: 'پیشینه‌ی دانشگاهی همراه با یادگیری مستمر و اجرای عملی پروژه‌های مهندسی نرم‌افزار، سیستم‌های مالی و محصولات متن‌باز.',
    },
  },
];

export const publications: PublicationItem[] = [
  {
    id: 'tishra-article',
    title: 'Building Tishra Analyzer: How I Created a Privacy-First SEO & Security Extension',
    platform: 'DEV Community & Medium',
    date: 'Feb 2026',
    url: 'https://dev.to/hoseinsedaqat/building-tishra-analyzer-how-i-created-a-privacy-first-seo-security-extension-16j3',
    summary: {
      en: 'Technical deep-dive into building a 100% local Manifest V3 browser extension with React and Tailwind CSS for instant SEO scoring and security header audits.',
      fa: 'بررسی فنی طراحی و ساخت افزونه‌ی مرورگر Manifest V3 با React و اجرای کاملاً محلی برای امتیازدهی سئو و ممیزی امنیتی.',
    },
    tags: ['React', 'Manifest V3', 'SEO', 'Open Source'],
  },
  {
    id: 'developer-efficiency-article',
    title: 'How Can We Be More Efficient as Developers',
    platform: 'DEV Community & Medium',
    date: 'Aug 2025',
    url: 'https://dev.to/hoseinsedaqat/how-can-we-be-more-efficient-as-developers-51he',
    summary: {
      en: 'Practical reflections on sustainable engineering focus, preventing developer burnout, structured work sessions, and long-term consistency.',
      fa: 'نگاهی کاربردی به حفظ تمرکز مهندسی، پیشگیری از فرسودگی شغلی توسعه‌دهندگان و استمرار در یادگیری.',
    },
    tags: ['Productivity', 'Software Engineering', 'Career'],
  },
];

export const certificationNote: CertificationNote = {
  title: {
    en: 'Verified Credentials & Coursework on LinkedIn',
    fa: 'گواهینامه‌ها و مدارک تکمیلی در لینکدین',
  },
  description: {
    en: 'To keep this portfolio strictly factual and free of unverified credential IDs, up-to-date licenses, course certificates, and endorsements can be reviewed directly on my LinkedIn profile.',
    fa: 'در راستای حفظ صداقت محتوایی و پرهیز از درج شناسه‌های تاییدنشده، فهرست به‌روز گواهینامه‌های آموزشی و مهارت‌های تاییدشده مستقیماً در پروفایل لینکدین من قابل مشاهده است.',
  },
  verificationUrl: 'https://www.linkedin.com/in/hoseinsedaqat/',
};

export const externalLinks: ExternalLinkItem[] = [
  {
    id: 'github',
    label: { en: 'GitHub', fa: 'گیت‌هاب (GitHub)' },
    url: 'https://github.com/hoseinsedaqat',
    handle: '@hoseinsedaqat',
    category: 'primary',
    description: {
      en: '45 public repositories including Rahkar ERP, NovaAdmin, CargoCraft, Tishra Analyzer, and Kalamesaz.',
      fa: '۴۵ مخزن عمومی شامل Rahkar ERP، NovaAdmin، CargoCraft، Tishra Analyzer و کلمه‌ساز.',
    },
  },
  {
    id: 'linkedin',
    label: { en: 'LinkedIn', fa: 'لینکدین (LinkedIn)' },
    url: 'https://www.linkedin.com/in/hoseinsedaqat/',
    handle: 'in/hoseinsedaqat',
    category: 'primary',
    description: {
      en: 'Professional network, employment timeline, recommendations, and direct recruiter messaging.',
      fa: 'شبکه‌ی حرفه‌ای، سوابق شغلی، گواهینامه‌ها و ارتباط مستقیم کاری.',
    },
  },
  {
    id: 'stackoverflow',
    label: { en: 'Stack Overflow', fa: 'استک اورفلو (Stack Overflow)' },
    url: 'https://stackoverflow.com/users/14983011/hosein-sedaqat',
    handle: '57k+ reached',
    category: 'community',
    description: {
      en: 'Member for 5+ years contributing answers around Node.js, Express, React, and SSL.',
      fa: 'بیش از ۵ سال عضویت با بیش از ۵۷ هزار بازدید از پاسخ‌های فنی در حوزه Node.js، Express و React.',
    },
  },
  {
    id: 'devto',
    label: { en: 'DEV Community', fa: 'جامعه توسعه‌دهندگان DEV' },
    url: 'https://dev.to/hoseinsedaqat',
    handle: '@hoseinsedaqat',
    category: 'writing',
    description: {
      en: 'Four-Year Club member sharing articles on browser extension engineering and developer workflow.',
      fa: 'انتشار مقالات فنی درباره ساخت افزونه مرورگر و بهره‌وری مهندسی نرم‌افزار.',
    },
  },
  {
    id: 'medium',
    label: { en: 'Medium', fa: 'مدیوم (Medium)' },
    url: 'https://hoseinsedaqat.medium.com/',
    handle: 'hoseinsedaqat.medium.com',
    category: 'writing',
    description: {
      en: 'Personal blog and software development essays.',
      fa: 'وبلاگ شخصی و یادداشت‌های توسعه نرم‌افزار.',
    },
  },
];
