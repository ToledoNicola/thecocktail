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
        <input
          class="form-control form-control-lg"
          [formControl]="fc"
          type="text"
          placeholder="Scrivi il nome del drink"
        />
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
  styles: [],
})
export class ByNamePage implements OnInit {
  fc = new FormControl();
  drinks$: Observable<Drink[]> = this.activatedRoute.queryParams.pipe(
    switchMap((params) =>
      this.drinkSrv.getByName(params['search'] == '' ? null : params['search'])
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
      .pipe(debounceTime(400), distinctUntilChanged())
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
