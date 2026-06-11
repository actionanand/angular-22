import type { AngularRelease } from '../angular-releases';

export const angular8Release: AngularRelease = {
  key: '8',
  label: 'Angular 8',
  order: 8,
  year: 'May 28, 2019',
  theme: 'Modern build output starts',
  summary:
    'Angular 8 made production output more browser-aware and prepared teams for Ivy without forcing the migration yet.',
  features: [
    {
      title: 'Differential loading',
      category: 'Performance',
      impact: 'Major',
      description:
        'CLI builds shipped modern JavaScript to modern browsers and fallback bundles to older browsers, letting each browser choose based on its capabilities.',
    },
    {
      title: 'Dynamic import lazy routes',
      category: 'Routing',
      impact: 'Important',
      description:
        'Lazy route configuration moved toward native dynamic imports, which became the long-term pattern.',
    },
    {
      title: 'Ivy opt-in preview',
      category: 'Compiler',
      impact: 'Migration',
      description:
        'The next compiler and runtime were available for early testing before becoming the default in v9.',
    },
    {
      title: 'Builder APIs in the CLI',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular CLI builder APIs made commands like ng build, ng test, and ng run more customizable.',
    },
    {
      title: 'Workspace APIs',
      category: 'Tooling',
      impact: 'Important',
      description:
        'CLI workspace APIs improved how tools read and update angular.json workspace configuration.',
    },
    {
      title: 'Web worker support',
      category: 'Performance',
      impact: 'Important',
      description:
        'Angular 8 added CLI support for generating and wiring web workers for CPU-heavy browser work.',
    },
    {
      title: 'ng deploy in CLI 8.3',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular CLI 8.3 added ng deploy and refreshed the initial ng new app experience.',
    },
    {
      title: '@ViewChild and @ContentChild static option',
      category: 'Migration',
      impact: 'Migration',
      description:
        'View queries required an explicit second options object with static set to true or false, making query timing clearer before later migrations simplified the API.',
    },
    {
      title: '@angular/http fully replaced',
      category: 'Migration',
      impact: 'Migration',
      description:
        'Apps were expected to use HttpClient from @angular/common/http instead of the older @angular/http package deprecated in Angular 5.',
    },
  ],
  examples: [
    {
      title: 'Lazy route syntax became future-facing',
      language: 'ts',
      code: `const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminRoutes),
  },
];`,
      explanation:
        'The important shift was using native import() for lazy boundaries instead of the old string-based module path.',
    },
    {
      title: 'Generate a web worker',
      language: 'bash',
      code: `ng generate web-worker image-processor`,
      explanation:
        'Angular 8 made web-worker setup easier through the CLI, which helped move expensive browser tasks away from the main UI thread.',
    },
    {
      title: 'Static view query migration',
      language: 'ts',
      code: `@ViewChild(SearchBox, { static: false })
private readonly searchBox?: SearchBox;`,
      explanation:
        'The static flag told Angular whether the query result was needed before change detection ran. Most event-driven UI queries used static: false.',
    },
  ],
};
