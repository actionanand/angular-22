import type { AngularRelease } from '../angular-releases';

export const angular9Release: AngularRelease = {
  key: '9',
  label: 'Angular 9',
  order: 9,
  year: 'February 6, 2020',
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
    {
      title: 'No more entryComponents',
      category: 'Migration',
      impact: 'Important',
      description:
        'Ivy could discover dynamically created components without the old entryComponents metadata used by View Engine.',
    },
    {
      title: 'providedIn platform and any',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Injectable services gained additional providedIn scopes: platform for a platform-wide singleton and any for distinct instances across lazy boundaries.',
    },
    {
      title: 'Component harnesses and Material integrations',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular Material introduced component test harnesses and new Google Maps and YouTube Player components for common integrations.',
    },
    {
      title: 'TypeScript 3.7 support',
      category: 'Tooling',
      impact: 'Important',
      description:
        'Angular 9 aligned with TypeScript 3.7-era language improvements while Ivy improved build errors and debugging.',
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
    {
      title: 'New providedIn scopes',
      language: 'ts',
      code: `@Injectable({ providedIn: 'platform' })
export class SharedShellService {}

@Injectable({ providedIn: 'any' })
export class FeatureScopedService {}`,
      explanation:
        'platform shares a singleton across apps on the page, while any can create separate instances in lazy-loaded areas.',
    },
  ],
};
