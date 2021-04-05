import { Component, OnInit, ViewChild } from '@angular/core';
import { TabelaCarrosComponent } from '../tabela-carros/tabela-carros.component';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  idCarro = 0;
  @ViewChild(TabelaCarrosComponent, {static: false}) tabela: TabelaCarrosComponent;

  constructor() { }

  ngOnInit() {

  }


  detalhandoCarro(respostaTable: number): void{
    this.idCarro = respostaTable;
  }

  propagandoMudancas(evento): void{
    if(evento){
      this.tabela.setListCarros();
    }
  }

  

}

