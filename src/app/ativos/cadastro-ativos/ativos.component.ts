import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtivosService } from '../ativos.service';
import { TipoAtivo } from './TipoAtivo';
@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {
  formulario: FormGroup;
  tipos: TipoAtivo[] = [];

  constructor(private ativosService: AtivosService, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      codigo: [null, Validators.required],
      tipo: [null, Validators.required],
      descricao: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.ativosService.getTiposAtivos().then(
      resposta => {
          this.tipos = resposta.map((r: TipoAtivo) => new TipoAtivo(r.descricao, r.id));
      }
    );
  }

  salvar(): void{

  }

}
