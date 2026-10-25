import { describe, expect, it } from 'vitest';
import { curatedProjects, featuredProjectSlugs } from '@/data/projects';
import { recommendationPrompts } from '@/data/recommendations';
import {
  certifications,
  educationItems,
  experienceItems,
  externalLinks,
  profileData,
  skillCategories,
} from '@/data/resume';
import { uiTranslations } from '@/data/translations';
import { generateLocalAssistantResponse } from '@/lib/chat-engine';

describe('Resume Knowledge Base & Conversational Engine', () => {
  it('provides 10 natural, human-sounding starter questions in English', () => {
    expect(recommendationPrompts).toHaveLength(10);
    expect(recommendationPrompts.map((p) => p.prompt.en)).toEqual([
      "What's your background?",
      'What projects have you built?',
      'Where have you worked before?',
      "What's your main tech stack?",
      'How does Rahkar ERP work?',
      'What have you shipped to production?',
      'What can you bring to a team?',
      'Can I see your GitHub repos?',
      'Why build a chat-style portfolio?',
      'How can I reach you?',
    ]);
  });

  it('routes every starter prompt to its exact intended topic', () => {
    for (const item of recommendationPrompts) {
      const res = generateLocalAssistantResponse(item.prompt.en);
      expect(res.intent).not.toBe('unknown');
      expect(res.intent).toBe(item.intentHint);
      expect(res.content.en.length).toBeGreaterThan(25);
    }
  });

  it('returns detailed architecture & live demo link when asked about Rahkar ERP', () => {
    const res = generateLocalAssistantResponse('How does Rahkar ERP work?');
    expect(res.intent).toBe('rahkar');
    expect(res.blocks?.some((b) => b.type === 'project-detail' && b.slug === 'rahkar-erp')).toBe(
      true
    );
    expect(res.actionLinks?.some((l) => l.href === 'https://rahkar-erp.netlify.app/')).toBe(true);
  });

  it('does not hallucinate on unknown questions and directs to verified contact channels', () => {
    const res = generateLocalAssistantResponse('Do you have a Mars relocation visa?');
    expect(res.intent).toBe('unknown');
    expect(res.content.en).toContain(profileData.email);
    expect(res.blocks?.some((b) => b.type === 'contact')).toBe(true);
  });

  it('contains zero placeholder Lorem Ipsum or broken # links across all resume data', () => {
    const serialized = JSON.stringify({
      profileData,
      experienceItems,
      curatedProjects,
      skillCategories,
      externalLinks,
    });

    expect(serialized.toLowerCase()).not.toContain('lorem ipsum');

    for (const project of curatedProjects) {
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\/hoseinsedaqat\//);
      if (project.demoUrl) {
        expect(project.demoUrl).toMatch(/^https:\/\//);
      }
      if (project.isCloneOrInspired) {
        expect(project.honestNote?.en.length).toBeGreaterThan(15);
      }
    }

    for (const slug of featuredProjectSlugs) {
      expect(curatedProjects.some((p) => p.slug === slug)).toBe(true);
    }

    // Verified LinkedIn facts & all 6 Sololearn certifications
    expect(experienceItems).toHaveLength(4);
    expect(experienceItems[0].period.en).toContain('Jan 2026');
    const paystar = experienceItems.find((e) => e.id === 'paystar');
    const npa = experienceItems.find((e) => e.id === 'npa-oman');
    expect(paystar?.companyUrl).toBe('https://paystar.ir');
    expect(npa?.company.en).toBe('National Publishing & Advertising (NPA)');
    expect(npa?.companyUrl).toBe('https://npa.om/');
    expect(generateLocalAssistantResponse('Tell me about NPA in Oman').intent).toBe('experience');
    expect(experienceItems[1].period.en).toContain('May 2022 – May 2025');
    expect(educationItems[0].degree.en).toContain('Industrial Engineering');
    expect(certifications).toHaveLength(6);
    expect(certifications.map((c) => c.credentialId)).toEqual([
      'CT-BVO7P03Z',
      '1162-21427246',
      '1082-21427246',
      '21427246-1024',
      '1023-21427246',
      '1014-21427246',
    ]);
    for (const cert of certifications) {
      expect(cert.url).toBe(`https://www.sololearn.com/Certificate/${cert.credentialId}/jpg`);
    }

    // Pinned GitHub projects come first and all projects have cover images
    expect(curatedProjects.slice(0, 6).map((p) => p.slug)).toEqual([
      'rahkar-erp',
      'echshopy',
      'wavezon',
      'neweet',
      'echgram',
      'echmail',
    ]);
    for (const p of curatedProjects) {
      expect(p.imageUrl.length).toBeGreaterThan(5);
    }

    const rahkar = curatedProjects.find((p) => p.slug === 'rahkar-erp');
    const cargocraft = curatedProjects.find((p) => p.slug === 'cargocraft-erp');
    const tishra = curatedProjects.find((p) => p.slug === 'tishra-analyzer');
    expect(rahkar?.imageUrl).toBe('/projects/rahkar-erp.webp');
    expect(rahkar?.screenshots?.length).toBeGreaterThanOrEqual(4);
    expect(cargocraft?.imageUrl).toBe('/projects/cargocraft-erp.webp');
    expect(cargocraft?.screenshots?.length).toBeGreaterThanOrEqual(4);
    expect(tishra?.imageUrl).toBe('/projects/tishra-analyzer.webp');
    expect(tishra?.screenshots?.length).toBeGreaterThanOrEqual(2);

    // Concise nav labels
    expect(uiTranslations.en.navEducation).toBe('Education');
    expect(uiTranslations.en.navResume).toBe('Resume');
  });
});
