import { Component, computed, input, signal } from '@angular/core';
import { AngularRelease } from '../../data/angular-releases';
import { FeatureBadge } from '../feature-badge/feature-badge';

interface ComparisonPreset {
  readonly label: string;
  readonly start: string;
  readonly end: string;
}

@Component({
  selector: 'app-compare-panel',
  imports: [FeatureBadge],
  template: `
    <section class="compare" aria-labelledby="compare-title">
      <div class="compare__header">
        <div>
          <p class="compare__eyebrow">Dropdown comparison</p>
          <h2 id="compare-title">Compare Angular releases</h2>
        </div>
        <p>
          Pick any two releases to see what changed between them. The presets cover common questions
          like AngularJS to 2, 4 to 8, 9 vs 10, 9 to 15, and 21.2 to 22.
        </p>
      </div>

      <div class="compare__controls">
        <label>
          From
          <select [value]="startKey()" (change)="setStart($event)">
            @for (release of fromOptions(); track release.key) {
              <option [value]="release.key">{{ release.label }}</option>
            }
          </select>
        </label>

        <label>
          To
          <select [value]="endKey()" [disabled]="toDisabled()" (change)="setEnd($event)">
            @for (release of releases(); track release.key) {
              <option [value]="release.key" [disabled]="isToOptionDisabled(release)">
                {{ release.label }}
              </option>
            }
          </select>
        </label>
      </div>

      <div class="compare__presets" aria-label="Comparison presets">
        @for (preset of presets; track preset.label) {
          <button type="button" (click)="applyPreset(preset)">
            {{ preset.label }}
          </button>
        }
      </div>

      <div class="compare__result">
        <div>
          <h3>{{ startRelease()?.label }} to {{ endRelease()?.label }}</h3>
          <p>{{ comparisonSummary() }}</p>
        </div>
        <div class="compare__numbers" aria-label="Comparison statistics">
          <span>{{ comparedReleases().length }} releases</span>
          <span>{{ majorFeatures().length }} major shifts</span>
          <span>{{ migrationFeatures().length }} migration notes</span>
        </div>
      </div>

      <div class="compare__columns">
        <article>
          <h3>What changed in the target release</h3>
          @if (targetOnlyFeatures().length > 0) {
            <ul>
              @for (feature of targetOnlyFeatures(); track feature.title) {
                <li>
                  <strong>{{ feature.title }}</strong>
                  <span>{{ feature.description }}</span>
                </li>
              }
            </ul>
          } @else {
            <p>The selected releases are the same, so there is no target-only difference.</p>
          }
        </article>

        <article>
          <h3>Summary of the range</h3>
          <ul>
            @for (release of comparedReleases(); track release.key) {
              <li>
                <strong>{{ release.label }}</strong>
                <span>{{ release.theme }}</span>
              </li>
            }
          </ul>
        </article>
      </div>

      @if (majorFeatures().length > 0) {
        <div class="compare__major">
          <h3>Major and migration items in this range</h3>
          <div class="compare__feature-grid">
            @for (feature of highlightedFeatures(); track feature.title) {
              <app-feature-badge [feature]="feature" />
            }
          </div>
        </div>
      }
    </section>
  `,
  styleUrl: './compare-panel.scss',
})
export class ComparePanel {
  readonly releases = input.required<readonly AngularRelease[]>();

  protected readonly presets: readonly ComparisonPreset[] = [
    { label: 'AngularJS to 2', start: 'angularjs', end: '2' },
    { label: '4 to 8', start: '4', end: '8' },
    { label: '9 vs 10', start: '9', end: '10' },
    { label: '9 to 15', start: '9', end: '15' },
    { label: '16 to 17', start: '16', end: '17' },
    { label: '21 to 22', start: '21', end: '22' },
    { label: '21.2 to 22', start: '21.2', end: '22' },
  ];

  protected readonly startKey = signal('21.2');
  protected readonly endKey = signal('22');

