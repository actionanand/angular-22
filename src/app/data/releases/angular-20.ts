import type { AngularRelease } from '../angular-releases';

export const angular20Release: AngularRelease = {
  key: '20',
  label: 'Angular 20',
  order: 20,
  year: 'May 28, 2025',
  theme: 'Signal-first APIs stabilize',
  summary:
    'Angular 20 continued the signal-first transition and made modern authoring patterns feel less experimental.',
  features: [
    {
      title: 'Signals as mainstream Angular state',
      category: 'Reactivity',
      impact: 'Major',
      description:
        'The framework guidance increasingly favored signals for local state, derived state, and component contracts.',
    },
    {
      title: 'Resource and httpResource previews',
      category: 'Reactivity',
      impact: 'Important',
      description:
        'Async data began to look like signal state, with status, value, and error represented declaratively.',
    },
    {
      title: 'Zoneless developer experience improves',
      category: 'Performance',
      impact: 'Important',
      description:
        'The APIs and diagnostics around zoneless Angular became more practical for real apps.',
    },
    {
      title: '2025 style guide refresh',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular refreshed its style guide, emphasizing protected template-only members, readonly Angular-initialized fields, and class/style bindings over ngClass and ngStyle.',
    },
    {
      title: 'Signal APIs stable',
      category: 'Reactivity',
      impact: 'Major',
      description:
        'Core signal-adjacent APIs such as effect, linkedSignal, toSignal, toObservable, and render hooks moved into a more stable mainstream posture.',
    },
    {
      title: 'Zoneless developer preview',
      category: 'Performance',
      impact: 'Major',
      description:
        'Zoneless change detection advanced from experimental to developer preview with provideZonelessChangeDetection.',
    },
    {
      title: 'Template expression expansion',
      category: 'Templates',
      impact: 'Important',
      description:
        'Templates gained support for operators and expressions such as exponentiation, in, tagged template literals, and void.',
    },
    {
      title: 'Host binding type checking',
      category: 'Compiler',
      impact: 'Important',
      description:
        'The compiler added type checking for host metadata bindings and listeners, catching mistakes earlier in directive and component definitions.',
    },
  ],
  examples: [
    {
      title: 'Async data as state',
      language: 'ts',
      code: `readonly userId = signal('42');
readonly user = httpResource(() => \`/api/users/\${this.userId()}\`);`,
      explanation:
        'The resource style connects a signal dependency to an async request and exposes loading, value, and error state together.',
    },
    {
      title: 'Zoneless provider rename',
      language: 'ts',
      code: `bootstrapApplication(App, {
  providers: [provideZonelessChangeDetection()],
});`,
      explanation:
        'The renamed provider reflected that zoneless Angular had moved beyond the earliest experimental phase.',
    },
  ],
};
