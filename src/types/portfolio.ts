export type Locale = 'en' | 'fa';
export type Theme = 'dark' | 'light';

export type BilingualText = {
  en: string;
  fa: string;
};

export type BilingualList = {
  en: string[];
  fa: string[];
};

export interface ExternalLinkItem {
  id: string;
  label: BilingualText;
  url: string;
  handle?: string;
  category: 'primary' | 'community' | 'writing';
  description: BilingualText;
}

export interface AchievementItem {
  problem: BilingualText;
  action: BilingualText;
  outcome: BilingualText;
}

export interface ExperienceItem {
  id: string;
  role: BilingualText;
  company: BilingualText;
  companyUrl?: string;
  location: BilingualText;
  period: BilingualText;
  employmentType: BilingualText;
  domain: BilingualText;
  summary: BilingualText;
  responsibilities: BilingualList;
  achievements: AchievementItem[];
  technologies: string[];
}

export type ProjectCategory =
  | 'featured-product'
  | 'enterprise-dashboard'
  | 'extension-mobile'
  | 'ui-architecture-study';

export type ProjectStatus = 'active' | 'published' | 'live-demo' | 'completed';

export interface ProjectItem {
  slug: string;
  name: BilingualText;
  tagline: BilingualText;
  summary: BilingualText;
  problem: BilingualText;
  audience: BilingualText;
  businessLogic: BilingualText;
  architecture: BilingualList;
  features: BilingualList;
  role: BilingualText;
  engineeringDecisions: BilingualList;
  honestNote?: BilingualText;
  category: ProjectCategory;
  isCloneOrInspired?: boolean;
  inspiredBy?: string;
  status: ProjectStatus;
  statusLabel: BilingualText;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  demoLabel?: BilingualText;
  articleUrl?: string;
  updatedYear: string;
  highlights?: {
    label: BilingualText;
    value: BilingualText;
  }[];
}

export interface SkillItem {
  name: string;
  context: BilingualText;
  evidenceSlugs?: string[];
}

export interface SkillCategory {
  id: string;
  title: BilingualText;
  description: BilingualText;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: BilingualText;
  institution: BilingualText;
  location: BilingualText;
  period?: BilingualText;
  note: BilingualText;
}

export interface PublicationItem {
  id: string;
  title: string;
  platform: string;
  date: string;
  url: string;
  summary: BilingualText;
  tags: string[];
}

export interface CertificationNote {
  title: BilingualText;
  description: BilingualText;
  verificationUrl: string;
}

export interface ProfileData {
  name: BilingualText;
  shortName: string;
  initials: string;
  title: BilingualText;
  headline: BilingualText;
  welcomeGreeting: BilingualText;
  welcomeSubtitle: BilingualText;
  avatarUrl: string;
  secondaryPhotoUrl: string;
  location: BilingualText;
  email: string;
  websiteUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  stackoverflowUrl: string;
  devtoUrl: string;
  mediumUrl: string;
  summaryParagraphs: BilingualList;
  focusAreas: BilingualList;
  engineeringValues: {
    title: BilingualText;
    description: BilingualText;
  }[];
  valuePropositions: {
    title: BilingualText;
    description: BilingualText;
    proof: BilingualText;
  }[];
}

export interface RecommendationPrompt {
  id: string;
  prompt: BilingualText;
  shortLabel: BilingualText;
  hint: BilingualText;
  iconName:
    | 'user'
    | 'folder-git'
    | 'briefcase'
    | 'cpu'
    | 'layers'
    | 'rocket'
    | 'check-circle'
    | 'github'
    | 'sparkles'
    | 'mail';
  intentHint?: ChatIntent;
}

export type ChatIntent =
  | 'about'
  | 'projects'
  | 'project-detail'
  | 'experience'
  | 'skills'
  | 'rahkar'
  | 'contributions'
  | 'why-hire'
  | 'github-projects'
  | 'portfolio-different'
  | 'education'
  | 'contact'
  | 'resume'
  | 'greeting'
  | 'unknown';

export type StructuredBlock =
  | { type: 'projects'; slugs: string[]; showViewAll?: boolean }
  | { type: 'project-detail'; slug: string }
  | { type: 'experience'; ids?: string[] }
  | { type: 'skills'; categoryIds?: string[] }
  | { type: 'education' }
  | { type: 'contact' }
  | { type: 'highlights'; items: { title: BilingualText; description: BilingualText; proof?: BilingualText }[] }
  | { type: 'github-overview' }
  | { type: 'resume-cta' };

export interface AssistantResponsePayload {
  intent: ChatIntent;
  content: BilingualText;
  bulletPoints?: BilingualList;
  blocks?: StructuredBlock[];
  followUpIds: string[];
  actionLinks?: {
    label: BilingualText;
    href: string;
    external?: boolean;
  }[];
  sourceMode: 'knowledge-base' | 'ai-grounded';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  createdAt: string;
  payload?: AssistantResponsePayload;
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messages: ChatMessage[];
}

export interface GitHubRepoSummary {
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stargazersCount: number;
  updatedAt: string;
  fork: boolean;
  archived: boolean;
}
