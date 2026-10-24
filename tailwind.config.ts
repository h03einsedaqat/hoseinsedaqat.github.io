import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-main)',
        sidebar: 'var(--bg-sidebar)',
        elevated: 'var(--bg-elevated)',
        composer: 'var(--bg-composer)',
        'user-bubble': 'var(--bg-user-bubble)',
        hover: 'var(--bg-hover)',
        'sidebar-hover': 'var(--bg-sidebar-hover)',
        active: 'var(--bg-active)',
        ink: 'var(--text-primary)',
        'ink-secondary': 'var(--text-secondary)',
        'ink-muted': 'var(--text-muted)',
        line: 'var(--border-subtle)',
        'line-strong': 'var(--border-strong)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        fa: ['Vazirmatn', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        composer: 'var(--shadow-composer)',
        subtle: 'var(--shadow-subtle)',
      },
    },
  },
  plugins: [],
};

export default config;
