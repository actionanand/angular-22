import type { AngularRelease } from '../angular-releases';

export const angular21Release: AngularRelease = {
  key: '21',
  label: 'Angular 21',
  order: 21,
  year: '2025',
  theme: 'Signal forms and AI-facing groundwork',
  summary:
    'Angular 21 advanced signal forms, async resources, and tooling groundwork, but several template improvements landed later in 21.2.',
  features: [
    {
      title: 'Signal Forms developer preview',
      category: 'Forms',
      impact: 'Major',
      description:
        'Forms started moving from control objects and observables toward signal-backed form state.',
    },
    {
      title: 'Resource APIs continue evolving',
      category: 'Reactivity',
      impact: 'Important',
      description: 'Async state became more composable before the v22 stabilization push.',
    },
    {
      title: 'Modern testing and tooling defaults',
      category: 'Tooling',
      impact: 'Important',
      description:
        'The CLI kept aligning generated projects with faster builders and newer test tooling.',
    },
  ],
  examples: [
    {
      title: 'Signal form shape',
      language: 'ts',
      code: `readonly credentials = signal({
  email: '',
  password: '',
});

readonly loginForm = form(this.credentials);`,
      explanation:
        'The model is signal state first; the form API layers field status, validation, and submission behavior on top.',
    },
  ],
};
