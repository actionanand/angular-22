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

export { angularReleases } from './releases/index';
