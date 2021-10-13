import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  template: `
    <style>
     a.active{
       background-color: #590076 !important;
     }
    </style>
      <nav class="nav nav-pills flex-column flex-sm-row mb-4">
        <a class="flex-sm-fill text-sm-center nav-link" [routerLink]="['by-name']" routerLinkActive="active"  >Ricerca per nome</a>
        <a class="flex-sm-fill text-sm-center nav-link" [routerLink]="['by-ingredient']" routerLinkActive="active"  >Ricerca per ingrediente</a>
        <a class="flex-sm-fill text-sm-center nav-link" [routerLink]="['by-alcolic']" routerLinkActive="active"  >Filtra per alcolico e non-alcolico</a>
        <a class="flex-sm-fill text-sm-center nav-link" [routerLink]="['by-category']" routerLinkActive="active"  >Filtra per categoria</a>
      </nav>
      <router-outlet></router-outlet>
      <!-- <app-form></app-form>
      <app-lista></app-lista> -->
  `,
})
export class DrinksPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
