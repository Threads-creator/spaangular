import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carro } from 'src/app/models/carro.model';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'spa-carro-principal',
  templateUrl: './carro-principal.component.html',
  styleUrls: ['./carro-principal.component.css']
})
export class CarroPrincipalComponent implements OnInit {

  readonly linkCarroPadrao = "../../../assets/img/carroPadrao.jpg";

  editar = false;

  carro: Carro = {
    id: 0,
    modelo: "Indefinido",
    marca: "indefinido",
    ano: new Date(),
    cor: "blue",
    descricao: "Nenhuma descrição encontrada",
    linkImg: this.linkCarroPadrao,
    preco: 0.0
  };

  @Input() idCarroInput: number;
  @Output() editarClicked = new EventEmitter();
  @Output() carroModificado = new EventEmitter();

  constructor(private carroService: CarrosService) { }

  ngOnInit() {
    this.atualizarCarroView();
  }

  ngOnChanges() {
      this.atualizarCarroView();
      this.editar = false;
  }

  atualizarCarroView(): void {
    if(this.idCarroInput){
      this.carroService.getCarAtList(this.idCarroInput).subscribe(value => {
        if(value != undefined){
          this.carro = value;
        }
      });
    }
  }

  btnEditarClicked(): void{
    this.editar = true;
  }

  edicaoOcorreu(evento: string): void {
    if(evento){
      this.atualizarCarroView();
      this.editar = false;
      this.carroModificado.emit('mudou');
    }
  }

}
