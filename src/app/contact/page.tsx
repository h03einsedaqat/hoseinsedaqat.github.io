import type { Metadata } from 'next';
import React from 'react';
import { ContactPageContent } from '@/app/contact/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Connect with Hosein Sedaqat via direct email, LinkedIn, GitHub, Stack Overflow, or DEV Community.',
};

export default function ContactPage() {
  return (
    <div className="h-full overflow-y-auto">
      <ContactPageContent />
    </div>
  );
}
