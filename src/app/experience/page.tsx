import type { Metadata } from 'next';
import React from 'react';
import { ExperiencePageContent } from '@/app/experience/ExperiencePageContent';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Work history of Hosein Sedaqat (حسین صداقت) — Full-Stack & Front-End Developer at Paystar, Mangro, Rahkar ERP, and remote engineering teams. سوابق کاری حسین صداقت.',
  alternates: { canonical: '/experience/' },
};

export default function ExperiencePage() {
  return (
    <div className="h-full overflow-y-auto">
      <ExperiencePageContent />
    </div>
  );
}
