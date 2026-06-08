import { Component, computed, input } from '@angular/core';
import { ReleaseFeature } from '../../data/angular-releases';

@Component({
  selector: 'app-feature-badge',
  template: `
    <article class="feature" [class.feature--major]="feature().impact === 'Major'">
      <div class="feature__meta">
        <span class="feature__category">{{ feature().category }}</span>
        <span class="feature__impact">{{ feature().impact }}</span>
      </div>
      <h3>{{ feature().title }}</h3>
      <p>{{ feature().description }}</p>
      <span class="feature__weight" [attr.aria-label]="weightLabel()">
        {{ weightText() }}
      </span>
    </article>
  `,
  styleUrl: './feature-badge.scss',
})
export class FeatureBadge {
  readonly feature = input.required<ReleaseFeature>();

  protected readonly weightText = computed(() => {
    const impact = this.feature().impact;

    if (impact === 'Major') {
      return 'Big shift';
    }

    if (impact === 'Migration') {
      return 'Plan work';
    }

    return 'Useful change';
  });

  protected readonly weightLabel = computed(() => `${this.feature().title}: ${this.weightText()}`);
}
