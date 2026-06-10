import type { AngularRelease } from '../angular-releases';

export const angular22Release: AngularRelease = {
  key: '22',
  label: 'Angular 22',
  order: 22,
  year: '2026',
  theme: 'Signal-first defaults',
  summary:
    'Angular 22 turns many modern ideas into defaults: OnPush, Fetch-backed HTTP, stable signal forms, and stable resource APIs.',
  features: [
    {
      title: 'OnPush by default',
      category: 'Performance',
      impact: 'Major',
      description:
        'Components without an explicit changeDetection now use OnPush, aligning defaults with signals and immutable state patterns.',
    },
    {
      title: 'ChangeDetectionStrategy.Eager keeps old behavior explicit',
      category: 'Migration',
      impact: 'Migration',
      description: 'Apps that depend on eager checking can opt into the old behavior deliberately.',
    },
    {
      title: 'Signal Forms stable',
      category: 'Forms',
      impact: 'Major',
      description: 'Signal-backed form APIs move into the stable surface for production forms.',
    },
    {
      title: 'Resource and httpResource stable',
      category: 'Reactivity',
      impact: 'Major',
      description:
        'Async state has a supported signal-first API for loading, resolved, and error states.',
    },
    {
      title: 'HttpClient uses Fetch by default',
      category: 'Performance',
      impact: 'Important',
      description:
        'The default HTTP backend moves to Fetch, with migration attention needed for upload progress and backend-specific behavior.',
    },
    {
      title: 'Node and TypeScript baseline moves forward',
      category: 'Tooling',
      impact: 'Migration',
      description:
        'Angular 22 requires the newest platform baseline used by this workspace: Node 22.22.3 or newer and TypeScript 6.',
    },
  ],
  examples: [
    {
      title: 'Eager is now explicit',
      language: 'ts',
      code: `@Component({
  selector: 'app-legacy-panel',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<p>{{ legacyValue }}</p>',
})
export class LegacyPanel {
  legacyValue = 0;
}`,
      explanation:
        'In v22, leaving changeDetection unset means OnPush. Use Eager only when a component still relies on old eager checking.',
    },
    {
      title: 'Stable resource-style HTTP',
      language: 'ts',
      code: `readonly search = signal('angular');
readonly results = httpResource(() => ({
  url: '/api/search',
  params: { q: this.search() },
}));`,
      explanation:
        'The request depends on signal state and exposes its own status, so templates can render loading, success, and error paths declaratively.',
    },
  ],
};
