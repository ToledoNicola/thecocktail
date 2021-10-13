import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';
import { DrinksModule } from '../drinks/drinks.module';


@NgModule({
  declarations: [
    FavoritesPage
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    DrinksModule
  ]
})
export class FavoritesModule { }
