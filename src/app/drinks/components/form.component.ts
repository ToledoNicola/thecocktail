import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="form" >
      <input type="text" formControlName="drinkName" />
      <input type="text" formControlName="drinkIngredient" />
      <select formControlName="strAlcoholic">
        <option value="">Nussuno</option>
        <option value="non alcolico">Non Alcolico</option>
        <option value="alcolico">Alcolico</option>
      </select>
    </form>
  `,
  styles: [],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private drinksSrv: DrinksService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      drinkName: [''],
      drinkIngredient: [''],
      strAlcoholic: [''],
      drinkCategory: [''],
    });

    // this.form.valueChanges
    //   .pipe(debounceTime(400), distinctUntilChanged())
    //   .subscribe((value) => {
    //     console.log(value)
    //     this.drinksSrv.changeFilters(value)
    //   });
  }
}
