import type { Metadata } from 'next';
import React from 'react';
import { SkillsPageContent } from '@/app/skills/SkillsPageContent';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills of Hosein Sedaqat (حسین صداقت) — React, Next.js, Vue.js, Nuxt.js, TypeScript, Node.js, PostgreSQL, Jest, Vitest, Docker, and AI Automation. مهارت‌های فنی حسین صداقت.',
  alternates: { canonical: '/skills/' },
};

export default function SkillsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <SkillsPageContent />
    </div>
  );
}
