import type { Metadata } from 'next';
import React from 'react';
import { ProfileSection } from '@/components/resume/ProfileSection';

export const metadata: Metadata = {
  title: 'About & Profile',
  description:
    'Professional summary, full-stack engineering specializations, and software architecture principles of Hosein Sedaqat.',
};

export default function AboutPage() {
  return (
    <div className="h-full overflow-y-auto">
      <ProfileSection />
    </div>
  );
}
