import { Component, input, output } from '@angular/core';
import { themeSwitcherContent, type ThemeChoice, type ThemeKey } from '../../data/app-content';

@Component({
  selector: 'app-theme-switcher',
  template: `
    <div class="theme-switcher" role="group" [attr.aria-label]="content.ariaLabel">
      <span class="theme-switcher__label">{{ content.label }}</span>

      <div class="theme-switcher__options">
        @for (theme of themes(); track theme.key) {
          <button
            type="button"
            [class.theme-switcher__button--active]="theme.key === selectedTheme()"
            [attr.aria-pressed]="theme.key === selectedTheme()"
            (click)="themeSelected.emit(theme.key)"
          >
            <span class="theme-switcher__swatch" [style.background]="theme.color"></span>
            <span>{{ theme.label }}</span>
          </button>
        }
      </div>
    </div>
  `,
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  readonly themes = input.required<readonly ThemeChoice[]>();
  readonly selectedTheme = input.required<ThemeKey>();
  readonly themeSelected = output<ThemeKey>();
  protected readonly content = themeSwitcherContent;
}
