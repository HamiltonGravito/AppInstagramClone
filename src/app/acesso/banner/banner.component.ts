import { Component, OnInit } from '@angular/core';
import { state, trigger, style } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    //Parametros: nomeDaTrigger, definiçõesDaAnimação
    trigger('banner', [
      //Parametros: nomeDoEstado e como é o 'estilo' do estado
      state('escondido', style({
        //Usar camelCase
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      }))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';

  constructor() { }

  ngOnInit(): void {
  }

}
