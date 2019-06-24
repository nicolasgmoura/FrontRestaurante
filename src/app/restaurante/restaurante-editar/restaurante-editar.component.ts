import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteService } from '../restaurante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-editar',
  templateUrl: './restaurante-editar.component.html',
  styleUrls: ['./restaurante-editar.component.css']
})
export class RestauranteEditarComponent implements OnInit {

  private id: number;
  private restaurante: Restaurante;

  constructor(private service: RestauranteService, private parans: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.restaurante = new Restaurante();
    this.id = parseInt(this.parans.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data) => { this.restaurante = data }
    );
  }
  
  update(){
    if (this.restaurante.nomeRestaurante.length == 0 || this.restaurante.nomeRestaurante == undefined || this.restaurante.nomeRestaurante == null){
      return console.log("Informe o nome do restaurante");
    }
    this.restaurante.idRestaurante = this.id;
    this.service.update(this.id,this.restaurante).subscribe(
      ()=>{
        alert("Dados editado com sucesso"),this.router.navigateByUrl('/restaurante');
      }
    );
  }

}
