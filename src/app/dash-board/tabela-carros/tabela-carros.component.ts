import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carro } from 'src/app/models/carro.model';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'spa-tabela-carros',
  templateUrl: './tabela-carros.component.html',
  styleUrls: ['./tabela-carros.component.css']
})

export class TabelaCarrosComponent implements OnInit {

  @Output() detalharCarro = new EventEmitter();
  
  displayedColumns: string[] = ['id', 'marca', 'modelo', 'preco', 'opcoes'];
  dataSource: Carro[];
  
  constructor(private carrosService: CarrosService) { }

  ngOnInit() {
    this.setListCarros();
  }

  ngOnChanges(){
    
  }

  

  exibirDetalhes(id: number): void{
    this.detalharCarro.emit(id);
  }

  setListCarros(){
    this.carrosService.listarCarros.subscribe(value =>
      {
        this.dataSource = value;
      });
  }

  removerCarro(element){
    this.carrosService.removeCar(element).subscribe(value =>
      {
        console.log('carro removido !');
        this.setListCarros();
      })
  }

  

  

}




