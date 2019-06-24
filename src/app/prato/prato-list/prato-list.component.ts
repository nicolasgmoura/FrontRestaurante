import { PratoService } from './../prato.service';
import { Prato } from './../../model/prato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prato-list',
  templateUrl: './prato-list.component.html',
  styleUrls: ['./prato-list.component.css']
})
export class PratoListComponent implements OnInit {

  private list:Prato[]=[];

  constructor(private service:PratoService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data)=>{this.list = data},
      ()=>{}
    );
  }
  
}
