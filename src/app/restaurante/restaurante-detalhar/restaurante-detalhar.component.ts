import { Restaurante } from 'src/app/model/restaurante';
import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-detalhar',
  templateUrl: './restaurante-detalhar.component.html',
  styleUrls: ['./restaurante-detalhar.component.css']
})
export class RestauranteDetalharComponent implements OnInit {

  private id: number;
  private restaurante: Restaurante;

  constructor(private service: RestauranteService, private parans: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.restaurante = new Restaurante();
    this.id = parseInt(this.parans.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data) => { this.restaurante = data, console.log(data) }
    );
  }

}
