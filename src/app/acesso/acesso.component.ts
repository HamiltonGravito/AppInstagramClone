import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(-100px, 0)'}),//Horizontal e Vertical
        animate('1s 0s ease-in-out', )//Duração, Delay e aceleração(easing)
      ])
    ]),
    trigger('animacao-login', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(100px, 0)'}),
        animate('1500ms 0s ease-in-out', keyframes([
          style({offset: 0.15, opacity: 1, transform: 'translateX(0)'}),
          style({offset: 0.86, opacity: 1, transform: 'translateX(0)'}),

          style({offset: 0.88, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.90, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.92, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.94, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.96, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.98, opacity: 1, transform: 'translateY(10px)'})
        ]))
      ])
    ])
  ]
})

export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado';
  public estadoLoggin: string= 'criado';

  public cadastro: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(event: string) {
    this.cadastro = event === 'cadastro' ? true : false;
  }

  public inicioDaAnimacao():void {
    console.log("INICIO DA ANIMAÇÃO!!!")
  }

  public fimDaAnimacao():void {
    console.log("FIM DA ANIMAÇÃO!!!")
  }
}