  protected readonly sortedReleases = computed(() =>
    [...this.releases()].sort((left, right) => left.order - right.order),
  );

  protected readonly maxOrder = computed(() =>
    Math.max(...this.sortedReleases().map((release) => release.order)),
  );

  protected readonly fromOptions = computed(() =>
    this.sortedReleases().filter((release) => release.order < this.maxOrder()),
  );

  protected readonly startRelease = computed(() => this.findRelease(this.startKey()));

  protected readonly endRelease = computed(() => this.findRelease(this.endKey()));

  protected readonly toDisabled = computed(() => !this.startRelease());

  protected readonly comparedReleases = computed(() => {
    const start = this.startRelease();
    const end = this.endRelease();

    if (!start || !end) {
      return [];
    }

    const low = Math.min(start.order, end.order);
    const high = Math.max(start.order, end.order);

    return this.sortedReleases().filter((release) => release.order >= low && release.order <= high);
  });

  protected readonly rangeFeatures = computed(() =>
    this.comparedReleases().flatMap((release) => release.features),
  );

  protected readonly majorFeatures = computed(() =>
    this.rangeFeatures().filter((feature) => feature.impact === 'Major'),
  );

  protected readonly migrationFeatures = computed(() =>
    this.rangeFeatures().filter((feature) => feature.impact === 'Migration'),
  );

  protected readonly highlightedFeatures = computed(() =>
    this.rangeFeatures().filter((feature) => feature.impact !== 'Important'),
  );

  protected readonly targetOnlyFeatures = computed(() => {
    const start = this.startRelease();
    const end = this.endRelease();

    if (!start || !end || start.key === end.key) {
      return [];
    }

    return end.features;
  });

  protected readonly comparisonSummary = computed(() => {
    const start = this.startRelease();
    const end = this.endRelease();

    if (!start || !end) {
      return 'Choose two releases to compare their feature direction.';
    }

    if (start.key === end.key) {
      return `${start.label} is selected on both sides, so this view shows the release itself rather than a migration path.`;
    }

    if (start.order > end.order) {
      return `${start.label} back to ${end.label} is a reverse comparison. It helps identify what you would lose or need to rewrite when reasoning about older code.`;
    }

    return `${start.label} to ${end.label} moves from ${start.theme.toLowerCase()} to ${end.theme.toLowerCase()}. Focus on the major and migration notes before adopting syntax changes broadly.`;
  });

  protected setStart(event: Event): void {
    const nextStartKey = this.readSelectValue(event, this.startKey());
    this.startKey.set(nextStartKey);
    this.syncEndAfterStart(nextStartKey);
  }

  protected setEnd(event: Event): void {
    const nextEndKey = this.readSelectValue(event, this.endKey());
    const start = this.startRelease();
    const nextEnd = this.findRelease(nextEndKey);

    if (start && nextEnd && nextEnd.order > start.order) {
      this.endKey.set(nextEndKey);
    }
  }

  protected applyPreset(preset: ComparisonPreset): void {
    this.startKey.set(preset.start);
    this.endKey.set(preset.end);
    this.syncEndAfterStart(preset.start);
  }

  protected isToOptionDisabled(release: AngularRelease): boolean {
    const start = this.startRelease();

    return !start || release.order <= start.order;
  }

  private findRelease(key: string): AngularRelease | undefined {
    return this.releases().find((release) => release.key === key);
  }

  private readSelectValue(event: Event, fallback: string): string {
    const select = event.target;

    if (select instanceof HTMLSelectElement) {
      return select.value;
    }

    return fallback;
  }

  private syncEndAfterStart(startKey: string): void {
    const start = this.findRelease(startKey);
    const end = this.endRelease();

    if (!start) {
      return;
    }

    if (end && end.order > start.order) {
      return;
    }

    const nextEnd = this.sortedReleases().find((release) => release.order > start.order);

    if (nextEnd) {
      this.endKey.set(nextEnd.key);
    }
  }
}
