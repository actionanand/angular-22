import { Component, computed, input } from '@angular/core';
import { AngularRelease, sourceLinks } from '../../data/angular-releases';

@Component({
  selector: 'app-summary-panel',
  template: `
    <section class="summary" aria-labelledby="summary-title">
      <div>
        <p class="summary__eyebrow">Executive summary</p>
        <h2 id="summary-title">Angular 8 to 22 in one scan</h2>
        <p>
          The big story is a move from Ivy modernization to standalone Angular, then signals, then
          signal-first defaults. Angular 21.2 deserves its own stop because arrow functions in
          templates and exhaustive switch checks landed there, not in 21.0.
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
          <h3>Before v14</h3>
          <p>Ivy, AOT, package format, and browser support changes dominate.</p>
        </article>
        <article>
          <h3>v14 to v17</h3>
          <p>Standalone, typed forms, signals, control flow, and defer reshape authoring.</p>
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
