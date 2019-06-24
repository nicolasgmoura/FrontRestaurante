import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PratoRoutingModule } from './prato-routing.module';
import { PratoAdicionarComponent } from './prato-adicionar/prato-adicionar.component';
import { PratoDetalharComponent } from './prato-detalhar/prato-detalhar.component';
import { PratoEditarComponent } from './prato-editar/prato-editar.component';
import { PratoExcluirComponent } from './prato-excluir/prato-excluir.component';
import { PratoListComponent } from './prato-list/prato-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PratoAdicionarComponent, PratoDetalharComponent, PratoEditarComponent, PratoExcluirComponent, PratoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    PratoRoutingModule
  ]
})
export class PratoModule { }
