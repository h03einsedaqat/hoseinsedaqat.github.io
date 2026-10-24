import { NextResponse } from 'next/server';
import { curatedProjects } from '@/data/projects';
import {
  educationItems,
  experienceItems,
  profileData,
  skillCategories,
} from '@/data/resume';

function buildVerifiedSystemPrompt(locale: 'en' | 'fa'): string {
  const projectsText = curatedProjects
    .map(
      (p) =>
        `- ${p.name.en} (${p.statusLabel.en}): ${p.summary.en} | Stack: ${p.technologies.join(', ')} | Repo: ${p.repoUrl}${p.demoUrl ? ` | Demo: ${p.demoUrl}` : ''}`
    )
    .join('\n');

  const expText = experienceItems
    .map(
      (e) =>
        `- ${e.role.en} at ${e.company.en} (${e.period.en}): ${e.summary.en}`
    )
    .join('\n');

  const skillsText = skillCategories
    .map((c) => `- ${c.title.en}: ${c.skills.map((s) => s.name).join(', ')}`)
    .join('\n');

  return [
    `You are the Resume Assistant on ${profileData.shortName}'s Conversational Portfolio.`,
    `Respond in ${locale === 'fa' ? 'Persian (فارسی)' : 'English'}.`,
    'STRICT ACCURACY RULE: Only state facts present in the verified knowledge base below. Never invent jobs, dates, metrics, user counts, or credentials. If something is unknown, state transparently that it is not in the verified portfolio data and suggest reaching out via email or LinkedIn.',
    `Profile: ${profileData.headline.en} | Email: ${profileData.email} | GitHub: ${profileData.githubUrl} | LinkedIn: ${profileData.linkedinUrl}`,
    `Summary: ${profileData.summaryParagraphs.en.join(' ')}`,
    `Experience:\n${expText}`,
    `Projects:\n${projectsText}`,
    `Skills:\n${skillsText}`,
    `Education: ${educationItems.map((ed) => `${ed.degree.en} - ${ed.institution.en}`).join('; ')}`,
  ].join('\n\n');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      message?: string;
      locale?: 'en' | 'fa';
    };

    const message = body.message?.trim();
    const locale = body.locale === 'fa' ? 'fa' : 'en';

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) {
      // No server API key configured — client uses deterministic local Resume Knowledge Base
      return NextResponse.json({ mode: 'local' });
    }

    const baseUrl = (
      process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'
    ).replace(/\/$/, '');
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

    const llmRes = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 450,
        messages: [
          { role: 'system', content: buildVerifiedSystemPrompt(locale) },
          { role: 'user', content: message },
        ],
      }),
    });

    if (!llmRes.ok) {
      return NextResponse.json({ mode: 'local' });
    }

    const data = (await llmRes.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const aiReply = data.choices?.[0]?.message?.content?.trim();

    if (!aiReply) {
      return NextResponse.json({ mode: 'local' });
    }

    return NextResponse.json({
      mode: 'ai',
      aiReply,
    });
  } catch {
    return NextResponse.json({ mode: 'local' });
  }
}
