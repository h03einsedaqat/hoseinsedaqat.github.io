import type { Locale } from '@/types/portfolio';

export const uiTranslations: Record<
  Locale,
  {
    brandName: string;
    portfolioTitle: string;
    resumeAssistant: string;
    verifiedKbBadge: string;
    aiGroundedBadge: string;
    newChat: string;
    searchChatsPlaceholder: string;
    conversationsHeading: string;
    noConversationsYet: string;
    noMatchingConversations: string;
    clearAllChats: string;
    confirmClearAll: string;
    cancel: string;
    deleteChat: string;
    exploreSectionsHeading: string;
    navChat: string;
    navAbout: string;
    navExperience: string;
    navProjects: string;
    navSkills: string;
    navEducation: string;
    navContact: string;
    navResume: string;
    viewResume: string;
    downloadResume: string;
    printOrSavePdf: string;
    backToChat: string;
    askAssistant: string;
    askAboutProject: string;
    composerPlaceholder: string;
    composerHint: string;
    sendMessage: string;
    assistantThinking: string;
    copyResponse: string;
    copied: string;
    copyEmail: string;
    emailCopied: string;
    sendEmail: string;
    openSidebar: string;
    closeSidebar: string;
    collapseSidebar: string;
    expandSidebar: string;
    themeDark: string;
    themeLight: string;
    toggleTheme: string;
    languageLabel: string;
    suggestedPromptsHeading: string;
    followUpHeading: string;
    featuredBadge: string;
    inspiredBadge: string;
    viewDetails: string;
    sourceCode: string;
    liveDemo: string;
    readArticle: string;
    allProjectsTab: string;
    featuredTab: string;
    dashboardsTab: string;
    extensionsMobileTab: string;
    uiStudiesTab: string;
    searchProjectsPlaceholder: string;
    allTechFilter: string;
    noProjectsMatch: string;
    clearFilters: string;
    githubSectionTitle: string;
    githubSectionSubtitle: string;
    githubLiveBadge: string;
    githubSnapshotBadge: string;
    updatedLabel: string;
    responsibilitiesLabel: string;
    achievementsLabel: string;
    problemLabel: string;
    actionLabel: string;
    outcomeLabel: string;
    technologiesLabel: string;
    audienceLabel: string;
    businessLogicLabel: string;
    architectureLabel: string;
    keyFeaturesLabel: string;
    myRoleLabel: string;
    engineeringDecisionsLabel: string;
    transparencyNoteLabel: string;
    backToProjects: string;
    evidenceProjectsLabel: string;
    focusAreasLabel: string;
    engineeringValuesLabel: string;
    publicationsLabel: string;
    educationTitle: string;
    certificationsTitle: string;
    verifyOnLinkedIn: string;
    contactTitle: string;
    contactSubtitle: string;
    directEmailLabel: string;
    professionalProfilesLabel: string;
    resumeSummaryTitle: string;
    resumeExperienceTitle: string;
    resumeProjectsTitle: string;
    resumeSkillsTitle: string;
    resumeEducationTitle: string;
    resumePublicationsTitle: string;
  }
