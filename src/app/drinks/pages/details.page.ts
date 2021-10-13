import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { FavoritesService } from 'src/app/favorites/favorites.service';
import { Drink } from '../../models/drink';
import { DrinksService } from '../drinks.service';

@Component({
  template: `
    <style>
      .wrap {
        max-width: 500px;
        margin: auto;
      }
      img {
        width: 100%;
        border-radius: 16px;
        -webkit-box-shadow: 2px 3px 0px 1px rgb(255 0 243 / 81%);
        box-shadow: 2px 3px 0px 1px rgb(255 0 243 / 81%);
      }
    </style>
    <div class="wrap" *ngIf="drink$ | async as drink">
      <div class="row mb-4">
        <div class="col">
          <h2 class="">{{ drink.strDrink }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 mb-4">
          <img class="mb-4" [src]="drink.strDrinkThumb + '/preview'" alt="" />
          <button
            *ngIf="!drink.favorite"
            (click)="favSrv.add(drink)"
            class="btn btn-success"
          >
            Aggiungi a preferiti
          </button>
          <button
            *ngIf="drink.favorite"
            (click)="favSrv.remove(drink.idDrink)"
            class="btn btn-danger"
          >
            Rimuovi da preferiti
          </button>
        </div>
        <div class="col-12 col-sm-6 ">
          <div class="ms-3">
            <h2>Instruzioni</h2>
            <p>{{ drink.strInstructionsIT }}</p>
            <div>
              <strong class="mb-3 d-block">Condivi con qrcode</strong>
              <qrcode
                [qrdata]="getUrl()"
                colorLight="#ffff"
                [width]="200"
                [errorCorrectionLevel]="'M'"
              ></qrcode>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class DetailsPage implements OnInit {
  drink$!: Observable<Drink & { favorite: boolean }>;

  constructor(
    private drinkSrv: DrinksService,
    private router: ActivatedRoute,
    public favSrv: FavoritesService
  ) {}

  ngOnInit(): void {
    this.drink$ = combineLatest([
      this.router.params.pipe(
        switchMap((par) => this.drinkSrv.getDrink(par['id']))
      ),
      this.favSrv.favorites$,
    ]).pipe(
      map(([drink, favs]) => {
        const favorite = !!favs.find((d) => d.idDrink === drink.idDrink);
        return { ...drink, favorite };
      })
    );
  }
  getUrl() {
    return window.location.href;
  }
}
