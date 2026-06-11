import type { AngularRelease } from '../angular-releases';

export const angular12Release: AngularRelease = {
  key: '12',
  label: 'Angular 12',
  order: 12,
  year: 'May 12, 2021',
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
    {
      title: 'Strict mode by default',
      category: 'Migration',
      impact: 'Important',
      description:
        'New CLI workspaces enabled stricter TypeScript and Angular settings by default to catch mistakes earlier.',
    },
    {
      title: 'Tailwind CSS support',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular CLI made Tailwind CSS setup straightforward for teams using utility-first styling.',
    },
    {
      title: 'HTTP interceptor context',
      category: 'Tooling',
      impact: 'Important',
      description:
        'HttpContext made it possible to pass request metadata to interceptors without ad hoc header or service workarounds.',
    },
    {
      title: 'Nullish coalescing in templates',
      category: 'Templates',
      impact: 'Important',
      description:
        'Templates gained support for the ?? operator, matching a useful TypeScript pattern directly in markup.',
    },
    {
      title: 'Inline Sass in component styles',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Components could use inline Sass inside the styles metadata property, improving parity with external Sass files.',
    },
    {
      title: 'Protractor no longer default',
      category: 'Migration',
      impact: 'Migration',
      description:
        'New projects moved away from Protractor, nudging teams toward alternatives such as Cypress, WebdriverIO, and later modern test runners.',
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
    {
      title: 'Template nullish coalescing',
      language: 'html',
      code: `<p>{{ user.nickname ?? user.name }}</p>`,
      explanation:
        'The ?? operator lets templates fall back only when a value is null or undefined, not when it is an empty string or false.',
    },
  ],
};
