import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { ResumeView } from '@/components/resume/ResumeView';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume of Hosein Sedaqat (حسین صداقت) — Full-Stack Developer (React, Next.js, Vue.js, Node.js, TypeScript). رزومه کامل حسین صداقت.',
  alternates: { canonical: '/resume/' },
};

export default function ResumePage() {
  return (
    <div className="h-full overflow-y-auto print:h-auto print:overflow-visible">
      <Suspense fallback={<div className="p-8 text-sm text-ink-muted">Loading resume...</div>}>
        <ResumeView />
      </Suspense>
    </div>
  );
}
