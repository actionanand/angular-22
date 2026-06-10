import type { AngularRelease } from '../angular-releases';

export const angular20Release: AngularRelease = {
  key: '20',
  label: 'Angular 20',
  order: 20,
  year: '2025',
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
  ],
};
