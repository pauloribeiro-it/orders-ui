import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtivosService } from '../ativos.service';
import { TipoAtivo } from '../../core/model/TipoAtivo';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css'],
  providers: [MessageService]
})
export class AtivosComponent implements OnInit {
  formulario: FormGroup;
  tipos: TipoAtivo[] = [];

  constructor(private ativosService: AtivosService, private formBuilder: FormBuilder,
              private messageService: MessageService) {
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
                      .then(() => {
                        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Cadastro de ativo realizado com sucesso.'});
                      }).catch(() => {
                        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Erro ao cadastrar ativo.'});
                      });
  }

}
