import type { AngularRelease } from '../angular-releases';

export const angular11Release: AngularRelease = {
  key: '11',
  label: 'Angular 11',
  order: 11,
  year: 'November 11, 2020',
  theme: 'Developer feedback loop improves',
  summary:
    'Angular 11 focused on build speed, testing ergonomics, and IDE feedback as Ivy matured.',
  features: [
    {
      title: 'Ivy language service preview',
      category: 'Tooling',
      impact: 'Major',
      description:
        'Editor diagnostics and completions moved closer to the compiler that actually builds the app.',
    },
    {
      title: 'Faster tests and builds',
      category: 'Performance',
      impact: 'Important',
      description:
        'The CLI and compiler continued reducing wait time during local development and CI.',
    },
    {
      title: 'Webpack 5 experimentation',
      category: 'Tooling',
      impact: 'Important',
      description: 'The ecosystem began the transition toward newer bundling internals.',
    },
    {
      title: 'Automatic font inlining',
      category: 'Performance',
      impact: 'Important',
      description:
        'The CLI could inline linked fonts during builds, reducing render-blocking requests and improving first paint.',
    },
    {
      title: 'HMR support in the CLI',
      category: 'Tooling',
      impact: 'Important',
      description:
        'ng serve gained easier Hot Module Replacement support through the --hmr option for faster local feedback.',
    },
    {
      title: 'TSLint and Codelyzer deprecated',
      category: 'Migration',
      impact: 'Migration',
      description:
        'The Angular ecosystem moved away from TSLint and Codelyzer, with ESLint becoming the recommended path.',
    },
    {
      title: 'IE9, IE10, and IE Mobile removed',
      category: 'Migration',
      impact: 'Migration',
      description:
        'Angular 11 removed support for IE9, IE10, and IE Mobile while IE11 remained on the deprecation path.',
    },
  ],
  examples: [
    {
      title: 'Async test helper rename',
      language: 'ts',
      code: `beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({ imports: [UserCard] }).compileComponents();
}));`,
      explanation:
        'The old async testing helper was migrated to waitForAsync, making the intent clearer and avoiding confusion with native async functions.',
    },
    {
      title: 'Serve with HMR',
      language: 'bash',
      code: `ng serve --hmr`,
      explanation: 'Hot Module Replacement helped preserve more app state during local edits.',
    },
  ],
};
