import type { AngularRelease } from '../angular-releases';

export const angular9Release: AngularRelease = {
  key: '9',
  label: 'Angular 9',
  order: 9,
  year: '2020',
  theme: 'Ivy becomes the default',
  summary:
    'Angular 9 was the Ivy release: the compiler/runtime changed underneath existing apps and made better type checking and smaller output possible.',
  features: [
    {
      title: 'Ivy default compiler and runtime',
      category: 'Compiler',
      impact: 'Major',
      description:
        'Angular switched from View Engine to Ivy for applications, unlocking smaller bundles, better debugging, and faster compilation paths.',
    },
    {
      title: 'Improved template type checking',
      category: 'Compiler',
      impact: 'Major',
      description:
        'Template errors became easier to catch at build time because Ivy could analyze templates more precisely.',
    },
    {
      title: 'AOT became the normal production posture',
      category: 'Performance',
      impact: 'Important',
      description:
        'Ahead-of-time compilation became the expected path for optimized builds and stronger template validation.',
    },
  ],
  examples: [
    {
      title: 'Stricter templates pay off',
      language: 'html',
      code: `<app-user-card [user]="selectedUser"></app-user-card>`,
      explanation:
        'With Ivy-era template checking, Angular can catch mismatches between component inputs and template bindings earlier.',
    },
  ],
};
