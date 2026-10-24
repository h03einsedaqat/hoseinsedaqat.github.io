import React from 'react';
import { ChatWorkspace } from '@/components/chat/ChatWorkspace';

export default function HomePage() {
  return (
    <>
      {/* Bilingual crawlable identity summary for English & Persian search indexing */}
      <section className="sr-only">
        <h2>Hosein Sedaqat (حسین صداقت) — Full-Stack Developer</h2>
        <p>
          Hosein Sedaqat is a Full-Stack Developer with 5 years of experience building FinTech and
          SaaS web applications with React, Next.js, Vue.js, Nuxt.js, Node.js, and TypeScript.
          Former Front-End Developer at Paystar (4,000+ active users) and creator of Rahkar ERP,
          EchShopy, Wavezon, Neweet, EchGram, and EchMail. Bachelor of Industrial Engineering at
          University of Sistan and Baluchestan.
        </p>
        <p lang="fa" dir="rtl">
          حسین صداقت توسعه‌دهنده فول‌استک (Full-Stack Developer) با ۵ سال تجربه حرفه‌ای در ساخت
          وب‌اپلیکیشن‌های فین‌تک و SaaS با React، Next.js، Vue.js، Node.js و TypeScript است. سابقه
          همکاری با شرکت فین‌تک پی‌استار (Paystar)، ساخت اپلیکیشن حسابداری مانگرو (+۱۵٬۰۰۰ نصب در
          کافه‌بازار) و توسعه سامانه ۱۶ ماژوله راهکار (Rahkar ERP). فارغ‌التحصیل کارشناسی مهندسی
          صنایع از دانشگاه سیستان و بلوچستان.
        </p>
      </section>
      <ChatWorkspace />
    </>
  );
}
