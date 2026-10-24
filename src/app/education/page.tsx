import type { Metadata } from 'next';
import React from 'react';
import { EducationPageContent } from '@/app/education/EducationPageContent';

export const metadata: Metadata = {
  title: 'Education, Credentials & Writing',
  description:
    'Academic background at University of Sistan and Baluchestan, technical articles on DEV Community & Medium, and verified LinkedIn credentials of Hosein Sedaqat.',
};

export default function EducationPage() {
  return (
    <div className="h-full overflow-y-auto">
      <EducationPageContent />
    </div>
  );
}
