import type { AngularRelease } from '../angular-releases';

export const angular11Release: AngularRelease = {
  key: '11',
  label: 'Angular 11',
  order: 11,
  year: '2020',
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
  ],
};
