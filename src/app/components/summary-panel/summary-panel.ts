import { Component, computed, input } from '@angular/core';
import { sourceLinks, summaryContent } from '../../data/app-content';
import { AngularRelease } from '../../data/angular-releases';

@Component({
  selector: 'app-summary-panel',
  template: `
    <section class="summary" aria-labelledby="summary-title">
      <div>
        <p class="summary__eyebrow">{{ content.eyebrow }}</p>
        <h2 id="summary-title">{{ content.title }}</h2>
        <p>{{ content.description }}</p>
      </div>

      <dl class="summary__stats">
        <div>
          <dt>{{ releases().length }}</dt>
          <dd>{{ content.stats.milestones }}</dd>
        </div>
        <div>
          <dt>{{ majorFeatureCount() }}</dt>
          <dd>{{ content.stats.majorShifts }}</dd>
        </div>
        <div>
          <dt>{{ migrationFeatureCount() }}</dt>
          <dd>{{ content.stats.migrationNotes }}</dd>
        </div>
      </dl>

      <div class="summary__themes">
        @for (theme of content.themes; track theme.title) {
          <article>
            <h3>{{ theme.title }}</h3>
            <p>{{ theme.description }}</p>
          </article>
        }
      </div>

      <div class="summary__sources" [attr.aria-label]="content.sourcesLabel">
        @for (source of sources; track source.href) {
          <a [href]="source.href" target="_blank" rel="noreferrer">
            {{ source.label }}
          </a>
        }
      </div>
    </section>
  `,
  styleUrl: './summary-panel.scss',
})
export class SummaryPanel {
  readonly releases = input.required<readonly AngularRelease[]>();
  protected readonly content = summaryContent;
  protected readonly sources = sourceLinks;

  protected readonly majorFeatureCount = computed(
    () =>
      this.releases()
        .flatMap((release) => release.features)
        .filter((feature) => feature.impact === 'Major').length,
  );

  protected readonly migrationFeatureCount = computed(
    () =>
      this.releases()
        .flatMap((release) => release.features)
        .filter((feature) => feature.impact === 'Migration').length,
  );
}
