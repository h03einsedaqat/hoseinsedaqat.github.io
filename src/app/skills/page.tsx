import type { Metadata } from 'next';
import React from 'react';
import { SkillsPageContent } from '@/app/skills/SkillsPageContent';

export const metadata: Metadata = {
  title: 'Technical Skills',
  description:
    'Evidence-backed frontend, backend, database, testing, and tooling skills of Hosein Sedaqat across React, Next.js, Vue 3, TypeScript, and Node.js.',
};

export default function SkillsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <SkillsPageContent />
    </div>
  );
}
