import { Component, computed, input } from '@angular/core';
import { AngularRelease, sourceLinks } from '../../data/angular-releases';

@Component({
  selector: 'app-summary-panel',
  template: `
    <section class="summary" aria-labelledby="summary-title">
      <div>
        <p class="summary__eyebrow">Executive summary</p>
        <h2 id="summary-title">Angular history to 22 in one scan</h2>
        <p>
          AngularJS, also called Angular 1.x, is different from modern Angular 2+. Angular 3 was
          skipped to align package versions, especially the router. After that, the big story moves
          through Ivy modernization, standalone Angular, signals, and signal-first defaults. Angular
          21.2 deserves its own stop because arrow functions in templates and exhaustive switch
          checks landed there, not in 21.0.
        </p>
      </div>

      <dl class="summary__stats">
        <div>
          <dt>{{ releases().length }}</dt>
          <dd>milestones</dd>
        </div>
        <div>
          <dt>{{ majorFeatureCount() }}</dt>
          <dd>major shifts</dd>
        </div>
        <div>
          <dt>{{ migrationFeatureCount() }}</dt>
          <dd>migration notes</dd>
        </div>
      </dl>

      <div class="summary__themes">
        <article>
          <h3>Before v8</h3>
          <p>AngularJS split, Angular 2 rewrite, skipped v3, then CLI and platform maturity.</p>
        </article>
        <article>
          <h3>v8 to v17</h3>
          <p>Ivy, typed forms, standalone, signals, control flow, and defer reshape authoring.</p>
        </article>
        <article>
          <h3>v18 to v22</h3>
          <p>Zoneless, hydration, resources, signal forms, and OnPush become the direction.</p>
        </article>
      </div>

      <div class="summary__sources" aria-label="Reference sources">
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
