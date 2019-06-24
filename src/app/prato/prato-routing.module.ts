import { PratoAdicionarComponent } from './prato-adicionar/prato-adicionar.component';
import { PratoExcluirComponent } from './prato-excluir/prato-excluir.component';
import { PratoDetalharComponent } from './prato-detalhar/prato-detalhar.component';
import { PratoEditarComponent } from './prato-editar/prato-editar.component';
import { PratoListComponent } from './prato-list/prato-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: PratoListComponent
  },
  {
    path: 'create', component: PratoAdicionarComponent
  },
  {
    path: 'update/:id', component: PratoEditarComponent
  },
  {
    path: 'details/:id', component: PratoDetalharComponent
  },
  {
    path: 'delete/:id', component: PratoExcluirComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PratoRoutingModule { }
