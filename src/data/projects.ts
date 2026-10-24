import type { GitHubRepoSummary, ProjectItem } from '@/types/portfolio';

export const pinnedGitHubRepoNames: string[] = [
  "RahkarERP",
  "EchShopy",
  "Wavezon",
  "Neweet",
  "EchGram",
  "EchMail"
];

export const featuredProjectSlugs: string[] = [
  'rahkar-erp',
  'echshopy',
  'wavezon',
  'neweet',
  'echgram',
  'echmail',
];

export const curatedProjects: ProjectItem[] = [
  {
    "slug": "rahkar-erp",
    "name": {
      "en": "Rahkar ERP",
      "fa": "راهکار (Rahkar ERP)"
    },
    "tagline": {
      "en": "Integrated Persian RTL Enterprise Resource Planning platform with 16 operational & financial modules",
      "fa": "سامانه‌ی یکپارچه‌ی برنامه‌ریزی منابع سازمان (ERP) فارسی و راست‌چین با ۱۶ ماژول عملیاتی و مالی"
    },
    "summary": {
      "en": "An open-source, self-hostable ERP system engineered around a shared double-entry accounting core, connecting sales, procurement, inventory, manufacturing, payroll, treasury, and BI reporting.",
      "fa": "یک سامانه‌ی ERP متن‌باز و قابل میزبانی محلی با هسته‌ی مشترک حسابداری دوطرفه که فروش، خرید، انبار، تولید، حقوق و دستمزد، خزانه‌داری و گزارش‌گیری مدیریتی را به هم متصل می‌کند."
    },
    "problem": {
      "en": "Small businesses often rely on disconnected spreadsheets because commercial ERP licenses are expensive and complex, while industrial engineering students rarely get hands-on access to real ERP calculation engines.",
      "fa": "کسب‌وکارهای کوچک به‌دلیل هزینه‌ی بالای لایسنس نرم‌افزارهای سازمانی اغلب به فایل‌های جزیره‌ای اکسل وابسته می‌مانند و دانشجویان مهندسی صنایع نیز کم‌تر فرصت کار عملی با موتورهای محاسباتی واقعی ERP را دارند."
    },
    "audience": {
      "en": "Small and medium-sized businesses (retail, workshops, service firms, contractors) needing zero-license operational control, and Industrial Engineering / MIS learners studying real-world domain formulas.",
      "fa": "کسب‌وکارهای کوچک و متوسط (فروشگاهی، کارگاهی، خدماتی و پیمانکاری) نیازمند مدیریت یکپارچه بدون هزینه لایسنس، و دانشجویان مهندسی صنایع و سیستم‌های اطلاعاتی."
    },
    "businessLogic": {
      "en": "Every operational event—sales invoice, purchase order, warehouse receipt, production run, asset depreciation, or monthly payroll—automatically posts balanced double-entry journal lines into the General Ledger so trial balances, balance sheets, P&L statements, and executive KPIs never drift out of sync.",
      "fa": "هر رویداد عملیاتی (فاکتور فروش، سفارش خرید، رسید انبار، سفارش تولید، استهلاک دارایی یا فیش حقوقی) به‌صورت خودکار سند حسابداری متوازن صادر می‌کند تا دفتر کل، تراز آزمایشی، ترازنامه، سود و زیان و شاخص‌های داشبورد همیشه هم‌خوان بمانند."
    },
    "architecture": {
      "en": [
        "Frameworkless SPA frontend in TypeScript 5.9 + Vite 7 (~336 KB bundle / ~87 KB gzip) with custom hand-crafted SVG charts, bundled Vazirmatn font, and offline-capable PWA Service Worker.",
        "Zero-framework Node.js HTTP server (`node:http` + `tsx`) exposing 78 REST API routes across 27 functional groups with rate limiting and security headers.",
        "10 isolated server-side domain & calculation engines (`accounting`, `payroll`, `assets`, `manufacturing`, `operations`, `budget`, `report`, `tax-gateway`, `workflow`, `auth`).",
        "Dual persistence layer: zero-setup atomic JSON file store (`.data/store.json`) by default, plus optional PostgreSQL adapter with 31 relational tables and 50 foreign-key constraints.",
        "Security & multi-tenancy: HS256 JWT with refresh-token rotation, `scrypt` password hashing, 5-role RBAC, server-enforced company isolation, and immutable before/after audit logs."
      ],
      "fa": [
        "فرانت‌اند تک‌صفحه‌ای (SPA) با TypeScript 5.9 و Vite 7 بدون وابستگی به فریم‌ورک (~۳۳۶ کیلوبایت / ~۸۷ کیلوبایت فشرده) همراه با نمودارهای SVG دست‌نویس، فونت وزیرمتن داخلی و PWA آفلاین.",
        "سرور Node.js مبتنی بر ماژول بومی `node:http` و `tsx` با ۷۸ مسیر API در ۲۷ گروه، محدودسازی نرخ درخواست و هدرهای امنیتی.",
        "۱۰ موتور محاسباتی و دامنه‌ای مستقل در سمت سرور (حسابداری، حقوق و دستمزد، دارایی ثابت، تولید و BOM، عملیات انبار FIFO/WAC، بودجه، گزارش‌ساز، مالیات، گردش کار و احراز هویت).",
        "لایه‌ی ذخیره‌سازی دوگانه: فایل JSON با نوشتن اتمیک به‌صورت پیش‌فرض، به‌همراه درگاه اختیاری PostgreSQL شامل ۳۱ جدول و ۵۰ رابطه‌ی کلید خارجی.",
        "امنیت و چندشرکتی واقعی: توکن JWT با چرخش Refresh Token، هش `scrypt`، کنترل دسترسی مبتنی بر نقش (RBAC با ۵ نقش)، جداسازی داده‌ی شرکت‌ها در سمت سرور و لاگ حسابرسی."
      ]
    },
    "features": {
      "en": [
        "16 integrated modules: Identity, Organization, Workflow, Integration, Accounting, Treasury, Sales, Purchasing, Inventory, Payroll, HR, Fixed Assets, Manufacturing, Budget, CRM, and BI Reporting.",
        "FIFO and Weighted Average Cost (WAC) inventory valuation plus Bill of Materials (BOM) production costing with scrap & variance tracking.",
        "Iranian labor & tax law compliance: progressive payroll tax, 7%/23% social insurance, severance/bonus reserves, VAT reporting, and electronic invoice queue.",
        "5-step company onboarding wizard with 4 industry chart-of-accounts templates, UTF-8 BOM CSV/Excel import-export, print/PDF vouchers, and automated backups.",
        "Browser-only serverless demo build (`npm run build:demo`) persisted in `localStorage` so reviewers can test all roles (`admin`, `hesabdari`, `foroosh`, `anbar`) immediately."
      ],
      "fa": [
        "۱۶ ماژول یکپارچه شامل هویت و دسترسی، سازمان، گردش کار، یکپارچه‌سازی، مالی و حسابداری، خزانه‌داری، فروش، خرید، انبار، حقوق و دستمزد، منابع انسانی، دارایی ثابت، تولید، بودجه، CRM و گزارش‌گیری BI.",
        "ارزش‌گذاری موجودی انبار به روش‌های FIFO و میانگین موزون (WAC) و محاسبه‌ی بهای تمام‌شده‌ی تولید بر پایه‌ی BOM، ضایعات و انحراف از استاندارد.",
        "انطباق با قوانین کار و مالیات ایران: مالیات پلکانی حقوق، بیمه سهم کارمند و کارفرما (۷٪ و ۲۳٪)، ذخیره عیدی و سنوات، ارزش‌افزوده و صف صورت‌حساب الکترونیکی.",
        "راهنمای راه‌اندازی ۵ گامی با ۴ قالب صنفی سرفصل حسابداری، ورود و خروج CSV/Excel سازگار با فارسی، چاپ رسمی اسناد/چک و پشتیبان‌گیری خودکار.",
        "نسخه‌ی نمایشی بدون سرور (`build:demo`) مبتنی بر `localStorage` برای آزمودن آنی نقش‌های مختلف بدون نیاز به نصب دیتابیس."
      ]
    },
    "role": {
      "en": "Sole Full-Stack Architect & Developer — designed the relational schema, implemented the 10 TypeScript calculation engines, built the Node.js API server, crafted the RTL SPA interface, and wrote unit + E2E test suites.",
      "fa": "طراح معماری و توسعه‌دهنده‌ی Full-Stack — طراحی مدل داده‌ی رابطه‌ای، پیاده‌سازی ۱۰ موتور محاسباتی TypeScript، ساخت سرور API با Node.js، توسعه رابط کاربری RTL و نوشتن تست‌های واحد و E2E."
    },
    "engineeringDecisions": {
      "en": [
        "Separated pure financial & industrial calculation engines from HTTP/UI layers so formulas (depreciation, payroll tax, BOM costing, budget pressure) are deterministically unit-tested with Vitest.",
        "Enforced `CHECK (NOT (debit > 0 AND credit > 0))` and foreign keys from operational documents to `journal_entries` at the schema level to guarantee accounting integrity.",
        "Built a dual-build pipeline (`npm start` full-stack server vs. `npm run build:demo` static client store) from a single codebase so recruiters can inspect live workflows in seconds."
      ],
      "fa": [
        "جداسازی کامل موتورهای محاسباتی مالی و صنعتی از لایه‌ی HTTP و رابط کاربری برای پوشش دقیق فرمول‌ها با ۲۹ تست واحد Vitest و سناریوهای E2E.",
        "اعمال قیدهای یکپارچگی حسابداری و کلیدهای خارجی بین اسناد عملیاتی و `journal_entries` در سطح پایگاه داده برای جلوگیری از عدم تراز.",
        "طراحی خط ساخت دوگانه (نسخه‌ی کامل سروری + نسخه‌ی نمایشی مرورگری) از یک کدبیس واحد برای بررسی سریع و بدون پیش‌نیاز."
      ]
    },
    "category": "featured-product",
    "status": "live-demo",
    "statusLabel": {
      "en": "Open Source · Live Interactive Demo",
      "fa": "متن‌باز · دارای دموی تعاملی زنده"
    },
    "technologies": [
      "TypeScript",
      "Node.js",
      "Vite",
      "PostgreSQL",
      "REST API",
      "JWT & RBAC",
      "Vitest",
      "PWA",
      "Docker"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/RahkarERP",
    "demoUrl": "https://rahkar-erp.netlify.app/",
    "demoLabel": {
      "en": "Live ERP Demo",
      "fa": "مشاهده دموی زنده"
    },
    "updatedYear": "2026",
    "highlights": [
      {
        "label": {
          "en": "Integrated Modules",
          "fa": "ماژول یکپارچه"
        },
        "value": {
          "en": "16 + Live Overview",
          "fa": "۱۶ ماژول + داشبورد زنده"
        }
      },
      {
        "label": {
          "en": "Backend Surface",
          "fa": "مسیرهای API سرور"
        },
        "value": {
          "en": "78 Routes · 10 Engines",
          "fa": "۷۸ مسیر · ۱۰ موتور محاسباتی"
        }
      },
      {
        "label": {
          "en": "Data & Quality",
          "fa": "مدل داده و تست"
        },
        "value": {
          "en": "31 PG Tables · 29 Unit + E2E Tests",
          "fa": "۳۱ جدول PG · ۲۹ تست واحد + E2E"
        }
      }
    ],
    "pinned": true,
    "imageUrl": "/projects/rahkar-erp.webp",
    "fallbackImageUrl": "/projects/rahkar-erp.webp",
    "screenshots": [
      {
        "url": "/projects/rahkar-erp.webp",
        "label": {
          "en": "Operations Overview",
          "fa": "نمای کلی عملیات"
        }
      },
      {
        "url": "/projects/rahkar-erp-accounting.webp",
        "label": {
          "en": "Accounting & Ledger",
          "fa": "مالی و ثبت سند"
        }
      },
      {
        "url": "/projects/rahkar-erp-sales.webp",
        "label": {
          "en": "Sales & Invoicing",
          "fa": "فروش و فاکتورها"
        }
      },
      {
        "url": "/projects/rahkar-erp-inventory.webp",
        "label": {
          "en": "Inventory & Logistics",
          "fa": "انبار و لجستیک"
        }
      },
      {
        "url": "/projects/rahkar-erp-landing.webp",
        "label": {
          "en": "Product Landing",
          "fa": "صفحه معرفی"
        }
      }
    ]
  },
  {
    "slug": "echshopy",
    "name": {
      "en": "EchShopy",
      "fa": "EchShopy (اِچ‌شاپی)"
    },
    "tagline": {
      "en": "Persian RTL e-commerce marketplace storefront built with Vue.js, Vuex, Vue Router, and Vuelidate",
      "fa": "فروشگاه اینترنتی فارسی و راست‌چین ساخته‌شده با Vue.js، Vuex، Vue Router و Vuelidate"
    },
    "summary": {
      "en": "A Persian RTL online marketplace prototype inspired by regional e-commerce platforms, implementing flash-deal carousels, categorized product pages, cart state, and authentication forms.",
      "fa": "پروژه‌ی فروشگاهی راست‌چین با الهام از بازارگاه‌های آنلاین فارسی، شامل بخش پیشنهادهای شگفت‌انگیز، دسته‌بندی کالاها، سبد خرید و فرم‌های ورود و ثبت‌نام."
    },
    "problem": {
      "en": "Practicing Persian RTL e-commerce typography, discount/price formatting, multi-page catalog navigation, and Vuex cart state in Vue.js.",
      "fa": "تمرین پیاده‌سازی رابط فروشگاهی راست‌چین فارسی، نمایش تخفیف‌ها و قیمت‌ها، ناوبری چندصفحه‌ای کاتالوگ و مدیریت سبد خرید با Vuex."
    },
    "audience": {
      "en": "Early Vue.js e-commerce UI study (11 GitHub stars).",
      "fa": "نمونه‌کار تمرینی تجارت الکترونیک با Vue.js (دارای ۱۱ ستاره در گیت‌هاب)."
    },
    "businessLogic": {
      "en": "Handles product category browsing (books, laptops, mobile phones, supermarket items), cart additions via Vuex, and form validation with Vuelidate.",
      "fa": "مدیریت مرور دسته‌بندی‌های کالا (کتاب، لپ‌تاپ، موبایل، سوپرمارکت)، افزودن به سبد خرید با Vuex و اعتبارسنجی فرم‌های کاربری با Vuelidate."
    },
    "architecture": {
      "en": [
        "Vue.js + Vuex centralized store + Vue Router.",
        "RTL Persian layout with custom Iranian Sans typography, Swiper sliders, and Vuelidate."
      ],
      "fa": [
        "ساختار تک‌صفحه‌ای با Vue.js، مدیریت وضعیت Vuex و Vue Router.",
        "چیدمان راست‌چین فارسی با اسلایدرهای Swiper و اعتبارسنجی Vuelidate."
      ]
    },
    "features": {
      "en": [
        "Flash-sale promotional sliders and categorized product sections.",
        "Cart page, FAQ, About, Contact, Profile, and validated Login/Signup screens."
      ],
      "fa": [
        "اسلایدر پیشنهادهای ویژه و صفحات دسته‌بندی کالاها.",
        "سبد خرید، پرسش‌های متداول، پروفایل و صفحات ورود/ثبت‌نام با اعتبارسنجی."
      ]
    },
    "role": {
      "en": "Frontend Developer — implemented RTL layouts, Vue components, and Vuex cart state.",
      "fa": "توسعه‌دهنده‌ی فرانت‌اند — پیاده‌سازی چیدمان راست‌چین، کامپوننت‌های Vue و مدیریت سبد خرید در Vuex."
    },
    "engineeringDecisions": {
      "en": [
        "Centralized shopping cart state in Vuex so product cards and detail pages update cart totals consistently."
      ],
      "fa": [
        "متمرکزسازی وضعیت سبد خرید در Vuex برای هماهنگی کارت‌های محصول و صفحه‌ی سبد خرید."
      ]
    },
    "honestNote": {
      "en": "Practice RTL marketplace UI inspired by Persian e-commerce platforms (independent learning project, not an official commercial product).",
      "fa": "پروژه‌ی تمرینی الهام‌گرفته از بازارگاه‌های تجارت الکترونیک فارسی (مستقل و آموزشی، نه محصول رسمی یک شرکت دیگر)."
    },
    "category": "ui-architecture-study",
    "isCloneOrInspired": true,
    "inspiredBy": "Persian E-Commerce Marketplaces",
    "status": "live-demo",
    "statusLabel": {
      "en": "RTL Marketplace Study · Live Demo",
      "fa": "پروژه تمرینی فروشگاهی · دموی زنده"
    },
    "technologies": [
      "Vue.js",
      "Vuex",
      "Vue Router",
      "Vuelidate",
      "Swiper",
      "RTL CSS"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/EchShopy",
    "demoUrl": "https://echshopy.netlify.app/",
    "demoLabel": {
      "en": "Live Demo",
      "fa": "مشاهده دمو"
    },
    "updatedYear": "2025",
    "pinned": true,
    "imageUrl": "https://user-images.githubusercontent.com/71232870/159702605-41996024-1144-4e6f-8c84-df07a87b72ca.jpg"
  },
  {
    "slug": "wavezon",
    "name": {
      "en": "Wavezon",
      "fa": "Wavezon"
    },
    "tagline": {
      "en": "React e-commerce marketplace storefront featuring multi-category catalogs, image galleries, and cart flows",
      "fa": "رابط فروشگاهی بازارگاه آنلاین با React، دسته‌بندی محصولات، گالری تصاویر و جریان سبد خرید"
    },
    "summary": {
      "en": "An e-commerce storefront UI built with React and React Router v6, inspired by large global marketplaces to practice catalog routing, carousels, and form validation.",
      "fa": "رابط کاربری فروشگاه آنلاین مبتنی بر React و React Router v6 با الهام از بازارگاه‌های بزرگ جهانی برای تمرین مسیریابی کاتالوگ، اسلایدرها و سبد خرید."
    },
    "problem": {
      "en": "Structuring high-density retail catalog pages—hero sliders, category grids, product detail image galleries, and order screens—cleanly in React.",
      "fa": "ساختاربندی صفحات پرتراکم فروشگاهی شامل اسلایدرهای اصلی، ردیف‌های دسته‌بندی کالا، صفحه‌ی جزئیات محصول با گالری تصویر و سبد خرید در React."
    },
    "audience": {
      "en": "Frontend practice project exploring e-commerce catalog UX in React.",
      "fa": "پروژه‌ی تمرینی فرانت‌اند با تمرکز بر تجربه کاربری فروشگاه‌های بزرگ در React."
    },
    "businessLogic": {
      "en": "Routes shoppers from promotional hero banners and category rows (`books`, `smartwatch`, `backpack`, etc.) to dynamic product detail pages with image galleries and cart actions.",
      "fa": "هدایت کاربر از بنرها و دسته‌بندی‌های متنوع کالا به صفحه‌ی جزئیات هر محصول با گالری تصویر و عملیات سبد خرید."
    },
    "architecture": {
      "en": [
        "React + React Router DOM v6 dynamic product routes (`/product/:category/:id`).",
        "Swiper carousels, `react-image-gallery` zoom/thumbnails, and `react-toastify` user feedback."
      ],
      "fa": [
        "مسیریابی پویا برای دسته‌بندی و صفحه‌ی محصول با React Router v6.",
        "استفاده از Swiper برای اسلایدرها، `react-image-gallery` برای نمایش محصول و `react-toastify` برای بازخورد تعاملی."
      ]
    },
    "features": {
      "en": [
        "Promotional hero slider and multi-category product carousels.",
        "Dynamic product detail pages, gallery viewer, and cart/order views."
      ],
      "fa": [
        "اسلایدر تبلیغاتی صفحه اول و ردیف‌های کالایی چندگانه.",
        "صفحات پویا برای بررسی جزئیات هر محصول، گالری تصاویر و بخش سفارش‌ها."
      ]
    },
    "role": {
      "en": "Frontend Developer — built React components, client routing, and responsive retail UI.",
      "fa": "توسعه‌دهنده‌ی فرانت‌اند — پیاده‌سازی کامپوننت‌های React، مسیریابی کلاینت و چیدمان فروشگاهی."
    },
    "engineeringDecisions": {
      "en": [
        "Used parameterized React Router v6 routes with UUID product identifiers for clean deep-linking into catalog items."
      ],
      "fa": [
        "طراحی مسیرهای پارامتریک در React Router v6 برای لینک‌دهی مستقیم به هر کالا."
      ]
    },
    "honestNote": {
      "en": "Practice e-commerce storefront inspired by Amazon (frontend UI & client state, not affiliated with Amazon).",
      "fa": "پروژه‌ی تمرینی فروشگاهی الهام‌گرفته از بازارگاه‌های بزرگ تجارت الکترونیک (رابط فرانت‌اند، غیرمرتبط با شرکت‌های تجاری)."
    },
    "category": "ui-architecture-study",
    "isCloneOrInspired": true,
    "inspiredBy": "Global E-Commerce Marketplaces",
    "status": "live-demo",
    "statusLabel": {
      "en": "E-Commerce UI Study · Live Demo",
      "fa": "پروژه تمرینی فروشگاهی · دموی زنده"
    },
    "technologies": [
      "React",
      "React Router v6",
      "JavaScript",
      "Swiper",
      "CRACO"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/Wavezon",
    "demoUrl": "https://wavezon.netlify.app/",
    "demoLabel": {
      "en": "Live Demo",
      "fa": "مشاهده دمو"
    },
    "updatedYear": "2025",
    "pinned": true,
    "imageUrl": "https://user-images.githubusercontent.com/66621982/233848013-3f554a29-2426-4ee4-8262-6e82a2e11300.png"
  },
  {
    "slug": "neweet",
    "name": {
      "en": "Neweet",
      "fa": "Neweet"
    },
    "tagline": {
      "en": "Social microblogging web interface built with Next.js 13 App Router, TypeScript, Redux Toolkit, and Bootstrap 5",
      "fa": "وب‌اپلیکیشن شبکه اجتماعی مبتنی بر Next.js 13 App Router، TypeScript، Redux Toolkit و Bootstrap 5"
    },
    "summary": {
      "en": "A multi-route social feed application inspired by X (Twitter), exploring Next.js App Router layouts, dynamic message routes, and Redux Toolkit state slices.",
      "fa": "پروژه‌ی شبکه اجتماعی چندمسیره با الهام از X/Twitter برای پیاده‌سازی مسیریابی App Router در Next.js، صفحات پیام پویا و مدیریت وضعیت با Redux Toolkit."
    },
    "problem": {
      "en": "Practicing shared persistent navigation shells, dynamic conversation routes (`/messages/[id]`), and interactive feed mutations in Next.js App Router with TypeScript.",
      "fa": "تمرین چیدمان‌های پایدار، مسیرهای پویا (`/messages/[id]`) و مدیریت تعاملات فید در ساختار App Router فریم‌ورک Next.js."
    },
    "audience": {
      "en": "Frontend portfolio study demonstrating Next.js + TypeScript + Redux Toolkit integration.",
      "fa": "نمونه‌کار فرانت‌اند برای نمایش ترکیب Next.js، TypeScript و Redux Toolkit."
    },
    "businessLogic": {
      "en": "Manages post creation, deletion, feed timelines, bookmarks, and direct-message views through typed Redux Toolkit state.",
      "fa": "مدیریت ایجاد و حذف پست‌ها، تایم‌لاین، نشان‌شده‌ها و بخش پیام‌ها با استفاده از Redux Toolkit تایپ‌شده."
    },
    "architecture": {
      "en": [
        "Next.js 13.4 App Router (`app/explore`, `app/notifications`, `app/messages/[id]`, `app/bookmarks`, `app/profile`) with custom `not-found.tsx`.",
        "TypeScript + Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) for client feed state.",
        "Responsive desktop & tablet sidebars styled with Bootstrap 5.3 and Bootstrap Icons."
      ],
      "fa": [
        "ساختار App Router در Next.js 13 شامل مسیرهای کاوش، اعلان‌ها، پیام‌های پویا، نشان‌شده‌ها و پروفایل.",
        "مدیریت وضعیت سمت کلاینت با TypeScript و Redux Toolkit.",
        "نوار کناری واکنش‌گرا برای دسکتاپ و موبایل با Bootstrap 5.3."
      ]
    },
    "features": {
      "en": [
        "Create and delete posts in the feed with toast notifications.",
        "Dedicated Explore, Notifications, Bookmarks, Profile, and Direct Message thread routes."
      ],
      "fa": [
        "ثبت و حذف پست در تایم‌لاین همراه با اعلان‌های وضعیت.",
        "صفحات مجزا برای کاوش، اعلان‌ها، نشان‌شده‌ها، پروفایل و گفت‌وگوهای خصوصی."
      ]
    },
    "role": {
      "en": "Frontend Developer — implemented App Router pages, Redux Toolkit store, and responsive layout components.",
      "fa": "توسعه‌دهنده‌ی فرانت‌اند — پیاده‌سازی صفحات App Router، استور Redux Toolkit و کامپوننت‌های چیدمان."
    },
    "engineeringDecisions": {
      "en": [
        "Adopted Next.js App Router nested routes early to share sidebar and trends panels without re-mounting layout chrome."
      ],
      "fa": [
        "استفاده از لایه‌های تودرتوی App Router برای حفظ پایداری سایدبار و پنل ترندها در جابه‌جایی بین مسیرها."
      ]
    },
    "honestNote": {
      "en": "Practice social UI application inspired by X / Twitter with client-side Redux state.",
      "fa": "پروژه‌ی تمرینی رابط شبکه اجتماعی با الهام از X / Twitter و مدیریت وضعیت سمت کلاینت."
    },
    "category": "ui-architecture-study",
    "isCloneOrInspired": true,
    "inspiredBy": "X (Twitter)",
    "status": "live-demo",
    "statusLabel": {
      "en": "UI Study · Live Demo",
      "fa": "پروژه تمرینی · دموی زنده"
    },
    "technologies": [
      "Next.js 13",
      "TypeScript",
      "Redux Toolkit",
      "React 18",
      "Bootstrap 5"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/Neweet",
    "demoUrl": "https://neweet.netlify.app/",
    "demoLabel": {
      "en": "Live Demo",
      "fa": "مشاهده دمو"
    },
    "updatedYear": "2023",
    "pinned": true,
    "imageUrl": "https://camo.githubusercontent.com/862e817c3b223ab6787773800ae0daca8f1ae724b5fd95a467b45e5e1598ea5d/68747470733a2f2f6769746875622d70726f64756374696f6e2d757365722d61737365742d3632313064662e73332e616d617a6f6e6177732e636f6d2f37313233323837302f3235393935313031372d33613739363264382d643837642d343564392d613338612d6537613438653330663836612e706e67"
  },
  {
    "slug": "echgram",
    "name": {
      "en": "EchGram",
      "fa": "EchGram"
    },
    "tagline": {
      "en": "Social media feed application packaged for both Web (PWA) and Desktop (Electron) using Vue.js & TypeScript",
      "fa": "اپلیکیشن شبکه اجتماعی با قابلیت اجرا روی وب (PWA) و دسکتاپ (Electron) مبتنی بر Vue.js و TypeScript"
    },
    "summary": {
      "en": "An Instagram-inspired social platform prototype exploring multi-target packaging—running both as an installable Progressive Web App and as a cross-platform Electron desktop build.",
      "fa": "پروتوتایپ شبکه اجتماعی الهام‌گرفته از Instagram با تمرکز بر خروجی چندسکویی: وب‌اپلیکیشن پیش‌رونده (PWA) و نسخه‌ی دسکتاپ با Electron."
    },
    "problem": {
      "en": "Exploring how a single Vue + TypeScript codebase can target browser, installable PWA, and Electron desktop shells while handling media carousels and feed interactions.",
      "fa": "بررسی نحوه‌ی اشتراک یک کدبیس Vue و TypeScript بین مرورگر، نسخه‌ی قابل نصب PWA و محیط دسکتاپ Electron."
    },
    "audience": {
      "en": "Cross-platform frontend engineering study.",
      "fa": "پروژه‌ی مطالعه‌ی مهندسی رابط کاربری چندسکویی."
    },
    "businessLogic": {
      "en": "Manages stories carousel, post feed interactions, profile switching, QR code generation, and form validation via Vuex and Vuelidate.",
      "fa": "مدیریت اسلایدر استوری‌ها، تعاملات پست‌ها، تولید QR Code و اعتبارسنجی فرم‌ها با Vuex و Vuelidate."
    },
    "architecture": {
      "en": [
        "Vue.js + TypeScript + Vuex + Vue Router.",
        "Electron packaging configured via `vue-cli-plugin-electron-builder` (`electron:serve` / `electron:build`).",
        "PWA manifest, icons, and service worker registration via `@vue/cli-plugin-pwa`."
      ],
      "fa": [
        "توسعه با Vue.js، TypeScript، Vuex و Vue Router.",
        "پیکربندی بیلد دسکتاپ با `vue-cli-plugin-electron-builder`.",
        "پشتیبانی کامل از آیکون‌ها، مانیفست و Service Worker برای PWA."
      ]
    },
    "features": {
      "en": [
        "Stories bar powered by Swiper, interactive post feed, suggested accounts panel, and QR sharing.",
        "Dual Web PWA + Electron desktop build setup."
      ],
      "fa": [
        "نوار استوری با Swiper، فید پست‌ها، پیشنهاد دنبال‌کردن و تولید کد QR.",
        "آماده‌سازی هم‌زمان برای وب (PWA) و دسکتاپ (Electron)."
      ]
    },
    "role": {
      "en": "Frontend Developer — implemented UI views, Vuex state, PWA manifest, and Electron builder integration.",
      "fa": "توسعه‌دهنده‌ی فرانت‌اند — پیاده‌سازی نماها، مدیریت وضعیت Vuex، تنظیمات PWA و یکپارچه‌سازی Electron."
    },
    "engineeringDecisions": {
      "en": [
        "Combined PWA service workers with Electron builder scripts to test desktop and web distribution from one repository."
      ],
      "fa": [
        "ترکیب افزونه‌ی PWA و Electron Builder برای تولید خروجی وب و دسکتاپ از یک مخزن واحد."
      ]
    },
    "honestNote": {
      "en": "Practice social media UI & cross-platform packaging project inspired by Instagram.",
      "fa": "پروژه‌ی تمرینی شبکه اجتماعی و بسته‌بندی چندسکویی با الهام از Instagram."
    },
    "category": "ui-architecture-study",
    "isCloneOrInspired": true,
    "inspiredBy": "Instagram",
    "status": "live-demo",
    "statusLabel": {
      "en": "PWA & Electron Study · Live Demo",
      "fa": "مطالعه PWA و Electron · دموی زنده"
    },
    "technologies": [
      "Vue.js",
      "TypeScript",
      "Electron",
      "PWA",
      "Vuex",
      "Swiper"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/EchGram",
    "demoUrl": "https://echgram.netlify.app/",
    "demoLabel": {
      "en": "Live Demo",
      "fa": "مشاهده دمو"
    },
    "updatedYear": "2026",
    "pinned": true,
    "imageUrl": "https://user-images.githubusercontent.com/71232870/190462623-02015263-d638-4956-9734-826caf921ee0.png"
  },
  {
    "slug": "echmail",
    "name": {
      "en": "EchMail",
      "fa": "EchMail"
    },
    "tagline": {
      "en": "Vue 3 email & productivity workspace UI study with Pinia persisted state, VeeValidate, PWA support, and Jest unit tests",
      "fa": "مطالعه‌ی مهندسی رابط کاربری کلاینت ایمیل با Vue 3، مدیریت وضعیت پایدار Pinia، قابلیت PWA و تست واحد Jest"
    },
    "summary": {
      "en": "A Gmail-inspired web mail client built to practice modular Vue 3 state management, form validation, integrated workspace tools (Contacts, Keep notes, Calendar), and unit testing.",
      "fa": "رابط کاربری کلاینت ایمیل الهام‌گرفته از Gmail برای پیاده‌سازی معماری ماژولار Vue 3، مدیریت وضعیت Pinia، اعتبارسنجی فرم‌ها، ابزارهای جانبی (مخاطبین، یادداشت، تقویم) و تست‌های واحد."
    },
    "problem": {
      "en": "Email web clients involve complex multi-pane state—inbox/sent/starred filtering, compose modals with validation, side-panel micro-apps, and responsive mobile drawers.",
      "fa": "کلاینت‌های ایمیل نیازمند مدیریت وضعیت چندبخشی پیچیده شامل صندوق ورودی، پیام‌های ستاره‌دار و ارسالی، فرم ارسال با اعتبارسنجی و پنل ابزارهای جانبی در دسکتاپ و موبایل هستند."
    },
    "audience": {
      "en": "Frontend architecture study demonstrating Vue 3 ecosystem patterns and unit testing.",
      "fa": "نمونه‌کار معماری فرانت‌اند برای نمایش تسلط بر اکوسیستم Vue 3، مدیریت وضعیت و تست‌نویسی."
    },
    "businessLogic": {
      "en": "Uses modular Pinia stores (`inbox`, `sents`, `contacts`, `keep`, `calendar`, `layout`, `setting`) with `pinia-plugin-persistedstate` so composed messages, starred threads, notes, and contacts persist across sessions.",
      "fa": "استفاده از استورهای ماژولار Pinia به‌همراه `pinia-plugin-persistedstate` برای ماندگاری ایمیل‌های ارسالی، ستاره‌دارها، مخاطبین و یادداشت‌ها در مرورگر."
    },
    "architecture": {
      "en": [
        "Vue 3 + Vue Router 4 multi-view layout with dedicated desktop three-pane shell and mobile header/drawer components.",
        "Pinia state modules persisted to browser storage + VeeValidate & Yup schema validation on message composition.",
        "Tailwind CSS + DaisyUI + modular SCSS partials for inbox density and responsive breakpoints.",
        "5 Jest + Vue Test Utils unit test suites (`actions`, `links`, `props`, `state`, `views`) plus PWA service worker registration."
      ],
      "fa": [
        "معماری چندنمایی با Vue 3 و Vue Router 4 شامل چیدمان سه‌ستونه دسکتاپ و منوی اختصاصی موبایل.",
        "مدیریت وضعیت با Pinia و ذخیره‌سازی خودکار + اعتبارسنجی فرم ارسال ایمیل با VeeValidate و Yup.",
        "استایل‌دهی ترکیبی با Tailwind CSS، DaisyUI و ماژول‌های SCSS.",
        "۵ مجموعه‌ی تست واحد با Jest و Vue Test Utils (`actions`، `links`، `props`، `state`، `views`) و پشتیبانی از PWA."
      ]
    },
    "features": {
      "en": [
        "Inbox, Starred, Sent, Message thread reader, and validated Compose workflow.",
        "Integrated Contacts manager, Keep notes list, and Calendar view inside the workspace.",
        "Installable PWA manifest and unit-tested store/component behavior."
      ],
      "fa": [
        "بخش‌های صندوق ورودی، ستاره‌دار، ارسال‌شده، مطالعه‌ی پیام و فرم نوشتن ایمیل جدید.",
        "ابزارهای داخلی مخاطبین، یادداشت‌ها (Keep) و تقویم در پنل کناری.",
        "قابلیت نصب به‌صورت PWA و پوشش تست واحد برای استور و کامپوننت‌ها."
      ]
    },
    "role": {
      "en": "Frontend Developer — designed component hierarchy, Pinia store modules, SCSS/Tailwind styling, PWA setup, and Jest unit tests.",
      "fa": "توسعه‌دهنده‌ی فرانت‌اند — پیاده‌سازی کامپوننت‌ها، ماژول‌های Pinia، استایل‌های SCSS/Tailwind، تنظیمات PWA و تست‌های واحد Jest."
    },
    "engineeringDecisions": {
      "en": [
        "Split state into 7 focused Pinia stores rather than a single monolithic store to keep actions and unit tests isolated."
      ],
      "fa": [
        "تفکیک وضعیت برنامه به ۷ استور مستقل در Pinia برای خوانایی کد و تست‌پذیری دقیق‌تر."
      ]
    },
    "honestNote": {
      "en": "UI & frontend architecture project inspired by Gmail (client-side persisted workspace, not a real SMTP/IMAP mail server).",
      "fa": "پروژه‌ی تمرینی و معماری رابط کاربری با الهام از Gmail (ذخیره‌سازی سمت کلاینت، بدون اتصال به سرور ایمیل واقعی)."
    },
    "category": "ui-architecture-study",
    "isCloneOrInspired": true,
    "inspiredBy": "Gmail",
    "status": "live-demo",
    "statusLabel": {
      "en": "UI Architecture Study · Live Demo",
      "fa": "مطالعه معماری UI · دموی زنده"
    },
    "technologies": [
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
      "DaisyUI",
      "SCSS",
      "VeeValidate",
      "Jest",
      "PWA"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/EchMail",
    "demoUrl": "https://echmail.netlify.app/",
    "demoLabel": {
      "en": "Live Demo",
      "fa": "مشاهده دمو"
    },
    "updatedYear": "2025",
    "pinned": true,
    "imageUrl": "https://camo.githubusercontent.com/e3824a60dcdf463cc760d85b3ba7400d83fa3bd3bea90e6b909d36a942e26179/68747470733a2f2f6769746875622d70726f64756374696f6e2d757365722d61737365742d3632313064662e73332e616d617a6f6e6177732e636f6d2f37313233323837302f3234323234373539362d33366436623135302d613765632d343031362d626637622d3538386434303136323864372e706e67"
  },
  {
    "slug": "cargocraft-erp",
    "name": {
      "en": "CargoCraft — ERP & Logistics Studio",
      "fa": "CargoCraft — استودیو تحلیل ERP و لجستیک"
    },
    "tagline": {
      "en": "Enterprise analytics, finance, HR, invoicing, and logistics route-mapping dashboard built with Next.js 15 & React 19",
      "fa": "داشبورد تحلیلی سازمانی برای لجستیک، مالی، منابع انسانی و صدور فاکتور با Next.js 15 و React 19"
    },
    "summary": {
      "en": "A multi-domain enterprise dashboard portfolio project showcasing Next.js 15 App Router architecture, interactive Recharts analytics, and Leaflet route visualization.",
      "fa": "پروژه‌ی داشبورد سازمانی چندماژوله با معماری App Router در Next.js 15، نمودارهای تعاملی Recharts و نمایش مسیرهای لجستیکی روی نقشه با Leaflet."
    },
    "problem": {
      "en": "Operations and finance teams need dense KPI telemetry—MRR, cohort retention, invoice collection, workforce metrics, and shipment routes—organized into clear, mobile-responsive workspaces.",
      "fa": "تیم‌های عملیات و مالی به محیطی یکپارچه و واکنش‌گرا نیاز دارند تا شاخص‌های کلیدی درآمد، نگهداشت مشتری، وضعیت فاکتورها، منابع انسانی و مسیر محموله‌ها را بدون شلوغی بصری رصد کنند."
    },
    "audience": {
      "en": "Operations managers, logistics coordinators, finance analysts, and product teams evaluating enterprise dashboard UX.",
      "fa": "مدیران عملیات، هماهنگ‌کنندگان لجستیک، تحلیل‌گران مالی و تیم‌های محصول."
    },
    "businessLogic": {
      "en": "Structures executive decision-making into dedicated domain workspaces—Executive Overview, Customer Analytics, Financial Reports, Invoicing, HR, and Logistics—with consistent KPI hierarchy and alert feeds.",
      "fa": "سازمان‌دهی داده‌های تصمیم‌گیری در فضاهای تخصصی نمای کلی مدیریتی، تحلیل مشتریان، گزارش‌های مالی، صورت‌حساب‌ها، منابع انسانی و لجستیک با سلسله‌مراتب واحد شاخص‌ها."
    },
    "architecture": {
      "en": [
        "Next.js 15 App Router with clean separation between route layouts and interactive client chart modules.",
        "React 19 + TypeScript strict typing across KPI cards, data tables, and filter controls.",
        "Interactive data visualization using Recharts (revenue trends, cohort breakdowns) and React-Leaflet (shipment route mapping).",
        "Responsive sidebar navigation with NProgress route transition feedback and Tailwind CSS design tokens."
      ],
      "fa": [
        "معماری App Router در Next.js 15 با تفکیک تمیز لایه‌ها و کامپوننت‌های تعاملی سمت کلاینت.",
        "تایپ‌اسکریپت و React 19 برای کارت‌های KPI، جداول داده و فیلترهای تحلیلی.",
        "مصورسازی تعاملی داده‌ها با Recharts و نمایش نقشه‌ی مسیرهای حمل‌ونقل با React-Leaflet.",
        "ناوبری واکنش‌گرا با نوار پیشرفت NProgress و سیستم طراحی مبتنی بر Tailwind CSS."
      ]
    },
    "features": {
      "en": [
        "Executive Overview with MRR, CLV, churn, net revenue retention, and critical alert feed.",
        "Logistics workspace with interactive Leaflet route maps and fleet status indicators.",
        "Customer Analytics, Financial Reports, Human Resources, Invoicing, Calendar, and Settings views."
      ],
      "fa": [
        "نمای کلی مدیریتی شامل روند درآمد، ارزش طول عمر مشتری، نرخ ریزش و پنل هشدارهای کلیدی.",
        "بخش لجستیک با نقشه‌ی تعاملی مسیرها (Leaflet) و وضعیت ناوگان.",
        "صفحات تحلیل مشتریان، گزارش مالی، منابع انسانی، صدور فاکتور، تقویم و تنظیمات."
      ]
    },
    "role": {
      "en": "Frontend Engineer — structured multi-route Next.js 15 workspaces, data visualizations, responsive layout, and AI-assisted UI iteration.",
      "fa": "توسعه‌دهنده‌ی فرانت‌اند — پیاده‌سازی مسیرهای Next.js 15، نمودارهای تحلیلی، چیدمان واکنش‌گرا و بهره‌گیری شفاف از ابزارهای کمکی هوش مصنوعی."
    },
    "engineeringDecisions": {
      "en": [
        "Organized each business vertical as an isolated Next.js App Router segment for clean code-splitting.",
        "Combined Recharts and Leaflet only inside client boundaries to keep navigation responsive."
      ],
      "fa": [
        "ساختاربندی هر حوزه‌ی کسب‌وکار در مسیر مستقل App Router برای تفکیک کد و نگهداری آسان.",
        "ایزوله‌سازی کتابخانه‌های نمودار و نقشه در مرزهای Client Component برای حفظ سرعت ناوبری."
      ]
    },
    "honestNote": {
      "en": "Portfolio showcase dashboard built with structured mock analytics data and AI-assisted UI tooling (documented transparently in the project).",
      "fa": "پروژه‌ی نمونه‌کار داشبورد سازمانی با داده‌های تحلیلی نمونه و استفاده شفاف از ابزارهای کمکی هوش مصنوعی در توسعه رابط."
    },
    "category": "enterprise-dashboard",
    "status": "live-demo",
    "statusLabel": {
      "en": "Portfolio Showcase · Live Demo",
      "fa": "نمونه‌کار تحلیلی · دموی زنده"
    },
    "technologies": [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Leaflet"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/cargocraft-dashboard-analysis",
    "demoUrl": "https://cargocraftdashboard.netlify.app/",
    "demoLabel": {
      "en": "Live Dashboard",
      "fa": "مشاهده داشبورد"
    },
    "updatedYear": "2026",
    "pinned": false,
    "imageUrl": "/projects/cargocraft-erp.webp",
    "fallbackImageUrl": "/projects/cargocraft-erp.webp",
    "screenshots": [
      {
        "url": "/projects/cargocraft-erp.webp",
        "label": {
          "en": "Executive Overview",
          "fa": "نمای کلی مدیریتی"
        }
      },
      {
        "url": "/projects/cargocraft-erp-revenue.webp",
        "label": {
          "en": "Revenue Performance",
          "fa": "تحلیل درآمد و فروش"
        }
      },
      {
        "url": "/projects/cargocraft-erp-logistics.webp",
        "label": {
          "en": "Logistics & Fleet",
          "fa": "لجستیک و ناوگان"
        }
      },
      {
        "url": "/projects/cargocraft-erp-invoicing.webp",
        "label": {
          "en": "Invoicing & Billing",
          "fa": "صدور فاکتور و مالی"
        }
      }
    ]
  },
  {
    "slug": "nova-admin",
    "name": {
      "en": "NovaAdmin — Multi-Purpose RTL/LTR Admin System",
      "fa": "NovaAdmin — سیستم پنل مدیریت چندزبانه RTL/LTR"
    },
    "tagline": {
      "en": "Token-driven admin system featuring 206 pages, 10 domain dashboards, native CSS logical RTL/LTR, Jalali calendar, and automated QA scripts",
      "fa": "قالب و سیستم مدیریت توکن‌محور با ۲۰۶ صفحه، ۱۰ داشبورد تخصصی، پشتیبانی بومی RTL/LTR، تقویم شمسی و ابزارهای کنترل کیفیت خودکار"
    },
    "summary": {
      "en": "A comprehensive framework-agnostic admin architecture built with Vite, SCSS design tokens, ES2022 modules, trilingual localization (FA/EN/AR), and a swappable REST service layer.",
      "fa": "معماری جامع پنل مدیریت بدون وابستگی به فریم‌ورک سنگین، ساخته‌شده با Vite، توکن‌های SCSS، ماژول‌های ES2022، پشتیبانی سه‌زبانه (فارسی/انگلیسی/عربی) و لایه‌ی سرویس REST قابل تعویض."
    },
    "problem": {
      "en": "Many admin templates break when switched to Persian RTL or Jalali dates, or hardcode mock data directly inside UI views so connecting a real backend requires rewriting pages.",
      "fa": "بسیاری از پنل‌های مدیریتی هنگام تغییر به حالت راست‌چین فارسی یا تقویم جلالی دچار شکست چیدمان می‌شوند و داده‌های آزمایشی را مستقیم داخل صفحات قرار می‌دهند."
    },
    "audience": {
      "en": "Product engineering teams building Persian, Arabic, or bilingual SaaS back-offices, CRM portals, and financial admin panels.",
      "fa": "تیم‌های فنی سازنده‌ی پنل‌های سازمانی، SaaS، سیستم‌های مالی و CRM دوزبانه یا فارسی‌محور."
    },
    "businessLogic": {
      "en": "Decouples UI controllers from data transport via `src/services/*.service.js` contracts (`mock ↔ REST API` toggle) and uses CSS logical properties across 100% of components so RTL and LTR share one stylesheet.",
      "fa": "جداسازی کامل کنترلرهای صفحه از لایه‌ی داده از طریق قرارداد سرویس (`mock ↔ API`) و استفاده از ویژگی‌های منطقی CSS برای پشتیبانی هم‌سطح RTL و LTR بدون استایل‌های تکراری."
    },
    "architecture": {
      "en": [
        "Manifest-driven build pipeline generating 206 pages, 23 built-in documentation pages, sitemap, and assets via Vite + Node build scripts.",
        "20 core ES2022 modules managing theme/palette persistence (no flash), sidebar modes, data tables, and Jalali/Gregorian date conversion.",
        "Automated internal QA suite (`qa:links`, `qa:smoke`, `qa:toggles`, `qa:i18n`, `qa:responsive`) verifying links, DOM controllers, theme/locale switches, and 320px–1920px breakpoints."
      ],
      "fa": [
        "خط تولید مبتنی بر مانیفست برای ساخت ۲۰۶ صفحه، ۲۳ مستند داخلی و نقشه سایت با Vite و اسکریپت‌های Node.js.",
        "۲۰ ماژول هسته ES2022 برای مدیریت تم و پالت بدون پرش تصویر، جدول داده پیشرفته و موتور تقویم جلالی/میلادی.",
        "مجموعه تست کنترل کیفیت خودکار (`qa:links`، `qa:smoke`، `qa:toggles`، `qa:i18n`، `qa:responsive`) برای بررسی لینک‌ها، ترجمه‌ها و واکنش‌گرایی."
      ]
    },
    "features": {
      "en": [
        "10 specialized dashboards: Analytics, E-Commerce, CRM, SaaS, Finance, Projects, HR, Support, AI Studio, and Logistics.",
        "Full data-table engine with multi-column sort, sticky columns, bulk actions, and CSV/JSON/Excel export.",
        "Theme-synchronized ApexCharts, Kanban boards (SortableJS), invoice builder, and WCAG-focused keyboard navigation."
      ],
      "fa": [
        "۱۰ داشبورد تخصصی: آنالیتیکس، فروشگاهی، CRM، SaaS، مالی، پروژه‌ها، منابع انسانی، پشتیبانی، کارگاه هوش مصنوعی و لجستیک.",
        "جدول داده‌ی کامل با جست‌وجو، فیلتر ستونی، ستون چسبان و خروجی CSV/JSON/Excel.",
        "نمودارهای ApexCharts هماهنگ با تم تاریک/روشن، برد کانبان و دسترس‌پذیری کیبورد."
      ]
    },
    "role": {
      "en": "Creator & Frontend Systems Engineer — architected the SCSS token system, RTL/LTR logical layout, service layer, page generator, and automated QA scripts.",
      "fa": "طراح سیستم و توسعه‌دهنده‌ی فرانت‌اند — طراحی سیستم توکن SCSS، چیدمان دوجهته بومی، لایه‌ی سرویس، مولد صفحات و ابزارهای کنترل کیفیت خودکار."
    },
    "engineeringDecisions": {
      "en": [
        "Used CSS logical properties (`margin-inline`, `inset-inline`, etc.) from day one, achieving zero LTR/RTL override hacks.",
        "Built automated DOM smoke & toggle tests to prevent regressions across all generated pages."
      ],
      "fa": [
        "استفاده از ویژگی‌های منطقی CSS از پایه برای حذف کامل بازنویسی‌های دستی RTL.",
        "پیاده‌سازی اسکریپت‌های تست دود (Smoke) و بررسی خودکار کلیدهای زبان و تم در تمام صفحات."
      ]
    },
    "category": "enterprise-dashboard",
    "status": "live-demo",
    "statusLabel": {
      "en": "v1.1.0 · Live Demo & Docs",
      "fa": "نسخه ۱.۱.۰ · دارای دمو و مستندات"
    },
    "technologies": [
      "JavaScript ES2022",
      "SCSS Tokens",
      "Vite",
      "HTML5",
      "Bootstrap 5.3",
      "ApexCharts",
      "Day.js Jalali"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/NovaAdminTemplate",
    "demoUrl": "https://novaadmintempalte.netlify.app/",
    "demoLabel": {
      "en": "Live Preview",
      "fa": "مشاهده پیش‌نمایش"
    },
    "updatedYear": "2026",
    "pinned": false,
    "imageUrl": "/projects/nova-admin.webp"
  },
  {
    "slug": "tishra-analyzer",
    "name": {
      "en": "Tishra Analyzer",
      "fa": "تیشرا آنالایزر (Tishra Analyzer)"
    },
    "tagline": {
      "en": "Privacy-first browser extension for instant SEO health scoring, live SERP preview, and security header auditing",
      "fa": "افزونه‌ی مرورگر حریم‌خصوصی‌محور برای ارزیابی آنی سئو، پیش‌نمایش نتایج گوگل (SERP) و ممیزی امنیتی صفحات وب"
    },
    "summary": {
      "en": "Published on Mozilla Firefox Add-ons and built with React 19, Tailwind CSS 4, Vite 7, and WebExtension Manifest V3—performing 100% client-side page audits with zero data collection.",
      "fa": "منتشرشده در مخزن رسمی افزونه‌های فایرفاکس با React 19، Tailwind CSS 4، Vite 7 و استاندارد Manifest V3؛ اجرای صددرصد محلی تحلیل‌ها در مرورگر بدون جمع‌آوری داده."
    },
    "problem": {
      "en": "Developers frequently need quick on-page SEO metadata, SERP snippet, and SSL/CSP checks during local or staging development without sending page data to paid third-party SaaS crawlers.",
      "fa": "توسعه‌دهندگان هنگام کدنویسی یا بررسی صفحات به ابزاری سریع برای کنترل متاتگ‌ها، نمایش در گوگل و هدرهای امنیتی نیاز دارند، بدون اینکه داده‌های سایت به سرویس‌های تبلیغاتی یا پولی ارسال شود."
    },
    "audience": {
      "en": "Frontend developers, technical SEO specialists, and site owners.",
      "fa": "توسعه‌دهندگان وب، متخصصان سئو فنی و مدیران وب‌سایت‌ها."
    },
    "businessLogic": {
      "en": "Extracts DOM metadata, heading hierarchy, content density, load metrics, and security indicators locally inside the active browser tab, weighting factors into an actionable 1–100 health score.",
      "fa": "استخراج متاتگ‌ها، ساختار سرتیترها، چگالی کلمات، شاخص سرعت و وضعیت SSL/CSP مستقیماً در تب فعال مرورگر و محاسبه‌ی نمره سلامت ۱ تا ۱۰۰ همراه با پیشنهاد اصلاحی."
    },
    "architecture": {
      "en": [
        "WebExtension Manifest V3 architecture ensuring compatibility across modern Firefox and Chromium browsers.",
        "React 19 + Tailwind CSS 4 + DaisyUI popup dashboard compiled with Vite 7.",
        "Zero external telemetry or backend dependency—all audit rules execute locally."
      ],
      "fa": [
        "معماری استاندارد Manifest V3 سازگار با مرورگرهای مدرن فایرفاکس و کرومیوم.",
        "رابط کاربری React 19، Tailwind CSS 4 و DaisyUI با بیلد سریع Vite 7.",
        "اجرای ۱۰۰٪ محلی موتور تحلیل در مرورگر کاربر با حفظ کامل حریم خصوصی."
      ]
    },
    "features": {
      "en": [
        "1–100 SEO Health Score with actionable remediation hints.",
        "Real-time Google SERP snippet simulator for title & meta description tuning.",
        "SSL status, CSP/security header checks, reading time, and keyword density breakdown."
      ],
      "fa": [
        "امتیازدهی هوشمند ۱ تا ۱۰۰ بر اساس استانداردهای سئو به‌همراه راهکارهای اصلاحی.",
        "شبیه‌ساز زنده‌ی نتایج جست‌وجوی گوگل (SERP Preview).",
        "بررسی گواهی SSL، هدرهای امنیتی، زمان مطالعه و چگالی کلمات کلیدی."
      ]
    },
    "role": {
      "en": "Creator & Developer — built the audit rules, Manifest V3 extension packaging, React UI, Firefox Add-on release, and published a technical write-up on DEV Community & Medium.",
      "fa": "طراح و توسعه‌دهنده — پیاده‌سازی موتور ممیزی، بسته‌بندی Manifest V3، رابط React، انتشار رسمی در Firefox Add-ons و نگارش مقاله‌ی فنی در DEV و Medium."
    },
    "engineeringDecisions": {
      "en": [
        "Designed strictly offline/local execution so developers can audit staging or localhost pages safely.",
        "Adopted Manifest V3 to remain compliant with current browser security policies."
      ],
      "fa": [
        "طراحی کاملاً محلی بدون ارسال داده به سرور خارجی برای حفظ امنیت محیط‌های داخلی و تست.",
        "پیاده‌سازی بر پایه‌ی Manifest V3 برای سازگاری بلندمدت با سیاست‌های امنیتی مرورگرها."
      ]
    },
    "category": "extension-mobile",
    "status": "published",
    "statusLabel": {
      "en": "Published on Firefox Add-ons",
      "fa": "منتشرشده در Firefox Add-ons"
    },
    "technologies": [
      "React 19",
      "Tailwind CSS 4",
      "Vite 7",
      "Manifest V3",
      "Browser Extension API"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/TishraAnalayzer",
    "demoUrl": "https://addons.mozilla.org/en-US/firefox/addon/tishra-analyzer/",
    "demoLabel": {
      "en": "Firefox Add-on Store",
      "fa": "دریافت از فایرفاکس"
    },
    "articleUrl": "https://dev.to/hoseinsedaqat/building-tishra-analyzer-how-i-created-a-privacy-first-seo-security-extension-16j3",
    "updatedYear": "2026",
    "pinned": false,
    "imageUrl": "/projects/tishra-analyzer.webp",
    "fallbackImageUrl": "/projects/tishra-analyzer.webp",
    "screenshots": [
      {
        "url": "/projects/tishra-analyzer.webp",
        "label": {
          "en": "Live Browser Audit",
          "fa": "اسکن زنده در مرورگر"
        }
      },
      {
        "url": "/projects/tishra-analyzer-bilingual.webp",
        "label": {
          "en": "EN & Persian RTL Views",
          "fa": "رابط دوزبانه فارسی و انگلیسی"
        }
      }
    ]
  },
  {
    "slug": "wasapp",
    "name": {
      "en": "Wasapp",
      "fa": "Wasapp"
    },
    "tagline": {
      "en": "Messaging web interface built with Vue 3, Vite, strict TypeScript (`vue-tsc`), Pinia, and Tailwind CSS",
      "fa": "رابط کاربری پیام‌رسان تحت وب با Vue 3، Vite، TypeScript، Pinia و Tailwind CSS"
    },
    "summary": {
      "en": "A WhatsApp Web-inspired responsive messaging interface demonstrating Vue 3 Composition/SFC TypeScript type-checking, Pinia state management, and mobile/desktop adaptive views.",
      "fa": "رابط کاربری پیام‌رسان واکنش‌گرا با الهام از WhatsApp Web برای پیاده‌سازی Vue 3 با بررسی نوع سخت‌گیرانه‌ی TypeScript (`vue-tsc`)، Pinia و نماهای تطبیقی موبایل و دسکتاپ."
    },
    "problem": {
      "en": "Adapting a split-pane desktop messenger into clean mobile views (chats, status, calls, settings) with strict `.vue` TypeScript verification.",
      "fa": "تبدیل رابط دوقسمتی پیام‌رسان دسکتاپ به نماهای بهینه‌ی موبایل (گفت‌وگوها، وضعیت، تماس‌ها و تنظیمات) با حفظ تایپ‌سیفتی کامل در فایل‌های `.vue`."
    },
    "audience": {
      "en": "Frontend UI & state architecture showcase in the Vue 3 + Vite + TypeScript stack.",
      "fa": "نمونه‌کار معماری رابط کاربری در پشته‌ی Vue 3، Vite و TypeScript."
    },
    "businessLogic": {
      "en": "Coordinates active chat selection, message history rendering, media lightbox previews, and settings panels via Pinia and Vue Router.",
      "fa": "مدیریت انتخاب گفت‌وگوی فعال، نمایش پیام‌ها، پیش‌نمایش رسانه و بخش تنظیمات با استفاده از Pinia و Vue Router."
    },
    "architecture": {
      "en": [
        "Vue 3.3 + Vite 4 + `vue-tsc` build-time type validation.",
        "Pinia state management + Vue Router 4 + Tailwind CSS & DaisyUI."
      ],
      "fa": [
        "بیلد سریع با Vite 4 و بررسی نوع کامپوننت‌های Vue 3 با `vue-tsc`.",
        "مدیریت وضعیت با Pinia، مسیریابی با Vue Router 4 و استایل‌دهی با Tailwind CSS و DaisyUI."
      ]
    },
    "features": {
      "en": [
        "Desktop split-screen chat workspace and dedicated small-screen Chats, Status, Calls, and Settings views.",
        "Image lightbox preview (`vue-easy-lightbox`) and notification feedback."
      ],
      "fa": [
        "نمای دوقسمتی در دسکتاپ و نماهای اختصاصی گفت‌وگو، وضعیت، تماس و تنظیمات در موبایل.",
        "پیش‌نمایش تصاویر به‌صورت Lightbox و اعلان‌های تعاملی."
      ]
    },
    "role": {
      "en": "Frontend Developer — built the Vue 3 + TypeScript components, Pinia stores, and responsive layouts.",
      "fa": "توسعه‌دهنده‌ی فرانت‌اند — پیاده‌سازی کامپوننت‌های Vue 3 با TypeScript، استور Pinia و طراحی واکنش‌گرا."
    },
    "engineeringDecisions": {
      "en": [
        "Enforced `vue-tsc --noEmit` in the production build script so template/prop type mismatches fail early."
      ],
      "fa": [
        "افزودن `vue-tsc --noEmit` به اسکریپت بیلد برای جلوگیری از خطاهای تایپی در قالب‌ها و پراپ‌ها."
      ]
    },
    "honestNote": {
      "en": "Frontend messaging UI study inspired by WhatsApp Web (no real-time WebSocket backend).",
      "fa": "پروژه‌ی تمرینی رابط پیام‌رسان با الهام از WhatsApp Web (بدون بک‌اند پیام‌رسان بلادرنگ)."
    },
    "category": "ui-architecture-study",
    "isCloneOrInspired": true,
    "inspiredBy": "WhatsApp Web",
    "status": "live-demo",
    "statusLabel": {
      "en": "UI Study · Live Demo",
      "fa": "پروژه تمرینی · دموی زنده"
    },
    "technologies": [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "Tailwind CSS",
      "DaisyUI"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/Wasapp",
    "demoUrl": "https://wasappp.netlify.app/",
    "demoLabel": {
      "en": "Live Demo",
      "fa": "مشاهده دمو"
    },
    "updatedYear": "2026",
    "pinned": false,
    "imageUrl": "https://camo.githubusercontent.com/a053f63d89b174e3663df21c4178dca4044201ee0e68326296b7e508ae332e0d/68747470733a2f2f6769746875622d70726f64756374696f6e2d757365722d61737365742d3632313064662e73332e616d617a6f6e6177732e636f6d2f37313233323837302f3234343837313437362d38633737366638632d363564302d346661662d616430312d3035656635316330643362312e706e67"
  },
  {
    "slug": "kalamesaz",
    "name": {
      "en": "Kalamesaz (کلمه‌ساز)",
      "fa": "کلمه‌ساز (Kalamesaz)"
    },
    "tagline": {
      "en": "Offline-first Persian Android word puzzle game built with React Native 0.87, TypeScript, Reanimated 4, and Gesture Handler",
      "fa": "بازی معمایی و واژه‌یابی فارسی برای اندروید با React Native 0.87، TypeScript و اجرای کاملاً آفلاین"
    },
    "summary": {
      "en": "A polished RTL Persian mobile puzzle game featuring a touch/swipe letter wheel, 50 progression levels across 5 worlds, a validated 1,166-word dictionary, and 60 daily challenges.",
      "fa": "بازی موبایل فارسی و راست‌به‌چپ با چرخ لمسی حروف، ۵۰ مرحله در ۵ جهان، واژه‌نامه‌ی اعتبارسنجی‌شده‌ی ۱٬۱۶۶ واژه‌ای و ۶۰ پازل چالش روزانه."
    },
    "problem": {
      "en": "Building a responsive Persian word game requires accurate Persian character normalization, deterministic offline puzzle validation, smooth 60fps touch gestures, and accessible RTL typography.",
      "fa": "ساخت یک بازی واژه‌یابی فارسی نیازمند نرمال‌سازی دقیق حروف فارسی، اعتبارسنجی آفلاین مرحله‌ها، ژست‌های لمسی روان و تایپوگرافی استاندارد راست‌به‌چپ است."
    },
    "audience": {
      "en": "Persian-speaking Android players looking for an offline, account-free daily brain teaser.",
      "fa": "کاربران اندروید علاقه‌مند به بازی‌های فکری و واژه‌یابی فارسی بدون نیاز به اینترنت یا حساب کاربری."
    },
    "businessLogic": {
      "en": "Combines letter-length base scoring, bonus word multipliers (1.35x), consecutive word combos, heart regeneration timers, a 3-tier coin hint economy, and anti-duplicate daily streak tracking.",
      "fa": "ترکیب سیستم امتیازدهی بر اساس طول واژه، ضریب واژه‌های امتیازی (۱٫۳۵ برابر)، کمبوهای پیاپی، بازگشت زمانی قلب‌ها، سه سطح راهنمای سکه‌ای و زنجیره‌ی چالش روزانه."
    },
    "architecture": {
      "en": [
        "React Native 0.87 + React 19 + TypeScript 6 targeting Android API 24–36.",
        "Interactive gesture-driven letter wheel built with `react-native-gesture-handler`, `react-native-reanimated` 4, and `react-native-svg`.",
        "Offline persistence via `@react-native-async-storage/async-storage` with custom TypeScript CLI tooling (`tools/check-levels.mts`, `build-levels.mts`) to validate dictionary & level solvability.",
        "Automated verification pipeline (`npm run verify`: `tsc --noEmit` + ESLint + Jest)."
      ],
      "fa": [
        "توسعه با React Native 0.87، React 19 و TypeScript 6 برای اندروید ۷ به بالا.",
        "پیاده‌سازی چرخ حروف لمسی با `react-native-gesture-handler`، `react-native-reanimated` و `react-native-svg`.",
        "ذخیره‌سازی محلی پیشروی کاربر در AsyncStorage به‌همراه ابزارهای خط فرمان (`tsx`) برای تولید و اعتبارسنجی خودکار مراحل و واژه‌نامه.",
        "خط بررسی کیفیت شامل تست‌های Jest، بررسی نوع TypeScript و ESLint."
      ]
    },
    "features": {
      "en": [
        "50 curated levels across 5 worlds + interactive onboarding tutorial level.",
        "60 daily puzzles with 1, 3, 7, 14, and 30-day streak rewards and 14 unlockable achievements.",
        "System/Light/Dark themes, Vazirmatn typography, sound/haptic toggles, and reduced-motion accessibility."
      ],
      "fa": [
        "۵۰ مرحله در ۵ جهان دهگانه + مرحله‌ی آموزشی تعاملی و ۱٬۱۶۶ واژه‌ی یکتای فارسی.",
        "۶۰ پازل چالش روزانه با پاداش‌های زنجیره‌ای و ۱۴ دستاورد قابل بازگشایی.",
        "تم روشن/تاریک/سیستم، فونت وزیرمتن، کنترل صدا و لرزش و پشتیبانی از کاهش انیمیشن."
      ]
    },
    "role": {
      "en": "Mobile Developer — designed game mechanics, Persian word normalization & level-validation scripts, gesture UI, and Android release pipeline.",
      "fa": "توسعه‌دهنده‌ی موبایل — طراحی مکانیک بازی، نرمال‌سازی حروف فارسی، اسکریپت‌های اعتبارسنجی مرحله‌ها، رابط لمسی و پایپ‌لاین ساخت اندروید."
    },
    "engineeringDecisions": {
      "en": [
        "Built build-time validation scripts (`levels:check`) so no unsolvable or malformed Persian character puzzle can ship.",
        "Kept 100% of dictionary and progression state on-device for zero-latency offline play."
      ],
      "fa": [
        "ساخت ابزار اعتبارسنجی خودکار مرحله‌ها در زمان بیلد برای اطمینان از صحت تمام پازل‌ها و حروف فارسی.",
        "نگهداری کامل واژه‌نامه و وضعیت پیشرفت روی دستگاه برای تجربه‌ی بدون تأخیر و کاملاً آفلاین."
      ]
    },
    "category": "extension-mobile",
    "status": "completed",
    "statusLabel": {
      "en": "v2.0.0 · Android React Native Source",
      "fa": "نسخه ۲.۰.۰ · اپ اندروید React Native"
    },
    "technologies": [
      "React Native",
      "TypeScript",
      "React 19",
      "Reanimated 4",
      "Gesture Handler",
      "SVG",
      "Jest"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/Kalamesaz",
    "updatedYear": "2026",
    "pinned": false,
    "imageUrl": "/projects/kalamesaz.webp"
  },
  {
    "slug": "datoos-crypto-tracker",
    "name": {
      "en": "Datoos Crypto Tracker",
      "fa": "ردیاب رمزارز Datoos"
    },
    "tagline": {
      "en": "Next.js 15 + TypeScript cryptocurrency market tracker with TanStack Query & IndexedDB (Dexie.js) local caching",
      "fa": "اپلیکیشن رصد بازار رمزارز با Next.js 15، TypeScript، React Query و کش محلی IndexedDB"
    },
    "summary": {
      "en": "A fast, resilient crypto price dashboard combining server/API data synchronization via React Query with client-side IndexedDB persistence using Dexie.js.",
      "fa": "داشبورد واکنش‌گرای نمایش قیمت و رتبه‌ی رمزارزها با مدیریت وضعیت سرور توسط React Query و ذخیره‌سازی محلی در مرورگر با Dexie.js."
    },
    "problem": {
      "en": "Market dashboards suffer from redundant network calls and blank loading states when revisiting or refreshing volatile price lists.",
      "fa": "داشبوردهای قیمتی بدون لایه‌ی کش سمت کاربر در هر بار بازگشت دچار درخواست‌های تکراری و تأخیر در نمایش داده می‌شوند."
    },
    "audience": {
      "en": "Engineering assessment reviewers and users tracking live market cap rankings and prices.",
      "fa": "کاربران علاقه‌مند به رصد سریع قیمت و رتبه‌ی رمزارزها و ارزیابان فنی فرانت‌اند."
    },
    "businessLogic": {
      "en": "Synchronizes external cryptocurrency API payloads into IndexedDB via Dexie.js while managing stale-while-revalidate updates and sorting in TanStack React Query.",
      "fa": "همگام‌سازی داده‌های دریافتی از API با پایگاه داده‌ی مرورگر (IndexedDB) و مدیریت به‌روزرسانی و مرتب‌سازی با React Query."
    },
    "architecture": {
      "en": [
        "Next.js 15 App Router + React 19 + TypeScript.",
        "TanStack React Query v5 + Axios for declarative fetching and cache invalidation.",
        "Dexie.js wrapper over IndexedDB for durable client-side data caching.",
        "Jest + React Testing Library + MSW configured for component & network testing."
      ],
      "fa": [
        "توسعه با Next.js 15 (App Router)، React 19 و TypeScript.",
        "مدیریت داده‌های غیرهمگام با TanStack React Query v5 و Axios.",
        "ذخیره‌سازی پایدار در مرورگر با Dexie.js (IndexedDB).",
        "پیکربندی تست با Jest، React Testing Library و MSW."
      ]
    },
    "features": {
      "en": [
        "Live rank and price sorting with instant cached hydration.",
        "Incremental pagination (`Load More`) and responsive Tailwind CSS 4 cards."
      ],
      "fa": [
        "مرتب‌سازی بر اساس رتبه و قیمت همراه با بارگذاری فوری از کش مرورگر.",
        "صفحه‌بندی تدریجی و طراحی واکنش‌گرا با Tailwind CSS 4."
      ]
    },
    "role": {
      "en": "Frontend Developer — designed the React Query + IndexedDB caching flow, UI components, and test configuration.",
      "fa": "توسعه‌دهنده‌ی فرانت‌اند — پیاده‌سازی چرخه‌ی کش React Query و IndexedDB، رابط کاربری و پیکربندی تست‌ها."
    },
    "engineeringDecisions": {
      "en": [
        "Paired React Query in-memory state with Dexie IndexedDB storage to balance real-time freshness with instant reload resilience."
      ],
      "fa": [
        "ترکیب کش حافظه‌ی React Query با ذخیره‌سازی IndexedDB برای نمایش سریع داده‌ها در مراجعات بعدی."
      ]
    },
    "category": "enterprise-dashboard",
    "status": "live-demo",
    "statusLabel": {
      "en": "Technical Case · Live Demo",
      "fa": "تسک فنی · دارای دموی زنده"
    },
    "technologies": [
      "Next.js 15",
      "TypeScript",
      "TanStack Query",
      "Dexie.js (IndexedDB)",
      "Tailwind CSS",
      "Jest & RTL"
    ],
    "repoUrl": "https://github.com/hoseinsedaqat/Datoos-Task",
    "demoUrl": "https://datoos-task.netlify.app/",
    "demoLabel": {
      "en": "Live Demo",
      "fa": "مشاهده دمو"
    },
    "updatedYear": "2025",
    "pinned": false,
    "imageUrl": "/projects/datoos-crypto-tracker.svg",
    "fallbackImageUrl": "/projects/datoos-crypto-tracker.svg",
    "readmeImageRepo": "hoseinsedaqat/Datoos-Task"
  }
];

export function getFeaturedProjects(): ProjectItem[] {
  return featuredProjectSlugs
    .map((slug) => curatedProjects.find((p) => p.slug === slug))
    .filter((p): p is ProjectItem => Boolean(p));
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return curatedProjects.find((p) => p.slug === slug);
}

export const fallbackGitHubRepos: GitHubRepoSummary[] = [
  {
    "name": "RahkarERP",
    "description": "راهکار | ERP Platform",
    "htmlUrl": "https://github.com/hoseinsedaqat/RahkarERP",
    "homepage": "https://rahkar-erp.netlify.app/",
    "language": "TypeScript",
    "stargazersCount": 0,
    "updatedAt": "2026-09-17T16:38:37Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "EchShopy",
    "description": "(Digikala Clone) EchShopy it's MarketPlace Store that it was made with Vuejs Freamwork",
    "htmlUrl": "https://github.com/hoseinsedaqat/EchShopy",
    "homepage": "https://echshopy.netlify.app/",
    "language": "Vue",
    "stargazersCount": 11,
    "updatedAt": "2025-11-27T03:47:40Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "Wavezon",
    "description": "(Amazon Clone) Wavezon it's MarketPlace Store that it was made with React js",
    "htmlUrl": "https://github.com/hoseinsedaqat/Wavezon",
    "homepage": "https://wavezon.netlify.app",
    "language": "JavaScript",
    "stargazersCount": 0,
    "updatedAt": "2025-05-17T04:41:24Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "Neweet",
    "description": "(Twitter Or X Clone) Next 13 + Typescript + Bootstrap 5",
    "htmlUrl": "https://github.com/hoseinsedaqat/Neweet",
    "homepage": "https://neweet.netlify.app/",
    "language": "TypeScript",
    "stargazersCount": 0,
    "updatedAt": "2023-08-29T19:01:30Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "EchGram",
    "description": "(Instagram Clone) EchGram it's Social Media App that is was made with Vuejs Freamwork + Typescript + Electron + Pwa",
    "htmlUrl": "https://github.com/hoseinsedaqat/EchGram",
    "homepage": "https://echgram.netlify.app/",
    "language": "Vue",
    "stargazersCount": 3,
    "updatedAt": "2026-10-23T17:09:47Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "EchMail",
    "description": "(Gmail Clone) Vue3 + Pinia + Tailwind Css + Daisyui + Scss + Unit Test + Pwa",
    "htmlUrl": "https://github.com/hoseinsedaqat/EchMail",
    "homepage": "https://echmail.netlify.app/",
    "language": "Vue",
    "stargazersCount": 3,
    "updatedAt": "2025-02-19T15:59:15Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "Kalamesaz",
    "description": "بازی واژه‌یابی فارسی؛ از حروف کلمه بساز، مرحله‌ها را باز کن و هر روز یک معمای تازه حل کن",
    "htmlUrl": "https://github.com/hoseinsedaqat/Kalamesaz",
    "homepage": null,
    "language": "TypeScript",
    "stargazersCount": 0,
    "updatedAt": "2026-10-23T19:46:09Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "NovaAdminTemplate",
    "description": "Nova Admin Template",
    "htmlUrl": "https://github.com/hoseinsedaqat/NovaAdminTemplate",
    "homepage": "https://novaadmintempalte.netlify.app/",
    "language": "JavaScript",
    "stargazersCount": 0,
    "updatedAt": "2026-10-06T12:16:30Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "KhamirSportApp",
    "description": "Cool Telegram bot to show tide and weather of my lovely city for my running and swimming time",
    "htmlUrl": "https://github.com/hoseinsedaqat/KhamirSportApp",
    "homepage": "https://t.me/khamirsportbot",
    "language": "Python",
    "stargazersCount": 0,
    "updatedAt": "2026-08-25T16:31:02Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "cargocraft-dashboard-analysis",
    "description": "CargoCraft is a modern ERP dashboard designed for logistics, operations, finance, HR, invoicing, and executive analytics.",
    "htmlUrl": "https://github.com/hoseinsedaqat/cargocraft-dashboard-analysis",
    "homepage": "https://cargocraftdashboard.netlify.app/",
    "language": "TypeScript",
    "stargazersCount": 0,
    "updatedAt": "2026-06-30T13:04:21Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "Architecture-Website",
    "description": "this is a Modern website for Architecture Industry",
    "htmlUrl": "https://github.com/hoseinsedaqat/Architecture-Website",
    "homepage": "https://hoseinsedaqat.github.io/Architecture-Website/",
    "language": "HTML",
    "stargazersCount": 23,
    "updatedAt": "2026-03-03T18:48:53Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "TishraAnalayzer",
    "description": "Tishra Is a Helpful Extension That Analyzes Web Pages",
    "htmlUrl": "https://github.com/hoseinsedaqat/TishraAnalayzer",
    "homepage": "https://addons.mozilla.org/en-US/firefox/addon/tishra-analyzer/",
    "language": "JavaScript",
    "stargazersCount": 0,
    "updatedAt": "2026-02-23T15:16:42Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "Wasapp",
    "description": "(Whatsapp Clone) Vue3 + Vite + Typescript + TailwindCss + Daisyui + Pinia",
    "htmlUrl": "https://github.com/hoseinsedaqat/Wasapp",
    "homepage": "https://wasappp.netlify.app/",
    "language": "Vue",
    "stargazersCount": 4,
    "updatedAt": "2026-01-06T15:00:58Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "Datoos-Task",
    "description": "A simple and responsive Next.js + TypeScript application to track cryptocurrencies.",
    "htmlUrl": "https://github.com/hoseinsedaqat/Datoos-Task",
    "homepage": "https://datoos-task.netlify.app/",
    "language": "TypeScript",
    "stargazersCount": 0,
    "updatedAt": "2025-08-29T16:12:12Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "VTDashboard",
    "description": "VTDashboard it's Admin Panel that it was made with Vuejs, Typescript & Vuetify Components",
    "htmlUrl": "https://github.com/hoseinsedaqat/VTDashboard",
    "homepage": "https://vtdashboard.netlify.app/",
    "language": "Vue",
    "stargazersCount": 3,
    "updatedAt": "2025-07-22T03:27:12Z",
    "fork": false,
    "archived": false
  },
  {
    "name": "Woowle",
    "description": "(Google Search Engine Clone) Nuxt 3.7 + Scss + Typescript + Pinia",
    "htmlUrl": "https://github.com/hoseinsedaqat/Woowle",
    "homepage": "https://woowle.netlify.app/",
    "language": "SCSS",
    "stargazersCount": 0,
    "updatedAt": "2023-09-13T03:03:53Z",
    "fork": false,
    "archived": false
  }
];
