import type { AngularRelease } from '../angular-releases';

export const angular14Release: AngularRelease = {
  key: '14',
  label: 'Angular 14',
  order: 14,
  year: 'June 2, 2022',
  theme: 'Typed forms and standalone preview',
  summary:
    'Angular 14 introduced two ideas that reshaped modern Angular: strictly typed reactive forms and standalone components.',
  features: [
    {
      title: 'Strictly typed reactive forms',
      category: 'Forms',
      impact: 'Major',
      description:
        'Reactive forms became type-safe by default, reducing a long-standing source of any-shaped bugs.',
    },
    {
      title: 'Standalone components developer preview',
      category: 'Migration',
      impact: 'Major',
      description:
        'Components, directives, and pipes could declare their own imports without an NgModule wrapper.',
    },
    {
      title: 'inject() function',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Dependency injection became usable outside constructor parameters, enabling more functional Angular APIs.',
    },
    {
      title: 'Untyped forms migration path',
      category: 'Forms',
      impact: 'Migration',
      description:
        'Existing forms could be migrated to UntypedFormGroup, UntypedFormControl, and related aliases when teams were not ready for strict typed forms.',
    },
    {
      title: 'ES2020 compilation target',
      category: 'Tooling',
      impact: 'Important',
      description:
        'The TypeScript compilation target moved forward, matching the modern JavaScript baseline Angular was adopting.',
    },
  ],
  examples: [
    {
      title: 'Typed form value inference',
      language: 'ts',
      code: `const login = new FormGroup({
  email: new FormControl('', { nonNullable: true }),
  password: new FormControl('', { nonNullable: true }),
});

const email = login.controls.email.value;`,
      explanation:
        'The email value is inferred as string instead of any, so refactors and validators get real type support.',
    },
  ],
};
