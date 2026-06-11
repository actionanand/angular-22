import type { AngularRelease } from '../angular-releases';

export const angular21Release: AngularRelease = {
  key: '21',
  label: 'Angular 21',
  order: 21,
  year: 'November 19, 2025',
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
    {
      title: 'Zoneless default for new projects',
      category: 'Performance',
      impact: 'Major',
      description:
        'New Angular 21 projects no longer included Zone.js by default, while existing projects could migrate when ready.',
    },
    {
      title: 'Vitest default for new projects',
      category: 'Tooling',
      impact: 'Major',
      description:
        'Vitest replaced Karma as the standard test runner for new projects, bringing faster execution and better Vite alignment.',
    },
    {
      title: 'Angular ARIA developer preview',
      category: 'Accessibility',
      impact: 'Major',
      description:
        'Angular ARIA introduced headless accessible component behavior for patterns like accordions, combo boxes, tabs, and menus.',
    },
    {
      title: 'Angular MCP server',
      category: 'Tooling',
      impact: 'Important',
      description:
        'The CLI gained an official MCP server so AI coding tools could inspect and modernize Angular projects with framework-aware context.',
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
    {
      title: 'Signal Forms replace valueChanges subscriptions',
      language: 'ts',
      code: `const emailValue = this.form.fields.email.value();`,
      explanation:
        'Signal Forms expose field values as direct signal reads instead of requiring valueChanges subscriptions for ordinary state access.',
    },
  ],
};
