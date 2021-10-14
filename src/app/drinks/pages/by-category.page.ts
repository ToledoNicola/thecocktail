import { Component, OnInit, TrackByFunction } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Drink } from 'src/app/models/drink';
import { DrinksService } from '../drinks.service';

@Component({
  template: `
    <div class="row justify-content-center">
      <div class="col-6">
        <select
          [formControl]="fc"
          class="form-select"
        >
          <option selected>Scegli una categoria</option>
          <option value="Cocktail">Cocktail</option>
          <option value="Homemade_Liqueur">Homemade Liqueur</option>
          <option value="Cocoa">Cocoa</option>
          <option value="Shot">Shot</option>
          <option value="Beer">Beer</option>
        </select>
      </div>
    </div>

    <div class="mt-4" *ngIf="drinks$ | async as drinks">
      <app-lista>
        <app-drink-card
          *ngFor="let drink of drinks; trackBy: trackById"
          [drink]="drink"
          [routerLink]="['../', drink.idDrink]"
        ></app-drink-card>
      </app-lista>
    </div>
  `,
  styles: [
  ]
})
export class ByCategoryPage implements OnInit {
  fc = new FormControl();
  drinks$: Observable<Drink[]> = this.activatedRoute.queryParams.pipe(
    switchMap((params) =>
      this.drinkSrv.getByCategory(
        params['search'] == '' ? null : params['search']
      )
    )
  );
  sub!: Subscription;

  trackById: TrackByFunction<Drink> = (index: number, item: Drink) =>
    item.idDrink;

  constructor(
    private drinkSrv: DrinksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const fv = this.activatedRoute.snapshot.queryParams['search'];
    this.fc.setValue(fv);
    this.sub = this.fc.valueChanges
      .pipe( distinctUntilChanged())
      .subscribe((val) => {
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: { search: val },
          queryParamsHandling: 'merge',
        });
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
