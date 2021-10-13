import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPage } from '../drinks/pages/details.page';
import { FavoritesPage } from './favorites.page';

const routes: Routes = [{ path: '', component: FavoritesPage },  { path: ':id', component: DetailsPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
