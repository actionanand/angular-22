import { Component, computed, input } from '@angular/core';
import { releaseDetailContent } from '../../data/app-content';
import { AngularRelease } from '../../data/angular-releases';
import { CodeExampleComponent } from '../code-example/code-example';
import { FeatureBadge } from '../feature-badge/feature-badge';

@Component({
  selector: 'app-release-detail',
  imports: [CodeExampleComponent, FeatureBadge],
  template: `
    <section class="release" aria-labelledby="release-title">
      <div class="release__intro">
        <p class="release__eyebrow">{{ release().year }} {{ content.releaseFocusSuffix }}</p>
        <h2 id="release-title">{{ release().label }}: {{ release().theme }}</h2>
        <p>{{ release().summary }}</p>
      </div>

      <div class="release__stats" [attr.aria-label]="content.featureCountsLabel">
        <span>{{ majorCount() }} {{ content.majorStat }}</span>
        <span>{{ migrationCount() }} {{ content.migrationStat }}</span>
        <span>{{ release().features.length }} {{ content.totalNotesStat }}</span>
      </div>

      <div class="feature-grid">
        @for (feature of release().features; track feature.title) {
          <app-feature-badge [feature]="feature" />
        }
      </div>

      <div class="examples" [attr.aria-label]="content.examplesLabel">
        @for (example of release().examples; track example.title) {
          <app-code-example [example]="example" />
        }
      </div>
    </section>
  `,
  styleUrl: './release-detail.scss',
})
export class ReleaseDetail {
  readonly release = input.required<AngularRelease>();
  protected readonly content = releaseDetailContent;

  protected readonly majorCount = computed(
    () => this.release().features.filter((feature) => feature.impact === 'Major').length,
  );

  protected readonly migrationCount = computed(
    () => this.release().features.filter((feature) => feature.impact === 'Migration').length,
  );
}