> = {
  en: {
    brandName: 'Hosein Sedaqat',
    portfolioTitle: "Hosein's Portfolio",
    resumeAssistant: 'Resume Assistant',
    verifiedKbBadge: 'Verified Knowledge Base',
    aiGroundedBadge: 'AI + Verified Knowledge Base',
    newChat: 'New Chat',
    searchChatsPlaceholder: 'Search conversations...',
    conversationsHeading: 'Recent Conversations',
    noConversationsYet: 'Start a conversation to save history here.',
    noMatchingConversations: 'No conversations match your search.',
    clearAllChats: 'Clear all',
    confirmClearAll: 'Confirm clear?',
    cancel: 'Cancel',
    deleteChat: 'Delete conversation',
    exploreSectionsHeading: 'Resume Views',
    navChat: 'Assistant Chat',
    navAbout: 'About & Profile',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navEducation: 'Education & Writing',
    navContact: 'Contact',
    navResume: 'Printable Resume',
    viewResume: 'View Resume',
    downloadResume: 'Download Resume',
    printOrSavePdf: 'Save as PDF / Print',
    backToChat: 'Back to Chat',
    askAssistant: 'Ask in Chat',
    askAboutProject: 'Ask Assistant About This Project',
    composerPlaceholder:
      'Ask about Hosein’s experience, Rahkar ERP, React/Vue skills, or availability...',
    composerHint:
      'Answers are grounded in Hosein Sedaqat’s verified resume & GitHub portfolio. Press Enter to send, Shift + Enter for a new line.',
    sendMessage: 'Send message',
    assistantThinking: 'Preparing verified response...',
    copyResponse: 'Copy response',
    copied: 'Copied',
    copyEmail: 'Copy email',
    emailCopied: 'Email copied',
    sendEmail: 'Open email app',
    openSidebar: 'Open navigation sidebar',
    closeSidebar: 'Close navigation sidebar',
    collapseSidebar: 'Collapse sidebar',
    expandSidebar: 'Expand sidebar',
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
    toggleTheme: 'Switch theme',
    languageLabel: 'Language',
    suggestedPromptsHeading: 'Suggested questions for recruiters & hiring managers',
    followUpHeading: 'Continue exploring',
    featuredBadge: 'Featured',
    inspiredBadge: 'UI & Architecture Study',
    viewDetails: 'View Details',
    sourceCode: 'GitHub',
    liveDemo: 'Live Demo',
    readArticle: 'Technical Article',
    allProjectsTab: 'All Curated',
    featuredTab: 'Featured',
    dashboardsTab: 'ERP & Dashboards',
    extensionsMobileTab: 'Extension & Mobile',
    uiStudiesTab: 'UI & Clone Studies',
    searchProjectsPlaceholder: 'Search projects by name, domain, or stack...',
    allTechFilter: 'All Stacks',
    noProjectsMatch: 'No projects match the current search or stack filter.',
    clearFilters: 'Reset filters',
    githubSectionTitle: 'Public GitHub Activity',
    githubSectionSubtitle:
      'Non-fork public repositories synced from github.com/hoseinsedaqat with automatic offline fallback.',
    githubLiveBadge: 'Synced from GitHub API',
    githubSnapshotBadge: 'Verified Snapshot',
    updatedLabel: 'Updated',
    responsibilitiesLabel: 'Core Responsibilities',
    achievementsLabel: 'Key Outcomes (Problem → Action → Result)',
    problemLabel: 'Problem',
    actionLabel: 'Technical Action',
    outcomeLabel: 'Verifiable Result',
    technologiesLabel: 'Technologies',
    audienceLabel: 'Target Audience',
    businessLogicLabel: 'Domain & Integration Logic',
    architectureLabel: 'Technical Architecture',
    keyFeaturesLabel: 'Key Capabilities',
    myRoleLabel: 'My Role',
    engineeringDecisionsLabel: 'Architectural Decisions',
    transparencyNoteLabel: 'Scope & Transparency Note',
    backToProjects: 'All Projects',
    evidenceProjectsLabel: 'Verified in:',
    focusAreasLabel: 'Core Specializations',
    engineeringValuesLabel: 'Engineering Principles',
    publicationsLabel: 'Technical Articles & Writing',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications & Credentials',
    verifyOnLinkedIn: 'View Credentials on LinkedIn',
    contactTitle: 'Get in Touch',
    contactSubtitle:
      'Direct, verified channels for Frontend Developer, Full-Stack Developer, and Software Engineer roles.',
    directEmailLabel: 'Direct Email',
    professionalProfilesLabel: 'Verified Profiles & Networks',
    resumeSummaryTitle: 'Professional Summary',
    resumeExperienceTitle: 'Professional Experience',
    resumeProjectsTitle: 'Selected Engineering Projects',
    resumeSkillsTitle: 'Technical Skills',
    resumeEducationTitle: 'Education & Credentials',
    resumePublicationsTitle: 'Publications & Community',
  },
  fa: {
    brandName: 'حسین صداقت',
    portfolioTitle: 'پورتفولیوی حسین صداقت',
    resumeAssistant: 'دستیار رزومه',
    verifiedKbBadge: 'پایگاه دانش تأییدشده',
    aiGroundedBadge: 'هوش مصنوعی + پایگاه دانش تأییدشده',
    newChat: 'گفت‌وگوی جدید',
    searchChatsPlaceholder: 'جست‌وجوی گفت‌وگوها...',
    conversationsHeading: 'گفت‌وگوهای اخیر',
    noConversationsYet: 'با شروع یک پرسش، تاریخچه گفت‌وگو در اینجا ذخیره می‌شود.',
    noMatchingConversations: 'گفت‌وگویی مطابق عبارت جست‌وجو یافت نشد.',
    clearAllChats: 'حذف همه',
    confirmClearAll: 'تأیید حذف همه؟',
    cancel: 'انصراف',
    deleteChat: 'حذف این گفت‌وگو',
    exploreSectionsHeading: 'بخش‌های رزومه',
    navChat: 'گفت‌وگو با دستیار',
    navAbout: 'معرفی و پروفایل',
    navExperience: 'سوابق کاری',
    navProjects: 'پروژه‌ها',
    navSkills: 'مهارت‌های فنی',
    navEducation: 'تحصیلات و مقالات',
    navContact: 'اطلاعات تماس',
    navResume: 'نسخه چاپی رزومه',
    viewResume: 'مشاهده رزومه',
    downloadResume: 'دانلود رزومه',
    printOrSavePdf: 'ذخیره PDF / چاپ',
    backToChat: 'بازگشت به چت',
    askAssistant: 'پرسش در چت',
    askAboutProject: 'پرسش درباره این پروژه در چت',
    composerPlaceholder:
      'درباره سوابق کاری، پروژه Rahkar ERP، مهارت‌های React/Vue یا راه‌های همکاری بپرسید...',
    composerHint:
      'پاسخ‌ها مستند به رزومه و مخازن واقعی حسین صداقت هستند. ارسال با Enter و خط جدید با Shift + Enter.',
    sendMessage: 'ارسال پیام',
    assistantThinking: 'در حال آماده‌سازی پاسخ مستند...',
    copyResponse: 'کپی پاسخ',
    copied: 'کپی شد',
    copyEmail: 'کپی ایمیل',
    emailCopied: 'ایمیل کپی شد',
    sendEmail: 'باز کردن برنامه ایمیل',
    openSidebar: 'باز کردن منوی کناری',
    closeSidebar: 'بستن منوی کناری',
    collapseSidebar: 'جمع کردن نوار کناری',
    expandSidebar: 'باز کردن نوار کناری',
    themeDark: 'حالت تیره',
    themeLight: 'حالت روشن',
    toggleTheme: 'تغییر پوسته',
    languageLabel: 'زبان',
    suggestedPromptsHeading: 'پرسش‌های پیشنهادی برای کارفرمایان و مدیران فنی',
    followUpHeading: 'ادامه‌ی بررسی',
    featuredBadge: 'شاخص',
    inspiredBadge: 'مطالعه معماری و UI',
    viewDetails: 'جزئیات پروژه',
    sourceCode: 'گیت‌هاب',
    liveDemo: 'دموی زنده',
    readArticle: 'مقاله فنی',
    allProjectsTab: 'همه پروژه‌های منتخب',
    featuredTab: 'پروژه‌های شاخص',
    dashboardsTab: 'ERP و داشبوردها',
    extensionsMobileTab: 'افزونه و موبایل',
    uiStudiesTab: 'مطالعات UI و Clone',
    searchProjectsPlaceholder: 'جست‌وجوی پروژه بر اساس نام، کاربرد یا تکنولوژی...',
    allTechFilter: 'همه تکنولوژی‌ها',
    noProjectsMatch: 'پروژه‌ای با فیلتر یا عبارت فعلی مطابقت ندارد.',
    clearFilters: 'حذف فیلترها',
    githubSectionTitle: 'مخازن عمومی گیت‌هاب',
    githubSectionSubtitle:
      'فهرست مخازن عمومی غیر Fork از github.com/hoseinsedaqat به همراه پشتیبان آفلاین.',
    githubLiveBadge: 'دریافت زنده از GitHub API',
    githubSnapshotBadge: 'نسخه ذخیره‌شده معتبر',
    updatedLabel: 'به‌روزرسانی',
    responsibilitiesLabel: 'مسئولیت‌های کلیدی',
    achievementsLabel: 'دستاوردها (مسئله ← اقدام فنی ← نتیجه قابل اثبات)',
    problemLabel: 'مسئله',
    actionLabel: 'اقدام فنی',
    outcomeLabel: 'نتیجه قابل اثبات',
    technologiesLabel: 'تکنولوژی‌ها',
    audienceLabel: 'مخاطبان محصول',
    businessLogicLabel: 'منطق کسب‌وکار و یکپارچگی',
    architectureLabel: 'معماری فنی',
    keyFeaturesLabel: 'مهم‌ترین قابلیت‌ها',
    myRoleLabel: 'نقش من در توسعه',
    engineeringDecisionsLabel: 'تصمیم‌های معماری و مهندسی',
    transparencyNoteLabel: 'شفافیت و ماهیت پروژه',
    backToProjects: 'همه پروژه‌ها',
    evidenceProjectsLabel: 'به‌کاررفته در:',
    focusAreasLabel: 'حوزه‌های تخصصی',
    engineeringValuesLabel: 'اصول مهندسی من',
    publicationsLabel: 'مقالات فنی و نوشته‌ها',
    educationTitle: 'تحصیلات دانشگاهی',
    certificationsTitle: 'گواهینامه‌ها و مدارک',
    verifyOnLinkedIn: 'مشاهده مدارک در لینکدین',
    contactTitle: 'ارتباط با من',
    contactSubtitle:
      'راه‌های ارتباطی مستقیم و معتبر برای موقعیت‌های Frontend Developer، Full-Stack Developer و Software Engineer.',
    directEmailLabel: 'ایمیل مستقیم',
    professionalProfilesLabel: 'شبکه‌ها و پروفایل‌های حرفه‌ای',
    resumeSummaryTitle: 'خلاصه حرفه‌ای',
    resumeExperienceTitle: 'سوابق کاری و تجربیات',
    resumeProjectsTitle: 'پروژه‌های مهندسی منتخب',
    resumeSkillsTitle: 'مهارت‌های فنی',
    resumeEducationTitle: 'تحصیلات و گواهینامه‌ها',
    resumePublicationsTitle: 'مقالات و فعالیت‌های فنی',
  },
};
