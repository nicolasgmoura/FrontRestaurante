import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteAdicionarComponent } from './restaurante-adicionar/restaurante-adicionar.component';
import { RestauranteDetalharComponent } from './restaurante-detalhar/restaurante-detalhar.component';
import { RestauranteEditarComponent } from './restaurante-editar/restaurante-editar.component';
import { RestauranteExcluirComponent } from './restaurante-excluir/restaurante-excluir.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RestauranteListComponent, RestauranteAdicionarComponent, RestauranteDetalharComponent, RestauranteEditarComponent, RestauranteExcluirComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    RestauranteRoutingModule
  ]
})
export class RestauranteModule { }
