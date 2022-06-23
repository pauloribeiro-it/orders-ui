import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtivosService } from '../ativos.service';
import { TipoAtivo } from '../../core/model/TipoAtivo';
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
      codigoAtivo: [null, Validators.required],
      idTipoAtivo: [null, Validators.required],
      descricaoAtivo: [null, Validators.required]
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
    this.ativosService.salvar(this.formulario.value)
                      .then((ativo) => {
                        console.log('Cadastro realizado');
                      }).catch(erro => console.log(erro));
  }

}
