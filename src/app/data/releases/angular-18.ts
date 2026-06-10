import type { AngularRelease } from '../angular-releases';

export const angular18Release: AngularRelease = {
  key: '18',
  label: 'Angular 18',
  order: 18,
  year: '2024',
  theme: 'Zoneless and hydration mature',
  summary:
    'Angular 18 made server rendering more interactive and opened the door to Angular apps that do not depend on Zone.js.',
  features: [
    {
      title: 'Experimental zoneless change detection',
      category: 'Performance',
      impact: 'Major',
      description:
        'Angular began offering a first-class path for apps to run without Zone.js-driven change detection.',
    },
    {
      title: 'Hydration event replay',
      category: 'SSR',
      impact: 'Important',
      description:
        'User interactions that happen before hydration can be captured and replayed once Angular is ready.',
    },
    {
      title: '@let template variables',
      category: 'Templates',
      impact: 'Important',
      description: 'Templates gained a cleaner way to name reusable expression results.',
    },
  ],
  examples: [
    {
      title: 'Zoneless bootstrap',
      language: 'ts',
      code: `bootstrapApplication(App, {
  providers: [provideExperimentalZonelessChangeDetection()],
});`,
      explanation:
        'This preview API showed the direction: signals and explicit notifications can drive UI updates without patching browser APIs.',
    },
  ],
};
