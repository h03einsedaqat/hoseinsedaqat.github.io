import type { Metadata } from 'next';
import React from 'react';
import { ContactPageContent } from '@/app/contact/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Hosein Sedaqat (حسین صداقت) directly via email, LinkedIn, GitHub, or Stack Overflow. راه‌های ارتباطی با حسین صداقت.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <div className="h-full overflow-y-auto">
      <ContactPageContent />
    </div>
  );
}
