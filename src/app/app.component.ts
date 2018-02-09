import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-logo></app-logo>
    <h1>Hello world</h1>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
