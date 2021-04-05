
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Carro } from 'src/app/models/carro.model';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'spa-carro-editar',
  templateUrl: './carro-editar.component.html',
  styleUrls: ['./carro-editar.component.css']
})
export class CarroEditarComponent implements OnInit {

  formGroup: FormGroup;
  @Input() carro: Carro;
  @Output() carroSalvo = new EventEmitter();

  _id: number;
  _cores = ['red','white','blue','brown','black','orange','yellow','green','purple','silver'];
  
  constructor(private fb: FormBuilder,
              private carroService: CarrosService) { }

  ngOnInit() {
    this.criarFormulario();

    
  }


  criarFormulario(): void {
    this.formGroup = this.fb.group({
      marca: [this.carro.marca || '', [Validators.required, Validators.minLength(2)]],
      modelo: [this.carro.modelo || '', [Validators.required, Validators.minLength(2)]],
      ano: [this.carro.ano, [Validators.required]],
      preco: [this.carro.preco || '', [Validators.required, Validators.min(1000)]],
      cor: [this.carro.cor || '', [Validators.required]],
      descricao: [this.carro.descricao || ''],
      linkImg: [this.carro.linkImg || '', [Validators.minLength(5)]]
    });

    
  }

  salvar(): void {
    this.modificarCarro();
    this.carroService.updateCar(this.carro).subscribe(() => {
      console.log("informações atualizadas");
      alert("Atualizado com sucesso !!");
      this.carroSalvo.emit('mudou');     
    }, error => console.log(error + "algo de errado ocorreu"));
  }

  dateToInput(): string {
    return this.dateToInputHtml(this.converterAnoCarroD());
  }

  private modificarCarro(): void{
    this._id = this.carro.id;
    this.carro = this.formGroup.getRawValue() as Carro;
    this.carro.id = this._id; 
    this.carro.ano = new Date(this.converterAnoCarroS(this.carro.ano.toString()));
  }

  private converterAnoCarroD(): Date{
    return new Date(this.carro.ano.toString());
  }

  private converterAnoCarroS(data: string): string{
    if(data.length <= 10){
      return data + 'T03:00:00.000Z';
    }
    return data;
  }

  private dateToInputHtml(date: Date): string{
    let dia = '', mes = '';
    if(date.getDate() < 10){
      dia = '0' + date.getDate();
    }else{
      dia = date.getDate().toString();
    }
    if(date.getMonth() < 9){
      mes = '0' + (date.getMonth() + 1);
    }else{
      mes = (date.getMonth() + 1).toString();
    }

    return date.getFullYear() + '-' + mes + '-' + dia;
  }






}
