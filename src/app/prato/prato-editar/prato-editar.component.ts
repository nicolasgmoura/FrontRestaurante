import { PratoService } from './../prato.service';
import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteService } from 'src/app/restaurante/restaurante.service';
import { Restaurante } from 'src/app/model/restaurante';

@Component({
  selector: 'app-prato-editar',
  templateUrl: './prato-editar.component.html',
  styleUrls: ['./prato-editar.component.css']
})
export class PratoEditarComponent implements OnInit {

  private id: number;
  private prato: Prato;
  private restaurantes: Restaurante[] = [];

  constructor(private service: PratoService, private parans: ActivatedRoute,
     private router: Router, private serviceRestaurante: RestauranteService) { }

  ngOnInit() {
    this.prato = new Prato();
    this.id = parseInt(this.parans.snapshot.paramMap.get('id'));
    

    this.service.getOne(this.id).subscribe(
      (data) => { this.prato = data }
    );

    this.getAllRestaurante();
  }

  restaurante(event) {    
    console.log(event);
    this.prato.idPrato = Number(event);
  }

  
  update(){
   
    if (this.prato.nomePrato.length == 0 || this.prato.nomePrato == null || this.prato.nomePrato == undefined) {
      return alert("Informe o nome do prato");
    }
    else if(this.prato.preco < 0.01 || this.prato.preco == null || this.prato.preco == undefined){
      return alert("Informe um preço de prato válido");
    }
    else if(this.prato.idRestaurante == null || this.prato.idRestaurante == 0 || this.prato.idRestaurante == undefined){
      return alert("Informe um restaurante para o prato, caso não tenha o restaurante cadastre-o na guia de restaurante");
    }
    
    this.prato.idPrato = this.id;
   
    console.log(this.prato);
    this.service.update(this.id,this.prato).subscribe(
      ()=>{
        alert("Editado com sucesso"),this.router.navigateByUrl('/prato');
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
