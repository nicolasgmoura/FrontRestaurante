import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteService } from '../restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-adicionar',
  templateUrl: './restaurante-adicionar.component.html',
  styleUrls: ['./restaurante-adicionar.component.css']
})
export class RestauranteAdicionarComponent implements OnInit {

  restaurante: Restaurante;

  constructor(private service: RestauranteService, private router: Router) { }

  ngOnInit() {
    this.restaurante = new Restaurante();
    this.restaurante.nomeRestaurante = "";
  }

  insert() {
    if (this.restaurante.nomeRestaurante.length == 0 || this.restaurante.nomeRestaurante == undefined || this.restaurante.nomeRestaurante == null){
      return alert("Informe o nome do restaurante");
    }

    this.service.insert(this.restaurante).subscribe(
      ()=>{
        alert("Salvo com sucesso"),this.router.navigateByUrl('/restaurante');
      }
    );

  }

  cancelar(){
    this.restaurante.nomeRestaurante = "";
  }

}
