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
  it('provides exactly the 10 starter recommendation prompts in English & Persian', () => {
    expect(recommendationPrompts).toHaveLength(10);
    expect(recommendationPrompts.map((p) => p.prompt.en)).toEqual([
      'Tell me about yourself',
      'Explore my projects',
      'Show me my professional experience',
      'What are my strongest technical skills?',
      'Tell me about Rahkar ERP',
      'How have I contributed to real products?',
      'Why should your team hire me?',
      'Show me my GitHub projects',
      'What makes my portfolio different?',
      'How can you contact me?',
    ]);
  });

  it('answers every starter prompt with a relevant non-unknown intent in both EN and FA', () => {
    for (const item of recommendationPrompts) {
      const enRes = generateLocalAssistantResponse(item.prompt.en);
      const faRes = generateLocalAssistantResponse(item.prompt.fa);

      expect(enRes.intent).not.toBe('unknown');
      expect(faRes.intent).not.toBe('unknown');
      expect(enRes.content.en.length).toBeGreaterThan(30);
      expect(faRes.content.fa.length).toBeGreaterThan(30);
    }
  });

  it('returns detailed architecture & live demo link when asked about Rahkar ERP', () => {
    const res = generateLocalAssistantResponse('Tell me about Rahkar ERP');
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
    expect(uiTranslations.fa.navEducation).toBe('تحصیلات');
    expect(uiTranslations.en.navResume).toBe('Resume');
    expect(uiTranslations.fa.navResume).toBe('رزومه');
  });
});
