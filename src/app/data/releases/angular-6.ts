import type { AngularRelease } from '../angular-releases';

export const angular6Release: AngularRelease = {
  key: '6',
  label: 'Angular 6',
  order: 6,
  year: '2018',
  theme: 'CLI, libraries, and workspace tooling',
  summary:
    'Angular 6 shipped alongside Angular CLI 6 and Angular Material 6. It added ng update, ng add, Angular Elements, Component Dev Kit (CDK) improvements, workspace support, library support, schematics, tree-shakable providers, animation performance improvements, and RxJS 6.',
  features: [
    {
      title: 'ng update and ng add',
      category: 'Tooling',
      impact: 'Major',
      description:
        'The CLI gained commands for guided dependency updates and package-driven setup workflows.',
    },
    {
      title: 'Angular Elements',
      category: 'Tooling',
      impact: 'Major',
      description:
        'Angular components could be packaged as custom elements for use outside a full Angular app.',
    },
    {
      title: 'CLI workspaces and library support',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular CLI workspaces made multi-project repos and library generation first-class workflows.',
    },
    {
      title: 'Schematics',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Schematics provided the programmable code-generation and migration engine behind workflows such as ng add and ng update.',
    },
    {
      title: 'Tree-shakable providers',
      category: 'Performance',
      impact: 'Important',
      description:
        'providedIn made services easier to tree shake and reduced NgModule provider boilerplate.',
    },
    {
      title: 'RxJS 6',
      category: 'Migration',
      impact: 'Important',
      description:
        'Angular 6 moved the ecosystem to RxJS 6, including pipeable operators and migration work for older observable code.',
    },
  ],
  examples: [
    {
      title: 'Tree-shakable service',
      language: 'ts',
      code: `@Injectable({ providedIn: 'root' })
export class UserService {
  readonly users$ = this.http.get<User[]>('/api/users');
}`,
      explanation:
        'providedIn lets Angular register singleton services without adding them to an NgModule providers array.',
    },
  ],
};
