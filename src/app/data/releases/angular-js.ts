import type { AngularRelease } from '../angular-releases';

export const angularJsRelease: AngularRelease = {
  key: 'angularjs',
  label: 'AngularJS',
  order: 1,
  year: 'October 20, 2010 to April 7, 2022',
  theme: 'Angular 1.x era',
  summary:
    'AngularJS, also called Angular 1.x, was the original Google framework for building Single Page Applications with HTML templates and JavaScript. It was first released as v0.9.0 on Wednesday, October 20, 2010, reached production-ready v1.0.0 on Thursday, June 14, 2012, had official EOL on Friday, December 31, 2021, and its final official release was v1.8.3 on Thursday, April 7, 2022.',
  features: [
    {
      title: 'AngularJS and Angular are different',
      category: 'Migration',
      impact: 'Major',
      description:
        'AngularJS is Angular 1.x. Modern Angular, starting with Angular 2, is a separate TypeScript-based framework with a different architecture, compiler, and component model.',
    },
    {
      title: 'JavaScript, MVC, and MVVM patterns',
      category: 'Tooling',
      impact: 'Important',
      description:
        'AngularJS helped teams structure browser apps with controllers, templates, dependency injection, and scope-based state. It is commonly discussed through MVC (Model-View-Controller) and MVVM (Model-View-ViewModel) architecture lenses.',
    },
    {
      title: 'Two-way data binding',
      category: 'Templates',
      impact: 'Major',
      description:
        'ng-model connected input state and template output directly. This made small SPAs productive, but large watcher-heavy apps could become expensive to update.',
    },
    {
      title: 'Directives and scope',
      category: 'Templates',
      impact: 'Important',
      description:
        'AngularJS used directives such as ng-repeat and ng-if, controllers, $scope, and dependency injection to organize UI behavior.',
    },
    {
      title: 'Digest cycle performance limits',
      category: 'Performance',
      impact: 'Migration',
      description:
        'The digest cycle repeatedly checked watchers for changes. As apps grew, more watchers meant slower updates and harder performance tuning.',
    },
    {
      title: 'Why AngularJS was rewritten',
      category: 'Migration',
      impact: 'Major',
      description:
        'By 2014 and 2015, large apps needed stronger mobile performance, component architecture, modern JavaScript and TypeScript tooling, and a cleaner scaling model than AngularJS could easily adopt.',
    },
    {
      title: 'React, Vue, and mobile changed expectations',
      category: 'Migration',
      impact: 'Important',
      description:
        'React arrived in 2013 and Vue.js in 2014 with component-oriented mental models. At the same time, mobile-first apps made AngularJS performance and architecture limits more visible.',
    },
  ],
  examples: [
    {
      title: 'AngularJS two-way binding',
      language: 'html',
      code: `<div ng-app>
  <input ng-model="name">
  Hello {{name}}
</div>`,
      explanation:
        'ng-model keeps the input and displayed value connected through AngularJS two-way binding.',
    },
    {
      title: 'AngularJS controller style',
      language: 'html',
      code: `<div ng-controller="TodoCtrl as vm">
  <input ng-model="vm.newTodo">
  <button ng-click="vm.add()">Add</button>
</div>`,
      explanation:
        'AngularJS apps often organized behavior with controllers, scope, and JavaScript-driven directives in templates.',
    },
  ],
};
