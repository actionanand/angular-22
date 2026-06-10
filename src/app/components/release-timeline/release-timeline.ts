import { Component, input, output } from '@angular/core';
import { releaseTimelineContent } from '../../data/app-content';
import { AngularRelease } from '../../data/angular-releases';

@Component({
  selector: 'app-release-timeline',
  template: `
    <nav class="timeline" [attr.aria-label]="content.ariaLabel">
      @for (release of releases(); track release.key) {
        <button
          type="button"
          [class.timeline__button--active]="release.key === selectedKey()"
          [attr.aria-current]="release.key === selectedKey() ? 'true' : null"
          (click)="selected.emit(release.key)"
        >
          <span>{{ release.label }}</span>
          <small>{{ release.theme }}</small>
        </button>
      }
    </nav>
  `,
  styleUrl: './release-timeline.scss',
})
export class ReleaseTimeline {
  readonly releases = input.required<readonly AngularRelease[]>();
  readonly selectedKey = input.required<string>();
  readonly selected = output<string>();
  protected readonly content = releaseTimelineContent;
}
