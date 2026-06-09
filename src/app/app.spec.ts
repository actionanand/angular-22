import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the release explorer title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Major changes before Angular 8 to Angular 22',
    );
  });

  it('should include the pre Angular 8 history milestone', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('AngularJS');
    expect(compiled.textContent).toContain('Angular 2');
    expect(compiled.textContent).toContain('Angular 3 skipped');
    expect(compiled.textContent).toContain('Before Angular 8');
    expect(compiled.textContent).toContain('AngularJS and Angular are different');
    expect(compiled.textContent).toContain('@angular/router was already 3.x');
  });

  it('should include the Angular 21.2 milestone', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Angular 21.2');
    expect(compiled.textContent).toContain('Arrow functions directly in templates');
  });
});
