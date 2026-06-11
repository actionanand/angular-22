import type { AngularRelease } from '../angular-releases';

export const angular13Release: AngularRelease = {
  key: '13',
  label: 'Angular 13',
  order: 13,
  year: 'November 4, 2021',
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
    {
      title: 'Persistent build cache by default',
      category: 'Performance',
      impact: 'Important',
      description:
        'New projects used a persistent build cache by default, significantly improving repeated local and CI build times.',
    },
    {
      title: 'RxJS 7.4 default for new apps',
      category: 'Migration',
      impact: 'Important',
      description:
        'Angular 13 moved newly generated apps toward RxJS 7.4 while preserving compatibility ranges for existing projects.',
    },
    {
      title: 'TypeScript 4.4 support',
      category: 'Tooling',
      impact: 'Important',
      description:
        'The framework aligned with TypeScript 4.4 and continued removing legacy browser assumptions.',
    },
    {
      title: 'Router and forms refinements',
      category: 'Routing',
      impact: 'Important',
      description:
        'The router improved canceled-navigation history behavior, and forms gained easier dynamic validator enablement.',
    },
    {
      title: 'Material accessibility improvements',
      category: 'Accessibility',
      impact: 'Important',
      description:
        'Angular Material components received accessibility improvements while the ecosystem moved away from IE-specific code paths.',
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
    {
      title: 'Dynamic validators',
      language: 'ts',
      code: `this.email.addValidators(Validators.required);
this.email.updateValueAndValidity();`,
      explanation:
        'Angular 13-era forms improvements made runtime validator changes easier to express.',
    },
  ],
};
