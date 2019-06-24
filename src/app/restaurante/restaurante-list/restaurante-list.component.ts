import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante.service';
import { Restaurante } from 'src/app/model/restaurante';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {

  private list:Restaurante[]=[];

  constructor(private service:RestauranteService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data)=>{this.list = data},
      ()=>{}
    );
  }

  
}
