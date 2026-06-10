import type { AngularRelease } from '../angular-releases';

export const angular17Release: AngularRelease = {
  key: '17',
  label: 'Angular 17',
  order: 17,
  year: '2023',
  theme: 'New template control flow',
  summary:
    'Angular 17 changed how modern templates look, adding built-in control flow and deferrable views.',
  features: [
    {
      title: 'Built-in control flow',
      category: 'Templates',
      impact: 'Major',
      description:
        '@if, @for, and @switch reduced the need for microsyntax directives like *ngIf and *ngFor.',
    },
    {
      title: 'Deferrable views',
      category: 'Performance',
      impact: 'Major',
      description:
        '@defer let templates define lazy-loaded UI islands with loading, placeholder, and error states.',
    },
    {
      title: 'Application builder modernization',
      category: 'Tooling',
      impact: 'Important',
      description: 'The CLI moved toward faster esbuild and Vite-powered development workflows.',
    },
  ],
  examples: [
    {
      title: 'Modern template flow',
      language: 'html',
      code: `@if (user(); as profile) {
  <h2>{{ profile.name }}</h2>
} @else {
  <p>Choose a user</p>
}

@for (item of items(); track item.id) {
  <app-item [item]="item" />
}`,
      explanation:
        'The new syntax is easier to scan and gives Angular a stronger foundation for template type checking and performance.',
    },
  ],
};
