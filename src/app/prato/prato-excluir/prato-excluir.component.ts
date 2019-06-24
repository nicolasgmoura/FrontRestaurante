import { PratoService } from './../prato.service';
import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { RestauranteService } from 'src/app/restaurante/restaurante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from 'src/app/model/restaurante';

@Component({
  selector: 'app-prato-excluir',
  templateUrl: './prato-excluir.component.html',
  styleUrls: ['./prato-excluir.component.css']
})
export class PratoExcluirComponent implements OnInit {

  private id: number;
  private prato: Prato;

  constructor(private service: PratoService, private parans: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.prato = new Prato();
    this.id = parseInt(this.parans.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data) => { this.prato = data }
    );
  }

  delete(){
    this.service.delete(this.prato.idPrato).subscribe(
      ()=>{alert("excluido com sucesso"), this.router.navigateByUrl('/prato')}
    );
  }

}
