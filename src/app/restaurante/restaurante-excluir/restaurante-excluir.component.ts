import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteService } from '../restaurante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-excluir',
  templateUrl: './restaurante-excluir.component.html',
  styleUrls: ['./restaurante-excluir.component.css']
})
export class RestauranteExcluirComponent implements OnInit {

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

  delete(){
    this.service.delete(this.restaurante.idRestaurante).subscribe(
      ()=>{alert("excluido com sucesso"), this.router.navigateByUrl('/restaurante')}
    );
  }

}
