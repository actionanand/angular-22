import { Component, computed, signal } from '@angular/core';
import { ComparePanel } from './components/compare-panel/compare-panel';
import { ReleaseDetail } from './components/release-detail/release-detail';
import { ReleaseTimeline } from './components/release-timeline/release-timeline';
import { SummaryPanel } from './components/summary-panel/summary-panel';
import { ThemeSwitcher } from './components/theme-switcher/theme-switcher';
import { pageContent, themeChoices, type ThemeKey } from './data/app-content';
import { AngularRelease, angularReleases } from './data/angular-releases';

@Component({
  selector: 'app-root',
  imports: [ComparePanel, ReleaseDetail, ReleaseTimeline, SummaryPanel, ThemeSwitcher],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly releases = angularReleases;
  protected readonly content = pageContent;
  protected readonly selectedKey = signal('22');
  protected readonly selectedTheme = signal<ThemeKey>('green');
  protected readonly themes = themeChoices;

  protected readonly selectedRelease = computed<AngularRelease>(() => {
    const release = this.releases.find((item) => item.key === this.selectedKey());

    return release ?? this.releases[this.releases.length - 1];
  });

  protected selectRelease(key: string): void {
    this.selectedKey.set(key);
  }

  protected selectTheme(theme: ThemeKey): void {
    this.selectedTheme.set(theme);
  }
}
