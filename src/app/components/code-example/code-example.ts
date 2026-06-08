import { Component, input } from '@angular/core';
import { CodeExample } from '../../data/angular-releases';

@Component({
  selector: 'app-code-example',
  template: `
    <article class="example">
      <div class="example__header">
        <h3>{{ example().title }}</h3>
        <span>{{ example().language }}</span>
      </div>
      <pre><code>{{ example().code }}</code></pre>
      <p>{{ example().explanation }}</p>
    </article>
  `,
  styleUrl: './code-example.scss',
})
export class CodeExampleComponent {
  readonly example = input.required<CodeExample>();
}
