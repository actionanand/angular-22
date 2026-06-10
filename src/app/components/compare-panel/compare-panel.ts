import { Component, computed, input, signal } from '@angular/core';
import { compareContent, comparisonPresets, type ComparisonPreset } from '../../data/app-content';
import { AngularRelease } from '../../data/angular-releases';
import { FeatureBadge } from '../feature-badge/feature-badge';

@Component({
  selector: 'app-compare-panel',
  imports: [FeatureBadge],
  template: `
    <section class="compare" aria-labelledby="compare-title">
      <div class="compare__header">
        <div>
          <p class="compare__eyebrow">{{ content.eyebrow }}</p>
          <h2 id="compare-title">{{ content.title }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="compare__controls">
        <label>
          {{ content.fromLabel }}
          <select [value]="startKey()" (change)="setStart($event)">
            @for (release of fromOptions(); track release.key) {
              <option [value]="release.key">{{ release.label }}</option>
            }
          </select>
        </label>

        <label>
          {{ content.toLabel }}
          <select [value]="endKey()" [disabled]="toDisabled()" (change)="setEnd($event)">
            @for (release of releases(); track release.key) {
              <option [value]="release.key" [disabled]="isToOptionDisabled(release)">
                {{ release.label }}
              </option>
            }
          </select>
        </label>
      </div>

      <div class="compare__presets" [attr.aria-label]="content.presetsLabel">
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
        <div class="compare__numbers" [attr.aria-label]="content.statisticsLabel">
          <span>{{ comparedReleases().length }} {{ content.releasesStat }}</span>
          <span>{{ majorFeatures().length }} {{ content.majorShiftsStat }}</span>
          <span>{{ migrationFeatures().length }} {{ content.migrationNotesStat }}</span>
        </div>
      </div>

      <div class="compare__columns">
        <article>
          <h3>{{ content.targetTitle }}</h3>
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
            <p>{{ content.emptyTarget }}</p>
          }
        </article>

        <article>
          <h3>{{ content.rangeTitle }}</h3>
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
          <h3>{{ content.highlightedTitle }}</h3>
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

  protected readonly content = compareContent;
  protected readonly presets = comparisonPresets;

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
      return this.content.fallbackSummary;
    }

    if (start.key === end.key) {
      return `${start.label} ${this.content.sameReleaseSuffix}`;
    }

    if (start.order > end.order) {
      return `${start.label} ${this.content.reversePrefix} ${end.label} ${this.content.reverseSuffix}`;
    }

    return `${start.label} to ${end.label} moves from ${start.theme.toLowerCase()} to ${end.theme.toLowerCase()}. ${this.content.forwardSuffix}`;
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
