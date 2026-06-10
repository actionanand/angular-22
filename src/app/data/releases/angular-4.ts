import type { AngularRelease } from '../angular-releases';

export const angular4Release: AngularRelease = {
  key: '4',
  label: 'Angular 4',
  order: 4,
  year: '2017',
  theme: 'Smaller and faster Angular',
  summary:
    'Angular 4 stabilized the new platform after the Angular 2 rewrite. It reduced generated code size, improved compilation, moved animations out of @angular/core, added template improvements, and supported newer TypeScript versions.',
  features: [
    {
      title: 'Smaller generated code',
      category: 'Performance',
      impact: 'Major',
      description:
        'Angular 4 reduced generated code size significantly for many templates, with some cases seeing output shrink by up to 60%.',
    },
    {
      title: 'Faster compilation',
      category: 'Compiler',
      impact: 'Important',
      description:
        'Compiler improvements helped reduce feedback time and made errors easier to understand.',
    },
    {
      title: '*ngIf else syntax',
      category: 'Templates',
      impact: 'Important',
      description:
        'Templates could express else cases directly with *ngIf, reducing small conditional workarounds.',
    },
    {
      title: 'Renderer2',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Renderer2 became the supported renderer abstraction for DOM work that needs to stay platform-aware.',
    },
    {
      title: 'Animations moved out of core',
      category: 'Performance',
      impact: 'Important',
      description:
        'Animations were pulled out of @angular/core so apps could avoid extra production code unless they imported the browser animations package.',
    },
    {
      title: 'Email validator and TypeScript support',
      category: 'Forms',
      impact: 'Important',
      description:
        'Angular 4 added a built-in email validator and supported newer TypeScript versions beyond the Angular 2 baseline.',
    },
  ],
  examples: [
    {
      title: '*ngIf with else',
      language: 'html',
      code: `<p *ngIf="isLoggedIn; else loggedOut">Welcome back</p>

<ng-template #loggedOut>
  <p>Please sign in</p>
</ng-template>`,
      explanation:
        'This was a practical template improvement before Angular 17 introduced the modern @if control flow syntax.',
    },
  ],
};
