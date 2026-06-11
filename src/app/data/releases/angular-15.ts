import type { AngularRelease } from '../angular-releases';

export const angular15Release: AngularRelease = {
  key: '15',
  label: 'Angular 15',
  order: 15,
  year: 'November 18, 2022',
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
    {
      title: 'Standalone router and HttpClient APIs',
      category: 'Migration',
      impact: 'Important',
      description:
        'provideRouter and provideHttpClient made standalone application setup smaller and less NgModule-centered.',
    },
    {
      title: 'Material MDC refactor and CDK Listbox',
      category: 'Accessibility',
      impact: 'Important',
      description:
        'Angular Material moved through a major MDC-based refactor and CDK Listbox improved accessible listbox patterns.',
    },
    {
      title: 'esbuild improvements',
      category: 'Performance',
      impact: 'Important',
      description:
        'Angular 15 continued the esbuild path that later became central to the faster application builder.',
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
