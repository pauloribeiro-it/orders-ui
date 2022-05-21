import { Component, OnInit } from '@angular/core';
import { AtivosService } from '../ativos.service';
import { TipoAtivo } from './TipoAtivo';
@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {

  tipos: TipoAtivo[] = [];
  constructor(private ativosService: AtivosService) { }

  ngOnInit(): void {
    this.ativosService.getTiposAtivos().then(
      resposta => {
          this.tipos = resposta.map((r: TipoAtivo) => new TipoAtivo(r.descricao, r.id));
      }
    );
  }

}
