import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Drink } from '../models/drink';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  template: `
    <div class="row">
      <div class="col">
        <h2 class="text-center">I tuoi drink preferiti</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ng-container *ngIf="this.favSrv.favorites$ | async as drinks">
          <ng-container *ngIf="drinks.length > 0; else elseTemplate">
      <app-lista>
        <app-drink-card
          *ngFor="let drink of drinks; trackBy: trackById"
          [drink]="drink"
          [routerLink]="[drink.idDrink]"
        ></app-drink-card>
      </app-lista>
            </ng-container>
          <ng-template #elseTemplate>
            <p class="text-center">Nessun preferito</p>
          </ng-template>
        </ng-container>
      </div>
    </div>
  `,
  styles: [],
})
export class FavoritesPage implements OnInit {
  trackById: TrackByFunction<Drink> = (index: number, item: Drink) =>
  item.idDrink;
  constructor(public favSrv: FavoritesService) {}

  ngOnInit(): void {}
}
