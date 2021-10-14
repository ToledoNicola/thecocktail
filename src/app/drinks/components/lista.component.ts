import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  
  template: `
    <style>
      .grid {
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
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

  constructor() {}

  ngOnInit(): void {}
}
