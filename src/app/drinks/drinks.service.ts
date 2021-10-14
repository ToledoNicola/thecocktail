import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drink } from '../models/drink';
import { map, share, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { FavoritesService } from '../favorites/favorites.service';
import { Filters } from '../models/filters';

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  rootURL = 'https://www.thecocktaildb.com/api/json/v1/1';
  // filterSubject = new BehaviorSubject<Filters>({
  //   drinkName: '',
  //   drinkIngredient: '',
  //   strAlcoholic: '',
  //   drinkCategory: '',
  // });
  // filters$ = this.filterSubject.asObservable();

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

  // changeFilters(filters: Filters) {
  //   this.filterSubject.next(filters);
  // }

  // fetch() {
  //   return this.http
  //     .get<{ drinks: Drink[] }>(
  //       'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
  //     )
  //     .pipe(
  //       map((ris) => ris.drinks),
  //       share()
  //     );
  // }

  // getFiltered() {
  //   return combineLatest([
  //     this.filters$,
  //     this.favouritesSrv.favorites$,
  //     this.fetch(),
  //   ]).pipe(
  //     map(([filters, favourites, drinks]) => {
  //       let newD = drinks;
  //       if (filters.drinkName != '') {
  //         newD = this.filterD(drinks, filters);
  //       }
  //       return newD.map((drink) => ({
  //         drink,
  //         isFavourite: favourites.includes(drink),
  //       }));
  //     })
  //   );
  // }

  // filterD(drinks: Drink[], filters: Filters) {
  //   return drinks.filter((drink) => {
  //     const name =
  //       filters.drinkName != ''
  //         ? drink.strDrink.includes(filters.drinkName)
  //         : true;
  //     const ing =
  //       filters.drinkIngredient != ''
  //         ? drink.strDrink.includes(filters.drinkName)
  //         : true;
  //     const alcol =
  //       filters.strAlcoholic != ''
  //         ? drink.strAlcoholic === filters.strAlcoholic
  //         : true;
  //     const category =
  //       filters.drinkCategory != ''
  //         ? drink.strCategory === filters.drinkCategory
  //         : true;

  //     return name && ing && alcol && category;
  //   });
  // }
}
