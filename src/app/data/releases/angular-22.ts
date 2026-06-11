import type { AngularRelease } from '../angular-releases';

export const angular22Release: AngularRelease = {
  key: '22',
  label: 'Angular 22',
  order: 22,
  year: 'June 3, 2026',
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
      title: 'Signal Forms touch propagation',
      category: 'Forms',
      impact: 'Important',
      description:
        'markAsTouched now marks a field and all descendants as touched by default, with skipDescendants available when field-only behavior is needed.',
    },
    {
      title: 'ControlValueAccessor bridge for Signal Forms',
      category: 'Forms',
      impact: 'Migration',
      description:
        'Legacy ControlValueAccessor components can work with Signal Forms, including validation errors produced through NG_VALIDATORS.',
    },
    {
      title: 'FormValueControl bridges both form systems',
      category: 'Forms',
      impact: 'Major',
      description:
        'Custom controls written with FormValueControl can be used from Signal Forms, reactive forms, and template-driven forms, and can implement reset behavior.',
    },
    {
      title: 'Resource and httpResource stable',
      category: 'Reactivity',
      impact: 'Major',
      description:
        'Async state has a supported signal-first API for loading, resolved, and error states.',
    },
    {
      title: 'Resource chaining and SSR cache IDs',
      category: 'Reactivity',
      impact: 'Important',
      description:
        'Stable resources gained chain() for dependent async state and cache IDs so resource and rxResource results can hydrate from SSR without flashing through loading.',
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
    {
      title: 'strictTemplates by default',
      category: 'Compiler',
      impact: 'Major',
      description:
        'New Angular 22 projects enable strict template type checking by default, with migrations preserving old behavior for upgraded apps when needed.',
    },
    {
      title: 'Optional chaining semantics align with TypeScript',
      category: 'Templates',
      impact: 'Migration',
      description:
        "Template optional chaining now follows TypeScript semantics more closely, returning undefined instead of Angular's older null behavior.",
    },
    {
      title: '@defer idle timeout',
      category: 'Performance',
      impact: 'Important',
      description:
        '@defer idle triggers can specify a timeout so deferred work is not stuck waiting forever for an idle callback.',
    },
    {
      title: 'Incremental hydration default for SSR',
      category: 'SSR',
      impact: 'Major',
      description:
        'Incremental hydration became the default server-rendering hydration strategy, with opt-out migration support for existing apps.',
    },
    {
      title: 'Angular ARIA generally available',
      category: 'Accessibility',
      impact: 'Major',
      description:
        'The @angular/aria package moved out of developer preview and became production-ready, including better Signal Forms integration.',
    },
    {
      title: 'AI and WebMCP tooling',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular 22 expanded AI-aware tooling with Angular skills, DevTools graph exposure, and experimental WebMCP APIs for app and form tools.',
    },
    {
      title: 'Vitest migration and unit-test builder options',
      category: 'Tooling',
      impact: 'Important',
      description:
        'CLI migrations improved Karma-to-Vitest and Jasmine-to-Vitest conversion, while the unit-test builder gained quiet and isolate options.',
    },
    {
      title: 'Build chunk optimization default',
      category: 'Performance',
      impact: 'Important',
      description:
        'Lazy chunk optimization became enabled by default for production builds, reducing excessive lazy chunk fragmentation.',
    },
    {
      title: 'injectAsync for lazy dependencies',
      category: 'Performance',
      impact: 'Important',
      description:
        'injectAsync allows services or other dependencies to be loaded lazily with dynamic imports, keeping initial bundles smaller while preserving Angular DI ergonomics.',
    },
    {
      title: '@Service decorator',
      category: 'Tooling',
      impact: 'Major',
      description:
        '@Service is a concise root-provided service decorator generated by the CLI in Angular 22, with autoProvided: false available when a service should not be registered automatically.',
    },
    {
      title: 'Router input binding options',
      category: 'Routing',
      impact: 'Important',
      description:
        'withComponentInputBinding gained configuration for query parameter binding and unmatched input behavior, and RouterLink continued expanding browser URL control.',
    },
    {
      title: 'Router inheritance and canMatch changes',
      category: 'Migration',
      impact: 'Migration',
      description:
        'Route params inheritance now defaults to always, and canMatch functions gained a required currentSnapshot parameter with migration support.',
    },
    {
      title: 'Compiler catches duplicate API names',
      category: 'Compiler',
      impact: 'Important',
      description:
        'The compiler reports duplicate aliased inputs, outputs, and models, plus multiple components matching the same element before runtime.',
    },
    {
      title: 'TestBed.getLastFixture',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Tests can retrieve the most recently created fixture with TestBed.getLastFixture, reducing boilerplate in shared setup patterns.',
    },
    {
      title: 'SSR response-size controls',
      category: 'SSR',
      impact: 'Important',
      description:
        'provideServerRendering accepts options such as maxResponseBodySize, giving server-rendered apps safer response limits.',
    },
    {
      title: 'Dev server PORT support',
      category: 'Tooling',
      impact: 'Important',
      description:
        'The dev server can read process.env.PORT, which takes precedence over the --port flag and angular.json configuration.',
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
    {
      title: 'Resource chaining',
      language: 'ts',
      code: `const userResource = httpResource(() => \`/api/users/\${id()}\`);

const postsResource = httpResource({
  params: ({ chain }) => {
    const user = chain(userResource);
    return { authorId: user.authorId };
  },
  loader: ({ authorId }) => fetchPostsByUserId(authorId),
});`,
      explanation:
        'chain() reads a dependency when it is resolved, or automatically propagates idle, loading, and error states into the dependent resource.',
    },
    {
      title: 'Signal Forms touched descendants',
      language: 'ts',
      code: `const profileForm = form(profileModel);

profileForm.markAsTouched();

profileForm.address.markAsTouched({ skipDescendants: true });`,
      explanation:
        'Calling markAsTouched() now touches child fields too. Pass skipDescendants when only the selected field should be marked.',
    },
    {
      title: 'Concise service declaration',
      language: 'ts',
      code: `@Service()
export class UserService {
  private readonly http = inject(HttpClient);
}`,
      explanation:
        '@Service() covers the common root-provided service case. Services using it should inject dependencies with inject() rather than constructor injection.',
    },
    {
      title: 'Opt out of automatic service registration',
      language: 'ts',
      code: `@Service({ autoProvided: false })
export class AuditLogger {
  private readonly http = inject(HttpClient);
}`,
      explanation:
        'Use autoProvided: false when the service should be declared by a specific provider instead of being root-provided automatically.',
    },
    {
      title: 'Custom control compatibility',
      language: 'html',
      code: `<!-- legacy reactive form -->
<ns-rating formControlName="rating" />

<!-- legacy template-driven form -->
<ns-rating [(ngModel)]="rating" />`,
      explanation:
        'A custom component migrated to FormValueControl can still be consumed by existing reactive and template-driven forms.',
    },
    {
      title: 'Defer with idle timeout',
      language: 'html',
      code: `@defer (on idle(500ms)) {
  <app-heavy-dashboard />
}`,
      explanation:
        'The timeout keeps the browser from waiting indefinitely for an idle period before loading deferred content.',
    },
    {
      title: 'WebMCP form registration',
      language: 'ts',
      code: `protected readonly userForm = form(model, {
  experimentalWebMcpTool: {
    name: 'user_creation',
    description: 'Form to create a new user',
  },
});`,
      explanation:
        'Signal Forms can expose form metadata to experimental WebMCP tooling so agents can understand and operate form workflows.',
    },
    {
      title: 'Lazy service injection',
      language: 'ts',
      code: `private readonly reportService = injectAsync(() =>
  import('./report.service').then((m) => m.ReportService),
);

async exportPdf(): Promise<void> {
  const reportService = await this.reportService();
  await reportService.exportPdf();
}`,
      explanation:
        'injectAsync keeps rarely used dependencies out of the initial bundle while still resolving them through Angular dependency injection.',
    },
    {
      title: 'Lazy service injection with prefetch',
      language: 'ts',
      code: `private readonly reportService = injectAsync(
  () => import('./report.service').then((m) => m.ReportService),
  { prefetch: onIdle },
);`,
      explanation:
        'Prefetching downloads the lazy service bundle in the background, while the service instance is still only requested when the returned function is called.',
    },
    {
      title: 'Default export shortcut for injectAsync',
      language: 'ts',
      code: `private readonly reportService = injectAsync(() =>
  import('./report.service'),
);`,
      explanation:
        'When the service is the default export, injectAsync can use the dynamic import directly. The service still needs to be auto-provided through @Service() or providedIn root.',
    },
    {
      title: 'Router input binding options',
      language: 'ts',
      code: `provideRouter(routes, withComponentInputBinding({
  queryParams: false,
  unmatchedInputBehavior: 'undefinedIfStale',
}));`,
      explanation:
        'Router-bound component inputs can now be configured more precisely for query parameters and unmatched values.',
    },
    {
      title: 'Latest fixture helper',
      language: 'ts',
      code: `beforeEach(() => TestBed.createComponent(UserCard));

it('renders the user', () => {
  const fixture = TestBed.getLastFixture();
  fixture.detectChanges();
});`,
      explanation:
        'This helper is useful when a shared setup creates the component fixture before each test.',
    },
  ],
};
