import type { AngularRelease } from '../angular-releases';

export const angular10Release: AngularRelease = {
  key: '10',
  label: 'Angular 10',
  order: 10,
  year: 'June 24, 2020',
  theme: 'Ecosystem quality release',
  summary:
    'Angular 10 was less flashy than v9, but it tightened defaults, warnings, and project quality for long-lived apps.',
  features: [
    {
      title: 'CommonJS dependency warnings',
      category: 'Tooling',
      impact: 'Important',
      description: 'Builds began warning when CommonJS packages could block advanced optimization.',
    },
    {
      title: 'Stricter project setup option',
      category: 'Migration',
      impact: 'Important',
      description:
        'The CLI made strict TypeScript and Angular checks easier to opt into for new workspaces.',
    },
    {
      title: 'Modern browser defaults',
      category: 'Performance',
      impact: 'Important',
      description:
        'New projects targeted a more modern browser set, reducing legacy output for teams that did not need it.',
    },
    {
      title: 'Angular Material date range picker',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular Material added a date range picker, improving a common enterprise UI workflow.',
    },
    {
      title: 'TypeScript 3.9 and package updates',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular 10 aligned with TypeScript 3.9, tslib 2.0, and TSLint 6 while continuing the move toward stricter projects.',
    },
    {
      title: 'ES5 builds disabled for new projects',
      category: 'Performance',
      impact: 'Migration',
      description:
        'New projects no longer generated ES5 output by default, reducing install and build weight for modern browser targets.',
    },
  ],
  examples: [
    {
      title: 'Strict workspaces became easier to start',
      language: 'bash',
      code: `ng new customer-portal --strict`,
      explanation:
        'The strict option aligned generated projects with stronger TypeScript, template, and bundle-budget checks.',
    },
  ],
};
