import { RestauranteService } from 'src/app/restaurante/restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { PratoService } from '../prato.service';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/model/restaurante';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-prato-adicionar',
  templateUrl: './prato-adicionar.component.html',
  styleUrls: ['./prato-adicionar.component.css']
})
export class PratoAdicionarComponent implements OnInit {

  prato: Prato;
  private restaurantes: Restaurante[] = [];


  constructor(private service: PratoService, private serviceRestaurante: RestauranteService, private router: Router) { }

  ngOnInit() {
    this.prato = new Prato();
    this.prato.nomePrato=""
    this.getAllRestaurante();
  }

  insert() {

    if (this.prato.nomePrato.length == 0 || this.prato.nomePrato == null || this.prato.nomePrato == undefined) {
      return alert("Informe o nome do prato");
    }
    else if(this.prato.preco < 0.01 || this.prato.preco == null || this.prato.preco == undefined){
      return alert("Informe um preço de prato válido");
    }
    else if(this.prato.idRestaurante == null || this.prato.idRestaurante == 0 || this.prato.idRestaurante == undefined){
      return alert("Informe um restaurante para o prato, caso não tenha o restaurante cadastre-o na guia de restaurante");
    }
    this.service.insert(this.prato).subscribe(
      () => {
        alert("Salvo com sucesso"), this.router.navigateByUrl('/prato');
      }
    );

  }

  getAllRestaurante() {
    this.serviceRestaurante.getAll().subscribe(
      (data) => { this.restaurantes = data },
      () => { }
    );
  }

  cancelar(){
    this.prato.nomePrato = "";
    this.prato.preco = null;
    this.prato.idRestaurante = null;
  }

}
