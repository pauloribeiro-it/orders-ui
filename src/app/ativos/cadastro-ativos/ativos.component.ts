import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtivosService } from '../ativos.service';
import { TipoAtivo } from '../../core/model/TipoAtivo';
import { Ativo } from 'src/app/core/model/Ativo';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AtivosComponent implements OnInit {
  formulario: FormGroup;
  tipos: TipoAtivo[] = [];
  ativos: Ativo[] = [];

  constructor(private ativosService: AtivosService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig) {
    this.formulario = this.formBuilder.group({
      codigoAtivo: [null, Validators.required],
      idTipoAtivo: [null, Validators.required],
      descricaoAtivo: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.ativosService.getAtivos().then(
        resposta => {
          this.ativos = resposta.map((a: any) => new Ativo(a.codigoAtivo,a.id, a.idTipoAtivo, a.descricaoAtivo));
        }
    );

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

  confirmarExclusao(ativo: Ativo): void{

    this.confirmationService.confirm({
      message: 'Deseja realmente excluir o ativo?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.ativosService.excluiAtivo(ativo.idAtivo)
                          .then(() => {
                            this.messageService.add({severity:'success', summary:'Sucesso', detail:'Ativo excluído com sucesso.'});
                          })
                          .catch(err => {
                            this.messageService.add({severity:'error', summary: 'Erro', detail: err.error});
                          });
      }
    });
  }

}
