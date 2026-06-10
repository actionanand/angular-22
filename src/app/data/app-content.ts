export type ThemeKey = 'green' | 'blue' | 'pink' | 'violet' | 'amber';

export interface ThemeChoice {
  readonly key: ThemeKey;
  readonly label: string;
  readonly color: string;
}

export interface ComparisonPreset {
  readonly label: string;
  readonly start: string;
  readonly end: string;
}

export interface CompareDefaults {
  readonly from: string;
  readonly to: string;
  readonly hideLatestReleaseFromFromDropdown: boolean;
}

export const pageContent = {
  eyebrow: 'Angular release explorer',
  title: 'Major changes before Angular 8 to Angular 22',
  description:
    'A practical, version-by-version guide from AngularJS history to Ivy-era Angular, standalone, signals, modern templates, and Angular 22 signal-first defaults.',
  currentFocusLabel: 'Current focus',
  currentFocusAriaLabel: 'Current focus',
  defaultReleaseKey: '22',
  releasePickerLabel: 'Select a release',
} as const;

export const themeChoices: readonly ThemeChoice[] = [
  { key: 'green', label: 'Green', color: '#188038' },
  { key: 'blue', label: 'Blue', color: '#1967d2' },
  { key: 'pink', label: 'Pink', color: '#c2185b' },
  { key: 'violet', label: 'Violet', color: '#7e3ff2' },
  { key: 'amber', label: 'Amber', color: '#b06000' },
] as const;

export const themeSwitcherContent = {
  label: 'Theme',
  ariaLabel: 'Theme color',
} as const;

export const summaryContent = {
  eyebrow: 'Executive summary',
  title: 'Angular history to 22 in one scan',
  description:
    'AngularJS, also called Angular 1.x, is different from modern Angular 2+. Angular 2 was a rewrite, Angular 3 was skipped to align package versions, and Angular 4 to 7 matured the new platform before Angular 8. Modern Angular then moves through Ivy, standalone APIs, signals, and signal-first defaults. Angular 21.2 deserves its own stop because arrow functions in templates and exhaustive switch checks landed there, not in 21.0.',
  stats: {
    milestones: 'milestones',
    majorShifts: 'major shifts',
    migrationNotes: 'migration notes',
  },
  themes: [
    {
      title: 'Before v8',
      description:
        'AngularJS, Angular 2 rewrite, skipped v3, then Angular 4 to 7 platform maturity.',
    },
    {
      title: 'v8 to v17',
      description:
        'Ivy, typed forms, standalone, signals, control flow, and defer reshape authoring.',
    },
    {
      title: 'v18 to v22',
      description: 'Zoneless, hydration, resources, signal forms, and OnPush become the direction.',
    },
  ],
  sourcesLabel: 'Reference sources',
} as const;

export const releaseTimelineContent = {
  ariaLabel: 'Angular release timeline',
} as const;

export const releaseDetailContent = {
  releaseFocusSuffix: 'release focus',
  featureCountsLabel: 'Release feature counts',
  majorStat: 'major',
  migrationStat: 'migration',
  totalNotesStat: 'total notes',
  examplesLabel: 'Code examples',
} as const;

export const featureBadgeContent = {
  weights: {
    Major: 'Big shift',
    Migration: 'Plan work',
    Important: 'Useful change',
  },
} as const;

export const sourceLinks = [
  {
    label: 'AngularJS official site',
    href: 'https://angularjs.org/',
  },
  {
    label: 'Angular 4 release note',
    href: 'https://blog.ninja-squad.com/2017/03/24/what-is-new-angular-4',
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

export const compareContent = {
  eyebrow: 'Dropdown comparison',
  title: 'Compare Angular releases',
  description:
    'Pick any two releases to see what changed between them. The presets cover common questions like AngularJS to 2, 4 to 8, 9 vs 10, 9 to 15, and 21.2 to 22.',
  fromLabel: 'From',
  toLabel: 'To',
  presetsLabel: 'Comparison presets',
  statisticsLabel: 'Comparison statistics',
  releasesStat: 'releases',
  majorShiftsStat: 'major shifts',
  migrationNotesStat: 'migration notes',
  targetTitle: 'What changed in the target release',
  rangeTitle: 'Summary of the range',
  emptyTarget: 'The selected releases are the same, so there is no target-only difference.',
  highlightedTitle: 'Major and migration items in this range',
  fallbackSummary: 'Choose two releases to compare their feature direction.',
  sameReleaseSuffix:
    'is selected on both sides, so this view shows the release itself rather than a migration path.',
  reversePrefix: 'back to',
  reverseSuffix:
    'is a reverse comparison. It helps identify what you would lose or need to rewrite when reasoning about older code.',
  forwardSuffix: 'Focus on the major and migration notes before adopting syntax changes broadly.',
} as const;

export const compareDefaults: CompareDefaults = {
  from: '21.2',
  to: '22',
  hideLatestReleaseFromFromDropdown: true,
};

export const comparisonPresets: readonly ComparisonPreset[] = [
  { label: 'AngularJS to 2', start: 'angularjs', end: '2' },
  { label: '4 to 8', start: '4', end: '8' },
  { label: '9 vs 10', start: '9', end: '10' },
  { label: '9 to 15', start: '9', end: '15' },
  { label: '16 to 17', start: '16', end: '17' },
  { label: '21 to 22', start: '21', end: '22' },
  { label: '21.2 to 22', start: '21.2', end: '22' },
] as const;
