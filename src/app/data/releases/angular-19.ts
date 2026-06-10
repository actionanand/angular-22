import type { AngularRelease } from '../angular-releases';

export const angular19Release: AngularRelease = {
  key: '19',
  label: 'Angular 19',
  order: 19,
  year: '2024',
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
  ],
};
