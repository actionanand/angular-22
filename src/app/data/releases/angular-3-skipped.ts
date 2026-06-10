import type { AngularRelease } from '../angular-releases';

export const angular3SkippedRelease: AngularRelease = {
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
};
