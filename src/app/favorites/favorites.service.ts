import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  store = new BehaviorSubject<Drink[]>([]);
  favorites$ = this.store.asObservable();
  constructor() {}

  add(drink: Drink) {
    this.store.next([...this.store.value, drink]);
  }
  remove(drinkID: string) {
    this.store.next(this.store.value.filter((d) => d.idDrink != drinkID));
  }
}
