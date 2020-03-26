import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'system-nao-encontrado',
  // templateUrl: './nao-encontrado.component.html',
  template: `
    <div class="alert alert-danger">
      <h4 class="alert-heading">OPS!</h4>
      <p style="font-style: italic;"><ng-content select=".titulo"></ng-content> NÃO ENCONTRADO</p>
      <hr>
      <p class="mb-0"><ng-content select=".corpo"></ng-content></p>
    </div>      
  `,
  // styleUrls: ['./nao-encontrado.component.scss']
  styles: [`.alert{ text-align: center; }`]
})
export class NaoEncontradoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
