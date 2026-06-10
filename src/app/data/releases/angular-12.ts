import type { AngularRelease } from '../angular-releases';

export const angular12Release: AngularRelease = {
  key: '12',
  label: 'Angular 12',
  order: 12,
  year: '2021',
  theme: 'View Engine heads for retirement',
  summary:
    'Angular 12 marked the old rendering era as legacy and pushed teams further toward Ivy-only packages and modern tooling.',
  features: [
    {
      title: 'View Engine deprecated',
      category: 'Migration',
      impact: 'Major',
      description:
        'The framework clearly signaled that Ivy was the path forward for apps and libraries.',
    },
    {
      title: 'IE11 deprecation path',
      category: 'Migration',
      impact: 'Important',
      description: 'Angular prepared teams to leave Internet Explorer support behind.',
    },
    {
      title: 'Webpack 5 production path',
      category: 'Tooling',
      impact: 'Important',
      description: 'Bundling moved onto newer foundations used by the CLI in later releases.',
    },
  ],
  examples: [
    {
      title: 'Library authors prepared for Ivy',
      language: 'bash',
      code: `ng update @angular/core@12 @angular/cli@12`,
      explanation:
        'For v12-era migrations, the strategic point was preparing app and library code for an Ivy-only future.',
    },
  ],
};
