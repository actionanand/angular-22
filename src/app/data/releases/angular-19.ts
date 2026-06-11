import type { AngularRelease } from '../angular-releases';

export const angular19Release: AngularRelease = {
  key: '19',
  label: 'Angular 19',
  order: 19,
  year: 'November 19, 2024',
  theme: 'Standalone by default',
  summary:
    'Angular 19 made standalone the default mental model and expanded signal-based APIs for app architecture.',
  features: [
    {
      title: 'standalone: true became implicit',
      category: 'Migration',
      impact: 'Major',
      description:
        'New components, directives, and pipes no longer needed standalone: true in their decorators.',
    },
    {
      title: 'Signal inputs, outputs, and queries mature',
      category: 'Reactivity',
      impact: 'Major',
      description:
        'Component APIs moved toward input(), output(), model(), viewChild(), and contentChild().',
    },
    {
      title: 'Incremental hydration developer preview',
      category: 'SSR',
      impact: 'Important',
      description:
        'Angular started hydrating parts of an SSR page on demand instead of all at once.',
    },
    {
      title: 'linkedSignal and resource exploration',
      category: 'Reactivity',
      impact: 'Important',
      description:
        'The framework explored higher-level reactive primitives for dependent state and async data.',
    },
    {
      title: 'HMR enabled by default',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Hot Module Replacement improved edit-refresh workflows and became part of the default local development experience.',
    },
    {
      title: 'Karma deprecation path',
      category: 'Migration',
      impact: 'Migration',
      description:
        'Angular continued moving toward a modern test-runner recommendation as Karma entered its deprecation path.',
    },
    {
      title: 'Material 3 theming and time picker',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular Material advanced its Material 3 theming APIs and added a time-picker component.',
    },
    {
      title: 'AI-assisted migration schematics',
      category: 'Tooling',
      impact: 'Important',
      description:
        'New schematics helped modernize inputs, outputs, queries, inject-based dependency injection, and the new build system.',
    },
  ],
  examples: [
    {
      title: 'Modern component inputs',
      language: 'ts',
      code: `@Component({
  selector: 'app-badge',
  template: '<span>{{ label() }}</span>',
})
export class Badge {
  readonly label = input.required<string>();
}`,
      explanation:
        'In modern Angular, the input function describes a reactive input without decorator metadata or NgModule ceremony.',
    },
    {
      title: 'Linked signal from input',
      language: 'ts',
      code: `readonly userInput = input<User | null>(null);
readonly user = linkedSignal(this.userInput);`,
      explanation:
        'linkedSignal helps derive writable state from reactive inputs without losing the source relationship.',
    },
  ],
};
