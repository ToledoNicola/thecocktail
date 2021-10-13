import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <style>
    :host{
      display: block;
      margin-bottom: 20px;
    }
  </style>
    <app-nav> </app-nav>
    <main class="container mt-5">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class AppComponent {}
