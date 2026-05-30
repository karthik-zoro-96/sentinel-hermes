/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0d1117',
          card: '#161b22',
          hover: '#1c2128',
        },
        border: {
          DEFAULT: '#30363d',
        },
        text: {
          DEFAULT: '#e6edf3',
          muted: '#8b949e',
          dim: '#6e7681',
        },
        accent: {
          DEFAULT: '#58a6ff',
          light: '#79b8ff',
        },
        success: '#3fb950',
        danger: '#f85149',
        warning: '#d29922',
        info: '#58a6ff',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text.DEFAULT'),
            '--tw-prose-headings': theme('colors.text.DEFAULT'),
            '--tw-prose-links': theme('colors.accent.light'),
            '--tw-prose-bold': theme('colors.text.DEFAULT'),
            '--tw-prose-quotes': theme('colors.text.muted'),
            '--tw-prose-code': theme('colors.text.DEFAULT'),
            '--tw-prose-pre-bg': theme('colors.bg.card'),
            '--tw-prose-pre-code': theme('colors.text.DEFAULT'),
            '--tw-prose-hr': theme('colors.border.DEFAULT'),
            '--tw-prose-bullets': theme('colors.accent.DEFAULT'),
            '--tw-prose-counters': theme('colors.accent.DEFAULT'),
            maxWidth: 'none',
            a: { textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            code: {
              backgroundColor: theme('colors.bg.card'),
              padding: '0.15rem 0.4rem',
              borderRadius: '4px',
              border: `1px solid ${theme('colors.border.DEFAULT')}`,
              fontWeight: '400',
            },
            'code::before': { content: '"" !important' },
            'code::after': { content: '"" !important' },
            pre: {
              backgroundColor: theme('colors.bg.card'),
              border: `1px solid ${theme('colors.border.DEFAULT')}`,
            },
            hr: { borderColor: theme('colors.border.DEFAULT') },
            blockquote: { borderLeftColor: theme('colors.accent.DEFAULT'), fontStyle: 'italic' },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.text.DEFAULT'),
            '--tw-prose-headings': theme('colors.text.DEFAULT'),
            '--tw-prose-links': theme('colors.accent.light'),
            '--tw-prose-bold': theme('colors.text.DEFAULT'),
            '--tw-prose-quotes': theme('colors.text.muted'),
            '--tw-prose-code': theme('colors.text.DEFAULT'),
            '--tw-prose-pre-bg': theme('colors.bg.card'),
            '--tw-prose-pre-code': theme('colors.text.DEFAULT'),
            '--tw-prose-hr': theme('colors.border.DEFAULT'),
            '--tw-prose-bullets': theme('colors.accent.DEFAULT'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};