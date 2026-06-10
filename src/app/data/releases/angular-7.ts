import type { AngularRelease } from '../angular-releases';

export const angular7Release: AngularRelease = {
  key: '7',
  label: 'Angular 7',
  order: 7,
  year: '2018',
  theme: 'Material, CLI prompts, and performance',
  summary:
    'Angular 7 shipped with Angular CLI 7 and Angular Material 7. It focused on performance, CLI prompts, bundle budgets, dependency updates, and the CDK features that made large UI lists and interactions easier.',
  features: [
    {
      title: 'Virtual scrolling',
      category: 'Performance',
      impact: 'Major',
      description:
        'The CDK virtual scroll viewport made long lists practical by rendering only the visible items.',
    },
    {
      title: 'Drag and drop',
      category: 'Templates',
      impact: 'Important',
      description:
        'Angular CDK added drag-and-drop primitives for accessible interactive UI patterns.',
    },
    {
      title: 'CLI prompts',
      category: 'Tooling',
      impact: 'Important',
      description:
        'The CLI began prompting for common setup choices such as routing and styling when running commands like ng new.',
    },
    {
      title: 'Bundle budgets',
      category: 'Performance',
      impact: 'Important',
      description:
        'CLI bundle budgets helped teams catch bundle growth before it reached production.',
    },
    {
      title: 'Angular Elements content projection',
      category: 'Templates',
      impact: 'Important',
      description: 'Angular Elements improved support for content projection scenarios.',
    },
    {
      title: 'Dependency updates',
      category: 'Migration',
      impact: 'Important',
      description: 'Angular 7 aligned with TypeScript 3.1, RxJS 6.3, and Node 10 support.',
    },
  ],
  examples: [
    {
      title: 'CLI prompt workflow',
      language: 'bash',
      code: `ng new dashboard

# CLI asks about routing, stylesheet format, and other setup options.`,
      explanation:
        'Angular 7 made common project decisions more discoverable through CLI prompts and schematics.',
    },
    {
      title: 'CDK virtual scroll',
      language: 'html',
      code: `<cdk-virtual-scroll-viewport itemSize="48">
  <div *cdkVirtualFor="let item of items">{{ item.name }}</div>
</cdk-virtual-scroll-viewport>`,
      explanation:
        'Virtual scrolling was one of the CDK features that helped Angular apps handle large interaction-heavy screens.',
    },
  ],
};
