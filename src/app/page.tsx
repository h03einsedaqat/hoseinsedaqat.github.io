import React from 'react';
import { ChatWorkspace } from '@/components/chat/ChatWorkspace';

export default function HomePage() {
  return (
    <>
      {/* Crawlable identity summary for search engines with native Persian name disambiguation */}
      <section className="sr-only">
        <h2>Hosein Sedaqat (Persian: حسین صداقت) — Full-Stack Developer</h2>
        <p>
          Hosein Sedaqat (حسین صداقت) is a Full-Stack Developer with 5 years of experience building
          FinTech and SaaS web applications using React, Next.js, Vue.js, Nuxt.js, Node.js, and
          TypeScript. Former Front-End Developer at Paystar (4,000+ active users), co-developer of
          the Mangro accounting app (15,000+ installs), and creator of Rahkar ERP, EchShopy,
          Wavezon, Neweet, EchGram, EchMail, CargoCraft, NovaAdmin, and Tishra Analyzer. Bachelor of
          Science in Industrial Engineering from the University of Sistan and Baluchestan.
        </p>
      </section>
      <ChatWorkspace />
    </>
  );
}
