export type FeatureCategory =
  | 'Compiler'
  | 'Templates'
  | 'Reactivity'
  | 'Forms'
  | 'Routing'
  | 'SSR'
  | 'Tooling'
  | 'Performance'
  | 'Accessibility'
  | 'Migration';

export interface ReleaseFeature {
  readonly title: string;
  readonly category: FeatureCategory;
  readonly impact: 'Major' | 'Important' | 'Migration';
  readonly description: string;
}

export interface CodeExample {
  readonly title: string;
  readonly language: 'ts' | 'html' | 'bash';
  readonly code: string;
  readonly explanation: string;
}

export interface AngularRelease {
  readonly key: string;
  readonly label: string;
  readonly order: number;
  readonly year: string;
  readonly theme: string;
  readonly summary: string;
  readonly features: readonly ReleaseFeature[];
  readonly examples: readonly CodeExample[];
}

export const angularReleases: readonly AngularRelease[] = [
  {
    key: 'angularjs',
    label: 'AngularJS',
    order: 1,
    year: '2010-2022',
    theme: 'Angular 1.x era',
    summary:
      'AngularJS, also called Angular 1.x, was the original Google framework for building Single Page Applications with HTML templates and JavaScript. It was first released as v0.9.0 on Wednesday, October 20, 2010, reached production-ready v1.0.0 on Thursday, June 14, 2012, had official EOL on Friday, December 31, 2021, and its final official release was v1.8.3 on Thursday, April 7, 2022.',
    features: [
      {
        title: 'AngularJS and Angular are different',
        category: 'Migration',
        impact: 'Major',
        description:
          'AngularJS is Angular 1.x. Modern Angular, starting with Angular 2, is a separate TypeScript-based framework with a different architecture, compiler, and component model.',
      },
      {
        title: 'JavaScript, MVC, and MVVM patterns',
        category: 'Tooling',
        impact: 'Important',
        description:
          'AngularJS helped teams structure browser apps with controllers, templates, dependency injection, and scope-based state. It is commonly discussed through MVC and MVVM architecture lenses.',
      },
      {
        title: 'Two-way data binding',
        category: 'Templates',
        impact: 'Major',
        description:
          'ng-model connected input state and template output directly. This made small SPAs productive, but large watcher-heavy apps could become expensive to update.',
      },
      {
        title: 'Directives and scope',
        category: 'Templates',
        impact: 'Important',
        description:
          'AngularJS used directives such as ng-repeat and ng-if, controllers, $scope, and dependency injection to organize UI behavior.',
      },
      {
        title: 'Digest cycle performance limits',
        category: 'Performance',
        impact: 'Migration',
        description:
          'The digest cycle repeatedly checked watchers for changes. As apps grew, more watchers meant slower updates and harder performance tuning.',
      },
      {
        title: 'Why AngularJS was rewritten',
        category: 'Migration',
        impact: 'Major',
        description:
          'By 2014 and 2015, large apps needed stronger mobile performance, component architecture, modern JavaScript and TypeScript tooling, and a cleaner scaling model than AngularJS could easily adopt.',
      },
      {
        title: 'React, Vue, and mobile changed expectations',
        category: 'Migration',
        impact: 'Important',
        description:
          'React arrived in 2013 and Vue.js in 2014 with component-oriented mental models. At the same time, mobile-first apps made AngularJS performance and architecture limits more visible.',
      },
    ],
    examples: [
      {
        title: 'AngularJS two-way binding',
        language: 'html',
        code: `<div ng-app>
  <input ng-model="name">
  Hello {{name}}
</div>`,
        explanation:
          'ng-model keeps the input and displayed value connected through AngularJS two-way binding.',
      },
      {
        title: 'AngularJS controller style',
        language: 'html',
        code: `<div ng-controller="TodoCtrl as vm">
  <input ng-model="vm.newTodo">
  <button ng-click="vm.add()">Add</button>
</div>`,
        explanation:
          'AngularJS apps often organized behavior with controllers, scope, and JavaScript-driven directives in templates.',
      },
    ],
  },
  {
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
          'Angular 2 was announced in January 2014, had a developer preview on April 30, 2015, beta in December 2015, RC1 in May 2016, and stable release in September 2016.',
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
  },
  {
    key: '3-skipped',
    label: 'Angular 3 skipped',
    order: 3,
    year: '2017',
    theme: 'Version alignment decision',
    summary:
      'Angular 3 was skipped because Angular is developed in a monorepo with separate packages. Core packages like @angular/core and @angular/compiler were at 2.x, while @angular/router had already advanced to 3.x. Releasing Angular 3 would have made package versions confusing, so the team aligned the framework on version 4.',
    features: [
      {
        title: 'Monorepo with separate packages',
        category: 'Tooling',
        impact: 'Important',
        description:
          'Angular is developed in a single repository, but published as separate packages such as @angular/core, @angular/compiler, @angular/forms, and @angular/router.',
      },
      {
        title: '@angular/router was already 3.x',
        category: 'Routing',
        impact: 'Major',
        description:
          'The router package had independent major updates during the Angular 2 era, so it reached version 3 while most core packages were still version 2.',
      },
      {
        title: 'Version 4 synchronized SemVer',
        category: 'Migration',
        impact: 'Major',
        description:
          'Instead of shipping a confusing Angular 3 where package numbers did not line up, Angular moved the main packages to 4.0 together in March 2017.',
      },
      {
        title: 'Predictable release cadence',
        category: 'Migration',
        impact: 'Important',
        description:
          'Modern Angular follows a predictable major-release rhythm, with major versions typically arriving about every six months around May and November.',
      },
    ],
    examples: [
      {
        title: 'The package-version problem',
        language: 'bash',
        code: `@angular/core     2.x
@angular/compiler 2.x
@angular/router   3.x

# Next unified framework version:
@angular/core     4.0
@angular/compiler 4.0
@angular/router   4.0`,
        explanation:
          'Skipping Angular 3 was a versioning and communication choice, not a missing framework generation.',
      },
    ],
  },
  {
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
  },
  {
    key: '5',
    label: 'Angular 5',
    order: 5,
    year: '2017',
    theme: 'Compiler, HTTP, and forms polish',
    summary:
      'Angular 5 improved the compiler, enabled Build Optimizer by default for CLI production builds, added better internationalized pipes, improved Universal, and moved apps from @angular/http toward HttpClient.',
    features: [
      {
        title: 'Compiler improvements',
        category: 'Compiler',
        impact: 'Major',
        description:
          'Angular 5 continued improving compilation output and production optimization.',
      },
      {
        title: 'HttpClient replaces old HTTP API',
        category: 'Migration',
        impact: 'Major',
        description:
          '@angular/common/http introduced HttpClient as the modern replacement for @angular/http, including typed responses and no manual res.json() mapping.',
      },
      {
        title: 'Build Optimizer by default',
        category: 'Performance',
        impact: 'Important',
        description:
          'CLI production builds used Build Optimizer to reduce bundle size and improve tree shaking.',
      },
      {
        title: 'Forms updateOn blur and submit',
        category: 'Forms',
        impact: 'Important',
        description:
          'Reactive forms gained updateOn options so validation and value updates could happen on blur or submit rather than every input event.',
      },
      {
        title: 'Universal transfer state',
        category: 'SSR',
        impact: 'Important',
        description:
          'Angular Universal gained TransferState support for passing server-rendered data to the client.',
      },
      {
        title: 'RxJS 5.5 and router events',
        category: 'Routing',
        impact: 'Important',
        description:
          'Angular 5 supported RxJS 5.5 and added router lifecycle events that helped teams observe navigation.',
      },
    ],
    examples: [
      {
        title: 'HttpClient response usage',
        language: 'ts',
        code: `readonly users$ = this.http.get<User[]>('/api/users');`,
        explanation:
          'HttpClient returns parsed JSON by default, so the old map(res => res.json()) pattern was no longer needed.',
      },
    ],
  },
  {
    key: '6',
    label: 'Angular 6',
    order: 6,
    year: '2018',
    theme: 'CLI, libraries, and workspace tooling',
    summary:
      'Angular 6 shipped alongside Angular CLI 6 and Angular Material 6. It added ng update, ng add, Angular Elements, CDK improvements, workspace support, library support, schematics, tree-shakable providers, animation performance improvements, and RxJS 6.',
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
          'Schematics provided a programmable way to generate and update Angular project code.',
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
  },
  {
    key: '7',
    label: 'Angular 7',
    order: 7,
    year: '2018',
    theme: 'Material, CLI prompts, and performance',
    summary:
      'Angular 7 shipped with Angular CLI 7 and Angular Material 7. It focused on performance, CLI prompts, bundle budgets, dependency updates, and the CDK features that made large UI lists and interactions easier.',
    features: [
      {
        title: 'Virtual scrolling',
        category: 'Performance',
        impact: 'Major',
        description:
          'The CDK virtual scroll viewport made long lists practical by rendering only the visible items.',
      },
      {
        title: 'Drag and drop',
        category: 'Templates',
        impact: 'Important',
        description:
          'Angular CDK added drag-and-drop primitives for accessible interactive UI patterns.',
      },
      {
        title: 'CLI prompts',
        category: 'Tooling',
        impact: 'Important',
        description:
          'The CLI began prompting for common setup choices such as routing and styling when running commands like ng new.',
      },
      {
        title: 'Bundle budgets',
        category: 'Performance',
        impact: 'Important',
        description:
          'CLI bundle budgets helped teams catch bundle growth before it reached production.',
      },
      {
        title: 'Angular Elements content projection',
        category: 'Templates',
        impact: 'Important',
        description: 'Angular Elements improved support for content projection scenarios.',
      },
      {
        title: 'Dependency updates',
        category: 'Migration',
        impact: 'Important',
        description: 'Angular 7 aligned with TypeScript 3.1, RxJS 6.3, and Node 10 support.',
      },
    ],
    examples: [
      {
        title: 'CLI prompt workflow',
        language: 'bash',
        code: `ng new dashboard

# CLI asks about routing, stylesheet format, and other setup options.`,
        explanation:
          'Angular 7 made common project decisions more discoverable through CLI prompts and schematics.',
      },
      {
        title: 'CDK virtual scroll',
        language: 'html',
        code: `<cdk-virtual-scroll-viewport itemSize="48">
  <div *cdkVirtualFor="let item of items">{{ item.name }}</div>
</cdk-virtual-scroll-viewport>`,
        explanation:
          'Virtual scrolling was one of the CDK features that helped Angular apps handle large interaction-heavy screens.',
      },
    ],
  },
  {
    key: 'before-8',
    label: 'Before Angular 8',
    order: 7.5,
    year: '2010-2019',
    theme: 'Context recap',
    summary:
      'Before Angular 8, Angular went through the AngularJS era, a complete Angular 2 rewrite, the Angular 3 version skip, and Angular 4 to 7 platform maturity. This recap box connects that history before the Ivy and modern-build era begins.',
    features: [
      {
        title: 'AngularJS to Angular was a framework change',
        category: 'Migration',
        impact: 'Major',
        description:
          'Angular 2+ intentionally dropped JS from the name and replaced AngularJS architecture with a TypeScript component platform.',
      },
      {
        title: 'Angular 3 was skipped for package clarity',
        category: 'Migration',
        impact: 'Important',
        description:
          'Because @angular/router had already reached 3.x while core packages were 2.x, the team aligned the main packages at 4.0.',
      },
      {
        title: 'Angular 4 to 7 refined the platform',
        category: 'Tooling',
        impact: 'Important',
        description:
          'These releases improved generated code, HttpClient, forms, Universal, CLI workspaces, schematics, libraries, Material/CDK, bundle budgets, and dependency baselines.',
      },
    ],
    examples: [
      {
        title: 'AngularJS versus Angular',
        language: 'html',
        code: `AngularJS 1.x:  ng-repeat, ng-if, ng-model, $scope
Angular 2+:     components, TypeScript, DI, AOT, signals`,
        explanation:
          'The name is similar, but the programming model changed from controller/scope-based JavaScript to component-based TypeScript.',
      },
    ],
  },
  {
    key: '8',
    label: 'Angular 8',
    order: 8,
    year: '2019',
    theme: 'Modern build output starts',
    summary:
      'Angular 8 made production output more browser-aware and prepared teams for Ivy without forcing the migration yet.',
    features: [
      {
        title: 'Differential loading',
        category: 'Performance',
        impact: 'Major',
        description:
          'CLI builds shipped modern JavaScript to modern browsers and fallback bundles to older browsers, letting each browser choose based on its capabilities.',
      },
      {
        title: 'Dynamic import lazy routes',
        category: 'Routing',
        impact: 'Important',
        description:
          'Lazy route configuration moved toward native dynamic imports, which became the long-term pattern.',
      },
      {
        title: 'Ivy opt-in preview',
        category: 'Compiler',
        impact: 'Migration',
        description:
          'The next compiler and runtime were available for early testing before becoming the default in v9.',
      },
      {
        title: 'Builder APIs in the CLI',
        category: 'Tooling',
        impact: 'Important',
        description:
          'Angular CLI builder APIs made commands like ng build, ng test, and ng run more customizable.',
      },
      {
        title: 'Workspace APIs',
        category: 'Tooling',
        impact: 'Important',
        description:
          'CLI workspace APIs improved how tools read and update angular.json workspace configuration.',
      },
      {
        title: 'Web worker support',
        category: 'Performance',
        impact: 'Important',
        description:
          'Angular 8 added CLI support for generating and wiring web workers for CPU-heavy browser work.',
      },
      {
        title: 'ng deploy in CLI 8.3',
        category: 'Tooling',
        impact: 'Important',
        description:
          'Angular CLI 8.3 added ng deploy and refreshed the initial ng new app experience.',
      },
    ],
    examples: [
      {
        title: 'Lazy route syntax became future-facing',
        language: 'ts',
        code: `const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminRoutes),
  },
];`,
        explanation:
          'The important shift was using native import() for lazy boundaries instead of the old string-based module path.',
      },
      {
        title: 'Generate a web worker',
        language: 'bash',
        code: `ng generate web-worker image-processor`,
        explanation:
          'Angular 8 made web-worker setup easier through the CLI, which helped move expensive browser tasks away from the main UI thread.',
      },
    ],
  },
  {
    key: '9',
    label: 'Angular 9',
    order: 9,
    year: '2020',
    theme: 'Ivy becomes the default',
    summary:
      'Angular 9 was the Ivy release: the compiler/runtime changed underneath existing apps and made better type checking and smaller output possible.',
    features: [
      {
        title: 'Ivy default compiler and runtime',
        category: 'Compiler',
        impact: 'Major',
        description:
          'Angular switched from View Engine to Ivy for applications, unlocking smaller bundles, better debugging, and faster compilation paths.',
      },
      {
        title: 'Improved template type checking',
        category: 'Compiler',
        impact: 'Major',
        description:
          'Template errors became easier to catch at build time because Ivy could analyze templates more precisely.',
      },
      {
        title: 'AOT became the normal production posture',
        category: 'Performance',
        impact: 'Important',
        description:
          'Ahead-of-time compilation became the expected path for optimized builds and stronger template validation.',
      },
    ],
    examples: [
      {
        title: 'Stricter templates pay off',
        language: 'html',
        code: `<app-user-card [user]="selectedUser"></app-user-card>`,
        explanation:
          'With Ivy-era template checking, Angular can catch mismatches between component inputs and template bindings earlier.',
      },
    ],
  },
  {
    key: '10',
    label: 'Angular 10',
    order: 10,
    year: '2020',
    theme: 'Ecosystem quality release',
    summary:
      'Angular 10 was less flashy than v9, but it tightened defaults, warnings, and project quality for long-lived apps.',
    features: [
      {
        title: 'CommonJS dependency warnings',
        category: 'Tooling',
        impact: 'Important',
        description:
          'Builds began warning when CommonJS packages could block advanced optimization.',
      },
      {
        title: 'Stricter project setup option',
        category: 'Migration',
        impact: 'Important',
        description:
          'The CLI made strict TypeScript and Angular checks easier to opt into for new workspaces.',
      },
      {
        title: 'Modern browser defaults',
        category: 'Performance',
        impact: 'Important',
        description:
          'New projects targeted a more modern browser set, reducing legacy output for teams that did not need it.',
      },
    ],
    examples: [
      {
        title: 'Strict workspaces became easier to start',
        language: 'bash',
        code: `ng new customer-portal --strict`,
        explanation:
          'The strict option aligned generated projects with stronger TypeScript, template, and bundle-budget checks.',
      },
    ],
  },
  {
    key: '11',
    label: 'Angular 11',
    order: 11,
    year: '2020',
    theme: 'Developer feedback loop improves',
    summary:
      'Angular 11 focused on build speed, testing ergonomics, and IDE feedback as Ivy matured.',
    features: [
      {
        title: 'Ivy language service preview',
        category: 'Tooling',
        impact: 'Major',
        description:
          'Editor diagnostics and completions moved closer to the compiler that actually builds the app.',
      },
      {
        title: 'Faster tests and builds',
        category: 'Performance',
        impact: 'Important',
        description:
          'The CLI and compiler continued reducing wait time during local development and CI.',
      },
      {
        title: 'Webpack 5 experimentation',
        category: 'Tooling',
        impact: 'Important',
        description: 'The ecosystem began the transition toward newer bundling internals.',
      },
    ],
    examples: [
      {
        title: 'Async test helper rename',
        language: 'ts',
        code: `beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({ imports: [UserCard] }).compileComponents();
}));`,
        explanation:
          'The old async testing helper was migrated to waitForAsync, making the intent clearer and avoiding confusion with native async functions.',
      },
    ],
  },
  {
    key: '12',
    label: 'Angular 12',
    order: 12,
    year: '2021',
    theme: 'View Engine heads for retirement',
    summary:
      'Angular 12 marked the old rendering era as legacy and pushed teams further toward Ivy-only packages and modern tooling.',
    features: [
      {
        title: 'View Engine deprecated',
        category: 'Migration',
        impact: 'Major',
        description:
          'The framework clearly signaled that Ivy was the path forward for apps and libraries.',
      },
      {
        title: 'IE11 deprecation path',
        category: 'Migration',
        impact: 'Important',
        description: 'Angular prepared teams to leave Internet Explorer support behind.',
      },
      {
        title: 'Webpack 5 production path',
        category: 'Tooling',
        impact: 'Important',
        description: 'Bundling moved onto newer foundations used by the CLI in later releases.',
      },
    ],
    examples: [
      {
        title: 'Library authors prepared for Ivy',
        language: 'bash',
        code: `ng update @angular/core@12 @angular/cli@12`,
        explanation:
          'For v12-era migrations, the strategic point was preparing app and library code for an Ivy-only future.',
      },
    ],
  },
  {
    key: '13',
    label: 'Angular 13',
    order: 13,
    year: '2021',
    theme: 'Ivy-only Angular',
    summary:
      'Angular 13 removed View Engine and older browser assumptions, which simplified the framework and package format.',
    features: [
      {
        title: 'View Engine removed',
        category: 'Compiler',
        impact: 'Major',
        description:
          'Angular packages no longer needed the old rendering pipeline, reducing compatibility complexity.',
      },
      {
        title: 'Partial-Ivy library format',
        category: 'Compiler',
        impact: 'Major',
        description:
          'Libraries were published in an Ivy-compatible format designed for stable consumption across Angular versions.',
      },
      {
        title: 'IE11 support dropped',
        category: 'Performance',
        impact: 'Migration',
        description: 'Dropping IE11 enabled smaller bundles and cleaner platform assumptions.',
      },
    ],
    examples: [
      {
        title: 'Dynamic component creation simplified',
        language: 'ts',
        code: `const ref = this.viewContainer.createComponent(ProfileCard);`,
        explanation:
          'Ivy removed much of the need for ComponentFactoryResolver in everyday dynamic component code.',
      },
    ],
  },
  {
    key: '14',
    label: 'Angular 14',
    order: 14,
    year: '2022',
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
  },
  {
    key: '15',
    label: 'Angular 15',
    order: 15,
    year: '2022',
    theme: 'Standalone becomes stable',
    summary:
      'Angular 15 made standalone APIs production-ready and pushed the router, images, and Material components forward.',
    features: [
      {
        title: 'Standalone APIs stable',
        category: 'Migration',
        impact: 'Major',
        description:
          'Standalone components, directives, and pipes became a supported architecture for production apps.',
      },
      {
        title: 'Functional router guards',
        category: 'Routing',
        impact: 'Important',
        description:
          'Route guards could be written as functions using inject(), reducing boilerplate services.',
      },
      {
        title: 'NgOptimizedImage',
        category: 'Performance',
        impact: 'Important',
        description: 'Angular added a built-in path for safer, faster static image loading.',
      },
      {
        title: 'Directive composition API',
        category: 'Tooling',
        impact: 'Important',
        description: 'Components could reuse directive behavior through host directives.',
      },
    ],
    examples: [
      {
        title: 'Functional guard',
        language: 'ts',
        code: `export const canOpenAdmin: CanActivateFn = () => {
  const session = inject(SessionService);
  return session.isAdmin();
};`,
        explanation:
          'Standalone-era router APIs made simple route rules feel like functions instead of small one-method classes.',
      },
    ],
  },
  {
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
    ],
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    key: '20',
    label: 'Angular 20',
    order: 20,
    year: '2025',
    theme: 'Signal-first APIs stabilize',
    summary:
      'Angular 20 continued the signal-first transition and made modern authoring patterns feel less experimental.',
    features: [
      {
        title: 'Signals as mainstream Angular state',
        category: 'Reactivity',
        impact: 'Major',
        description:
          'The framework guidance increasingly favored signals for local state, derived state, and component contracts.',
      },
      {
        title: 'Resource and httpResource previews',
        category: 'Reactivity',
        impact: 'Important',
        description:
          'Async data began to look like signal state, with status, value, and error represented declaratively.',
      },
      {
        title: 'Zoneless developer experience improves',
        category: 'Performance',
        impact: 'Important',
        description:
          'The APIs and diagnostics around zoneless Angular became more practical for real apps.',
      },
    ],
    examples: [
      {
        title: 'Async data as state',
        language: 'ts',
        code: `readonly userId = signal('42');
readonly user = httpResource(() => \`/api/users/\${this.userId()}\`);`,
        explanation:
          'The resource style connects a signal dependency to an async request and exposes loading, value, and error state together.',
      },
    ],
  },
  {
    key: '21',
    label: 'Angular 21',
    order: 21,
    year: '2025',
    theme: 'Signal forms and AI-facing groundwork',
    summary:
      'Angular 21 advanced signal forms, async resources, and tooling groundwork, but several template improvements landed later in 21.2.',
    features: [
      {
        title: 'Signal Forms developer preview',
        category: 'Forms',
        impact: 'Major',
        description:
          'Forms started moving from control objects and observables toward signal-backed form state.',
      },
      {
        title: 'Resource APIs continue evolving',
        category: 'Reactivity',
        impact: 'Important',
        description: 'Async state became more composable before the v22 stabilization push.',
      },
      {
        title: 'Modern testing and tooling defaults',
        category: 'Tooling',
        impact: 'Important',
        description:
          'The CLI kept aligning generated projects with faster builders and newer test tooling.',
      },
    ],
    examples: [
      {
        title: 'Signal form shape',
        language: 'ts',
        code: `readonly credentials = signal({
  email: '',
  password: '',
});

readonly loginForm = form(this.credentials);`,
        explanation:
          'The model is signal state first; the form API layers field status, validation, and submission behavior on top.',
      },
    ],
  },
  {
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
  },
  {
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
        description:
          'Apps that depend on eager checking can opt into the old behavior deliberately.',
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
  },
];

export const sourceLinks = [
  {
    label: 'AngularJS official site',
    href: 'https://angularjs.org/',
  },
  {
    label: 'Angular 4 release note',
    href: 'https://blog.angular.io/angular-4-0-0-now-available-2d7d0999a032',
  },
  {
    label: 'Angular version compatibility',
    href: 'https://angular.dev/reference/versions',
  },
  {
    label: 'Angular typed forms guide',
    href: 'https://angular.dev/guide/forms/typed-forms',
  },
  {
    label: 'Angular deferrable views guide',
    href: 'https://angular.dev/guide/templates/defer',
  },
  {
    label: 'Angular template expression syntax',
    href: 'https://angular.dev/guide/templates/expression-syntax',
  },
  {
    label: 'Angular 21.2 release notes',
    href: 'https://newreleases.io/project/github/angular/angular/release/v21.2.0',
  },
  {
    label: 'Angular 22 release overview',
    href: 'https://blog.ninja-squad.com/2026/06/03/what-is-new-angular-22.0',
  },
] as const;
