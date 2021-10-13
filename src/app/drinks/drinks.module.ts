import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksRoutingModule } from './drinks-routing.module';
import { DrinksPage } from './drinks.page';
import { ListaComponent } from './components/lista.component';
import { FormComponent } from './components/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsPage } from './pages/details.page';
import { QRCodeModule } from 'angularx-qrcode';
import { ByNamePage } from './pages/by-name.page';
import { ByIngredientPage } from './pages/by-ingredient.page';
import { ByAlcolicPage } from './pages/by-alcolic.page';
import { ByCategoryPage } from './pages/by-category.page';
import { DrinkCardComponent } from './components/drink-card.component';


@NgModule({
  declarations: [
    DrinksPage,
    ListaComponent,
    FormComponent,
    DetailsPage,
    ByNamePage,
    ByIngredientPage,
    ByAlcolicPage,
    ByCategoryPage,
    DrinkCardComponent
  ],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  exports:[ListaComponent, DetailsPage, DrinkCardComponent]
})
export class DrinksModule { }
