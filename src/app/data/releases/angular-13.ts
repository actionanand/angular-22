import type { AngularRelease } from '../angular-releases';

export const angular13Release: AngularRelease = {
  key: '13',
  label: 'Angular 13',
  order: 13,
  year: '2021',
  theme: 'Ivy-only Angular',
  summary:
    'Angular 13 removed View Engine and older browser assumptions, which simplified the framework and package format.',
  features: [
    {
      title: 'View Engine removed',
      category: 'Compiler',
      impact: 'Major',
      description:
        'Angular packages no longer needed the old rendering pipeline, reducing compatibility complexity.',
    },
    {
      title: 'Partial-Ivy library format',
      category: 'Compiler',
      impact: 'Major',
      description:
        'Libraries were published in an Ivy-compatible format designed for stable consumption across Angular versions.',
    },
    {
      title: 'IE11 support dropped',
      category: 'Performance',
      impact: 'Migration',
      description: 'Dropping IE11 enabled smaller bundles and cleaner platform assumptions.',
    },
  ],
  examples: [
    {
      title: 'Dynamic component creation simplified',
      language: 'ts',
      code: `const ref = this.viewContainer.createComponent(ProfileCard);`,
      explanation:
        'Ivy removed much of the need for ComponentFactoryResolver in everyday dynamic component code.',
    },
  ],
};
