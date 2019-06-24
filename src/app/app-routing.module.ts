import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'restaurante', loadChildren:'./restaurante/restaurante.module#RestauranteModule'
  },
  {
    path:'prato', loadChildren:'./prato/prato.module#PratoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
