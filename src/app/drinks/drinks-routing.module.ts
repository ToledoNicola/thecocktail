import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPage } from './pages/details.page';
import { DrinksPage } from './drinks.page';
import { ByNamePage } from './pages/by-name.page';

const routes: Routes = [
  {
    path: '',
    component: DrinksPage,
    children: [
      { path: 'by-name', component: ByNamePage },
      { path: '', pathMatch: 'full', redirectTo: 'by-name' },
    ],
  },
  { path: ':id', component: DetailsPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinksRoutingModule {}
