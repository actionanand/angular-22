import type { AngularRelease } from '../angular-releases';

export const angular2Release: AngularRelease = {
  key: '2',
  label: 'Angular 2',
  order: 2,
  year: '2016',
  theme: 'Modern Angular begins',
  summary:
    'Angular 2.0.0 was officially released on September 14, 2016. It was a complete rewrite of AngularJS and introduced the modern Angular platform: TypeScript, components, decorators, dependency injection, RxJS, templates, pipes, and NgModules.',
  features: [
    {
      title: 'Complete rewrite from AngularJS',
      category: 'Migration',
      impact: 'Major',
      description:
        'Angular 2 did not continue AngularJS internals. It replaced controllers and $scope with components, classes, services, and explicit template bindings.',
    },
    {
      title: 'TypeScript-first framework',
      category: 'Tooling',
      impact: 'Major',
      description:
        'Angular moved toward classes, modules, decorators, strong typing, better IDE support, and build-time tooling.',
    },
    {
      title: 'Component architecture',
      category: 'Templates',
      impact: 'Major',
      description:
        'Components became the primary UI building block, replacing the controller-heavy AngularJS style.',
    },
    {
      title: 'Early release path',
      category: 'Migration',
      impact: 'Important',
      description:
        'Angular 2 was announced in January 2014, had a developer preview on April 30, 2015, beta in December 2015, RC1 (Release Candidate 1) in May 2016, and stable release in September 2016.',
    },
  ],
  examples: [
    {
      title: 'Modern Angular component',
      language: 'ts',
      code: `@Component({
  selector: 'app-root',
  template: 'Hello {{ name }}',
})
export class AppComponent {
  name = 'Anand';
}`,
      explanation:
        'Modern Angular templates bind to component class properties instead of $scope, and the component becomes the main unit of UI behavior.',
    },
  ],
};
