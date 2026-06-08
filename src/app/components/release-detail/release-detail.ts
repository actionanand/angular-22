import { Component, computed, input } from '@angular/core';
import { AngularRelease } from '../../data/angular-releases';
import { CodeExampleComponent } from '../code-example/code-example';
import { FeatureBadge } from '../feature-badge/feature-badge';

@Component({
  selector: 'app-release-detail',
  imports: [CodeExampleComponent, FeatureBadge],
  template: `
    <section class="release" aria-labelledby="release-title">
      <div class="release__intro">
        <p class="release__eyebrow">{{ release().year }} release focus</p>
        <h2 id="release-title">{{ release().label }}: {{ release().theme }}</h2>
        <p>{{ release().summary }}</p>
      </div>

      <div class="release__stats" aria-label="Release feature counts">
        <span>{{ majorCount() }} major</span>
        <span>{{ migrationCount() }} migration</span>
        <span>{{ release().features.length }} total notes</span>
      </div>

      <div class="feature-grid">
        @for (feature of release().features; track feature.title) {
          <app-feature-badge [feature]="feature" />
        }
      </div>

      <div class="examples" aria-label="Code examples">
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

  protected readonly majorCount = computed(
    () => this.release().features.filter((feature) => feature.impact === 'Major').length,
  );

  protected readonly migrationCount = computed(
    () => this.release().features.filter((feature) => feature.impact === 'Migration').length,
  );
}
