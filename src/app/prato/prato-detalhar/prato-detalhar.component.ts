import { PratoService } from './../prato.service';
import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { RestauranteService } from 'src/app/restaurante/restaurante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from 'src/app/model/restaurante';

@Component({
  selector: 'app-prato-detalhar',
  templateUrl: './prato-detalhar.component.html',
  styleUrls: ['./prato-detalhar.component.css']
})
export class PratoDetalharComponent implements OnInit {

  private id: number;
  private prato: Prato;
  private restaurante: Restaurante;

  constructor(private service: PratoService, private parans: ActivatedRoute, private router: Router,
     private serviceRestaurante: RestauranteService) { }

  ngOnInit() {
    this.prato = new Prato();
    this.restaurante = new Restaurante();
    this.id = parseInt(this.parans.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data) => { this.prato = data, console.log(data)
        this.getOneRestaurante();
       }
      
    );
    
  }


  getOneRestaurante() {
    this.serviceRestaurante.getOne(this.prato.idRestaurante).subscribe(
      (data) => { this.restaurante = data },
      () => { }
    );
  }

}
