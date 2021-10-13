import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <style>
      nav {
        background-color: #eda7fc !important;
      }
      .nav-link.active {
        font-weight: 700 !important;
      }
    </style>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" [routerLink]="['/']">drin.ko</a>
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/drinks']" routerLinkActive="active"
                >Drinks</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                [routerLink]="['/favorites']"
                routerLinkActive="active"
                >Preferiti</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
