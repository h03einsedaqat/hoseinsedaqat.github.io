import type { Metadata } from 'next';
import React from 'react';
import { ProfileSection } from '@/components/resume/ProfileSection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Hosein Sedaqat (حسین صداقت) — Full-Stack Developer with 5+ years of experience in FinTech & SaaS web applications. معرفی و بیوگرافی حسین صداقت.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <div className="h-full overflow-y-auto">
      <ProfileSection />
    </div>
  );
}
