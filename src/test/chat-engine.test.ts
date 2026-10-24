import { describe, expect, it } from 'vitest';
import { curatedProjects, featuredProjectSlugs } from '@/data/projects';
import { recommendationPrompts } from '@/data/recommendations';
import { experienceItems, externalLinks, profileData, skillCategories } from '@/data/resume';
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
  });
});
