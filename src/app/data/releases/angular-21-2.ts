import type { AngularRelease } from '../angular-releases';

export const angular21_2Release: AngularRelease = {
  key: '21.2',
  label: 'Angular 21.2',
  order: 21.2,
  year: '2026',
  theme: 'Important minor release',
  summary:
    'Angular 21.2 was a small-version-big-impact release: template expressiveness, switch exhaustiveness, Eager naming, resource snapshots, and Signal Forms improvements landed here, not in 21.0.',
  features: [
    {
      title: 'Arrow functions directly in templates',
      category: 'Templates',
      impact: 'Major',
      description:
        'Single-expression callbacks can now live in template expressions, which is especially useful with signal update functions.',
    },
    {
      title: 'instanceof in templates',
      category: 'Templates',
      impact: 'Important',
      description:
        'Template conditions can narrow values with instanceof instead of moving tiny checks into the component class.',
    },
    {
      title: 'Exhaustive @switch checks',
      category: 'Compiler',
      impact: 'Important',
      description:
        'Templates can opt into exhaustive checking with @default never, catching missing union cases.',
    },
    {
      title: 'ChangeDetectionStrategy.Eager alias',
      category: 'Migration',
      impact: 'Migration',
      description:
        'Eager was introduced as the clearer name for the old Default strategy before OnPush became the default in v22.',
    },
    {
      title: 'Resource snapshots',
      category: 'Reactivity',
      impact: 'Important',
      description:
        'Resource state could be captured and composed as values, making async signal utilities easier to build.',
    },
    {
      title: 'Signal Forms improvements',
      category: 'Forms',
      impact: 'Important',
      description:
        'FormRoot, parsing support, submit options, and Reactive Forms compatibility made signal forms more usable before v22.',
    },
  ],
  examples: [
    {
      title: 'Arrow function in a signal update',
      language: 'html',
      code: `<button type="button" (click)="count.update(n => n + 1)">
  Increment
</button>`,
      explanation:
        'No separate increment() method is required for a tiny signal update. Keep complex logic in computed values, services, or component methods.',
    },
    {
      title: 'Exhaustive switch check',
      language: 'html',
      code: `@switch (status()) {
  @case ('idle') { <p>Idle</p> }
  @case ('loading') { <p>Loading</p> }
  @case ('error') { <p>Error</p> }
  @default never;
}`,
      explanation:
        'If the status union grows, the template type checker can report the missing branch.',
    },
  ],
};
