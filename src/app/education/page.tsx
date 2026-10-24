import type { Metadata } from 'next';
import React from 'react';
import { EducationPageContent } from '@/app/education/EducationPageContent';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'Education and certifications of Hosein Sedaqat (حسین صداقت) — B.Sc. Industrial Engineering at University of Sistan and Baluchestan & 6 verified Sololearn credentials. تحصیلات حسین صداقت.',
  alternates: { canonical: '/education/' },
};

export default function EducationPage() {
  return (
    <div className="h-full overflow-y-auto">
      <EducationPageContent />
    </div>
  );
}
