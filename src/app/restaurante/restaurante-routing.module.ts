import { RestauranteExcluirComponent } from './restaurante-excluir/restaurante-excluir.component';
import { RestauranteDetalharComponent } from './restaurante-detalhar/restaurante-detalhar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteAdicionarComponent } from './restaurante-adicionar/restaurante-adicionar.component';
import { RestauranteEditarComponent } from './restaurante-editar/restaurante-editar.component';

const routes: Routes = [
  {
    path: '', component: RestauranteListComponent
  },
  {
    path: 'create', component: RestauranteAdicionarComponent
  },
  {
    path: 'update/:id', component: RestauranteEditarComponent
  },
  {
    path: 'details/:id', component: RestauranteDetalharComponent
  },
  {
    path: 'delete/:id', component: RestauranteExcluirComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
