import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MenuComponent } from './menu/menu.component';
import { CarroPrincipalComponent } from './carro-principal/carro-principal.component';
import { TabelaCarrosComponent } from './tabela-carros/tabela-carros.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatMenuModule } from '@angular/material';
import { RodapeComponent } from './rodape/rodape.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarroEditarComponent } from './carro-editar/carro-editar.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CarroPrincipalComponent,
    TabelaCarrosComponent,
    RodapeComponent,
    CarroEditarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashBoardModule { }
