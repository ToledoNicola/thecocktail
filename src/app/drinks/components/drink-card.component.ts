import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Drink } from 'src/app/models/drink';

@Component({
  selector: 'app-drink-card',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.2s ease-out', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('.1s ease-out', style({ opacity: '0' })),
      ]),
    ]),
  ],
  template: `
  <style>
     .drink {
        border-radius: 10px;
        height: 100%;
      }
      .drink img {
        max-width: 100px;
        height: 100%;
        width: 100%;
        border-radius: 16px;
        transition: 0.3s;
      }
      .drink img:hover {
        -webkit-box-shadow: 2px 3px 0px 1px rgb(255 0 243 / 81%);
        box-shadow: 2px 3px 0px 1px rgb(255 0 243 / 81%);
      }
  </style>
    <div
        @fadeIn
        class="d-flex justify-content-center"
      >
        <div class="drink" >
          <img [src]="drink.strDrinkThumb" alt="" />
        </div>
      </div>
  `,
  styles: [
  ]
})
export class DrinkCardComponent implements OnInit {
@Input()drink!:Drink
  constructor() { }

  ngOnInit(): void {
  }

}
