import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drink } from '../models/drink';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  rootURL = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getByName(name: string) {
    return this.http
      .get<{ drinks: Drink[] }>(`${this.rootURL}/search.php?s=${name}`)
      .pipe(
        tap(console.log),
        map((ris) => ris.drinks)
      );
  }
  getByIngredient(name: string) {
    return this.http
      .get<{ drinks: Drink[] }>(`${this.rootURL}/filter.php?i=${name}`)
      .pipe(
        tap(console.log),
        map((ris) => ris?.drinks)
      );
  }
  getByAlcolic(name: string) {
    return this.http
      .get<{ drinks: Drink[] }>(`${this.rootURL}/filter.php?a=${name}`)
      .pipe(
        tap(console.log),
        map((ris) => ris?.drinks)
      );
  }
  getByCategory(name: string) {
    return this.http
      .get<{ drinks: Drink[] }>(`${this.rootURL}/filter.php?c=${name}`)
      .pipe(
        tap(console.log),
        map((ris) => ris?.drinks)
      );
  }

  getDrink(id: string) {
    return this.http
      .get<{ drinks: Drink[] }>(`${this.rootURL}/lookup.php?i=${id}`)
      .pipe(map((ris) => ris.drinks[0]));
  }
  // getCategoryList() {
  //   return this.http
  //     .get<{ drinks: Drink[] }>(`${this.rootURL}/list.php?c=list`)
  //     .pipe(map((ris) => ris.drinks[0]));
  // }
  getIngredientList() {
    return this.http
      .get<{
        drinks: {
          strIngredient1: string;
        }[];
      }>(`${this.rootURL}/list.php?i=list`)
      .pipe(
        map((ris) =>
          ris.drinks.map((ing) => ({
            name: ing.strIngredient1,
            code: ing.strIngredient1.replace(/ /g, '_'),
          }))
        )
      );
  }

}
