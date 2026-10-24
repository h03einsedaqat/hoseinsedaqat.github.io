import type { Metadata } from 'next';
import React from 'react';
import { ExperiencePageContent } from '@/app/experience/ExperiencePageContent';

export const metadata: Metadata = {
  title: 'Professional Experience',
  description:
    'Work history and engineering outcomes of Hosein Sedaqat across FinTech at Paystar, full-stack ERP architecture, and web development.',
};

export default function ExperiencePage() {
  return (
    <div className="h-full overflow-y-auto">
      <ExperiencePageContent />
    </div>
  );
}
