import type { AngularRelease } from '../angular-releases';

export const angular15Release: AngularRelease = {
  key: '15',
  label: 'Angular 15',
  order: 15,
  year: '2022',
  theme: 'Standalone becomes stable',
  summary:
    'Angular 15 made standalone APIs production-ready and pushed the router, images, and Material components forward.',
  features: [
    {
      title: 'Standalone APIs stable',
      category: 'Migration',
      impact: 'Major',
      description:
        'Standalone components, directives, and pipes became a supported architecture for production apps.',
    },
    {
      title: 'Functional router guards',
      category: 'Routing',
      impact: 'Important',
      description:
        'Route guards could be written as functions using inject(), reducing boilerplate services.',
    },
    {
      title: 'NgOptimizedImage',
      category: 'Performance',
      impact: 'Important',
      description: 'Angular added a built-in path for safer, faster static image loading.',
    },
    {
      title: 'Directive composition API',
      category: 'Tooling',
      impact: 'Important',
      description: 'Components could reuse directive behavior through host directives.',
    },
  ],
  examples: [
    {
      title: 'Functional guard',
      language: 'ts',
      code: `export const canOpenAdmin: CanActivateFn = () => {
  const session = inject(SessionService);
  return session.isAdmin();
};`,
      explanation:
        'Standalone-era router APIs made simple route rules feel like functions instead of small one-method classes.',
    },
  ],
};
