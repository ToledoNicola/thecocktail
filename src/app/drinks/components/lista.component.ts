import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-lista',
  
  template: `
    <style>
     
      .grid {
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 30px;
      }
    </style>
    <div class="grid">
     <ng-content ></ng-content>
    </div>
  `,
  styles: [],
})
export class ListaComponent implements OnInit {
  @Input() drinks: Drink[] | null = null; 

  constructor(private drinkSrv: DrinksService) {}

  ngOnInit(): void {}
}
