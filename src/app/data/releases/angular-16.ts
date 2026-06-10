import type { AngularRelease } from '../angular-releases';

export const angular16Release: AngularRelease = {
  key: '16',
  label: 'Angular 16',
  order: 16,
  year: '2023',
  theme: 'Signals arrive',
  summary:
    'Angular 16 introduced Signals, non-destructive hydration, and lifecycle helpers that pointed to a more reactive framework.',
  features: [
    {
      title: 'Signals developer preview',
      category: 'Reactivity',
      impact: 'Major',
      description:
        'signal(), computed(), and effect() gave Angular a fine-grained reactive primitive.',
    },
    {
      title: 'Required inputs and input transforms',
      category: 'Templates',
      impact: 'Important',
      description: 'Component contracts became easier to express and validate at compile time.',
    },
    {
      title: 'Non-destructive hydration preview',
      category: 'SSR',
      impact: 'Major',
      description:
        'SSR apps could reuse server-rendered DOM instead of tearing it down on the client.',
    },
    {
      title: 'DestroyRef and takeUntilDestroyed',
      category: 'Tooling',
      impact: 'Important',
      description: 'Angular gained cleaner lifecycle cleanup APIs for RxJS and custom resources.',
    },
  ],
  examples: [
    {
      title: 'Signal state',
      language: 'ts',
      code: `readonly count = signal(0);
readonly double = computed(() => this.count() * 2);

increment(): void {
  this.count.update((value) => value + 1);
}`,
      explanation:
        'Signals make state reads explicit with count() and keep derived state pure with computed().',
    },
    {
      title: 'DestroyRef with takeUntilDestroyed',
      language: 'ts',
      code: `private readonly destroyRef = inject(DestroyRef);

ngOnInit(): void {
  this.search.valueChanges
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((term) => this.query.set(term));
}`,
      explanation:
        'DestroyRef gives Angular-owned lifecycle context to cleanup helpers. takeUntilDestroyed completes the observable subscription when the component is destroyed.',
    },
  ],
};
