import type { RecommendationPrompt } from '@/types/portfolio';

export const recommendationPrompts: RecommendationPrompt[] = [
  {
    id: 'about-me',
    prompt: {
      en: "What's your background?",
      fa: "What's your background?",
    },
    shortLabel: {
      en: "What's your background?",
      fa: "What's your background?",
    },
    hint: {
      en: '5+ years in FinTech, SaaS & full-stack web',
      fa: '5+ years in FinTech, SaaS & full-stack web',
    },
    iconName: 'user',
    intentHint: 'about',
  },
  {
    id: 'explore-projects',
    prompt: {
      en: 'What projects have you built?',
      fa: 'What projects have you built?',
    },
    shortLabel: {
      en: 'What projects have you built?',
      fa: 'What projects have you built?',
    },
    hint: {
      en: 'Rahkar ERP, web apps, dashboards & tools',
      fa: 'Rahkar ERP, web apps, dashboards & tools',
    },
    iconName: 'folder-git',
    intentHint: 'projects',
  },
  {
    id: 'professional-experience',
    prompt: {
      en: 'Where have you worked before?',
      fa: 'Where have you worked before?',
    },
    shortLabel: {
      en: 'Where have you worked before?',
      fa: 'Where have you worked before?',
    },
    hint: {
      en: 'Paystar, NPA (Oman) & freelance roles',
      fa: 'Paystar, NPA (Oman) & freelance roles',
    },
    iconName: 'briefcase',
    intentHint: 'experience',
  },
  {
    id: 'strongest-skills',
    prompt: {
      en: "What's your main tech stack?",
      fa: "What's your main tech stack?",
    },
    shortLabel: {
      en: "What's your main tech stack?",
      fa: "What's your main tech stack?",
    },
    hint: {
      en: 'React, Next.js, Vue, TypeScript & Node.js',
      fa: 'React, Next.js, Vue, TypeScript & Node.js',
    },
    iconName: 'cpu',
    intentHint: 'skills',
  },
  {
    id: 'rahkar-erp',
    prompt: {
      en: 'How does Rahkar ERP work?',
      fa: 'How does Rahkar ERP work?',
    },
    shortLabel: {
      en: 'How does Rahkar ERP work?',
      fa: 'How does Rahkar ERP work?',
    },
    hint: {
      en: '16 modules, double-entry ledger & 78 APIs',
      fa: '16 modules, double-entry ledger & 78 APIs',
    },
    iconName: 'layers',
    intentHint: 'rahkar',
  },
  {
    id: 'real-products',
    prompt: {
      en: 'What have you shipped to production?',
      fa: 'What have you shipped to production?',
    },
    shortLabel: {
      en: 'What have you shipped to production?',
      fa: 'What have you shipped to production?',
    },
    hint: {
      en: 'Paystar (4k+ users) & Mangro (15k+ installs)',
      fa: 'Paystar (4k+ users) & Mangro (15k+ installs)',
    },
    iconName: 'rocket',
    intentHint: 'contributions',
  },
  {
    id: 'why-hire',
    prompt: {
      en: 'What can you bring to a team?',
      fa: 'What can you bring to a team?',
    },
    shortLabel: {
      en: 'What can you bring to a team?',
      fa: 'What can you bring to a team?',
    },
    hint: {
      en: 'Frontend speed, backend ownership & clean code',
      fa: 'Frontend speed, backend ownership & clean code',
    },
    iconName: 'check-circle',
    intentHint: 'why-hire',
  },
  {
    id: 'github-projects',
    prompt: {
      en: 'Can I see your GitHub repos?',
      fa: 'Can I see your GitHub repos?',
    },
    shortLabel: {
      en: 'Can I see your GitHub repos?',
      fa: 'Can I see your GitHub repos?',
    },
    hint: {
      en: '45 public repositories, source code & demos',
      fa: '45 public repositories, source code & demos',
    },
    iconName: 'github',
    intentHint: 'github-projects',
  },
  {
    id: 'portfolio-different',
    prompt: {
      en: 'Why build a chat-style portfolio?',
      fa: 'Why build a chat-style portfolio?',
    },
    shortLabel: {
      en: 'Why build a chat-style portfolio?',
      fa: 'Why build a chat-style portfolio?',
    },
    hint: {
      en: 'Fast answers, real data & zero filler',
      fa: 'Fast answers, real data & zero filler',
    },
    iconName: 'sparkles',
    intentHint: 'portfolio-different',
  },
  {
    id: 'contact-me',
    prompt: {
      en: 'How can I reach you?',
      fa: 'How can I reach you?',
    },
    shortLabel: {
      en: 'How can I reach you?',
      fa: 'How can I reach you?',
    },
    hint: {
      en: 'Email, LinkedIn & GitHub links',
      fa: 'Email, LinkedIn & GitHub links',
    },
    iconName: 'mail',
    intentHint: 'contact',
  },
];

export function getRecommendationById(id: string): RecommendationPrompt | undefined {
  return recommendationPrompts.find((item) => item.id === id);
}
