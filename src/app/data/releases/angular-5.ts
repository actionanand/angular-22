import type { AngularRelease } from '../angular-releases';

export const angular5Release: AngularRelease = {
  key: '5',
  label: 'Angular 5',
  order: 5,
  year: '2017',
  theme: 'Compiler, HTTP, and forms polish',
  summary:
    'Angular 5 improved the compiler, enabled Build Optimizer by default for CLI production builds, added better internationalized pipes, improved Universal, and moved apps from @angular/http toward HttpClient.',
  features: [
    {
      title: 'Compiler improvements',
      category: 'Compiler',
      impact: 'Major',
      description: 'Angular 5 continued improving compilation output and production optimization.',
    },
    {
      title: 'HttpClient replaces old HTTP API',
      category: 'Migration',
      impact: 'Major',
      description:
        '@angular/common/http introduced HttpClient as the modern replacement for @angular/http, including typed responses and no manual res.json() mapping.',
    },
    {
      title: 'Build Optimizer by default',
      category: 'Performance',
      impact: 'Important',
      description:
        'CLI production builds used Build Optimizer to reduce bundle size and improve tree shaking.',
    },
    {
      title: 'Forms updateOn blur and submit',
      category: 'Forms',
      impact: 'Important',
      description:
        'Reactive forms gained updateOn options so validation and value updates could happen on blur or submit rather than every input event.',
    },
    {
      title: 'Universal transfer state',
      category: 'SSR',
      impact: 'Important',
      description:
        'Angular Universal gained TransferState support for passing server-rendered data to the client.',
    },
    {
      title: 'RxJS 5.5 and router events',
      category: 'Routing',
      impact: 'Important',
      description:
        'Angular 5 supported RxJS 5.5 and added router lifecycle events that helped teams observe navigation.',
    },
  ],
  examples: [
    {
      title: 'HttpClient response usage',
      language: 'ts',
      code: `readonly users$ = this.http.get<User[]>('/api/users');`,
      explanation:
        'HttpClient returns parsed JSON by default, so the old map(res => res.json()) pattern was no longer needed.',
    },
  ],
};
