import type { Metadata } from 'next';
import React from 'react';
import { ContactPageContent } from '@/app/contact/ContactPageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Contact Hosein Sedaqat (حسین صداقت) directly via email, LinkedIn, GitHub, or Stack Overflow. راه‌های ارتباط با حسین صداقت.',
  path: '/contact/',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Hosein Sedaqat', path: '/' },
  { name: 'Contact', path: '/contact/' },
]);

export default function ContactPage() {
  return (
    <div className="h-full overflow-y-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactPageContent />
    </div>
  );
}
