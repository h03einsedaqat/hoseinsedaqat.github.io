import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { ResumeView } from '@/components/resume/ResumeView';

export const metadata: Metadata = {
  title: 'Printable Executive Resume',
  description:
    'Single-source printable A4 executive resume of Hosein Sedaqat — Full-Stack Developer.',
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
