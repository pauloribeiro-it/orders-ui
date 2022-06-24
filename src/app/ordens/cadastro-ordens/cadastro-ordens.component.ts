import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtivosService } from 'src/app/ativos/ativos.service';
import { Ativo } from 'src/app/core/model/Ativo';

@Component({
  selector: 'app-cadastro-ordens',
  templateUrl: './cadastro-ordens.component.html',
  styleUrls: ['./cadastro-ordens.component.css']
})
export class CadastroOrdensComponent implements OnInit {

  ativos: Ativo[] = [];
  formulario: FormGroup;

  constructor(private ativoService:AtivosService,
              private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
        preco: [null, Validators.required],
        quantidade: [null, Validators.required],
        dataOrdem: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.ativoService.getAtivos().then(resposta => {
        this.ativos = resposta.map((r: Ativo) => new Ativo(r.codigoAtivo, r.idTipoAtivo, r.descricaoAtivo));
    });
  }



}
