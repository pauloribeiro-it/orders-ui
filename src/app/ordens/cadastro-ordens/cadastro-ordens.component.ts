import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AtivosService } from 'src/app/ativos/ativos.service';
import { Ativo } from 'src/app/core/model/Ativo';
import { Ordem } from 'src/app/core/Ordem';
import { OrdemService } from '../ordem.service';

@Component({
  selector: 'app-cadastro-ordens',
  templateUrl: './cadastro-ordens.component.html',
  styleUrls: ['./cadastro-ordens.component.css']
})
export class CadastroOrdensComponent implements OnInit {

  ativos: Ativo[] = [];
  formulario: FormGroup;

  constructor(private ativoService:AtivosService,
              private formBuilder: FormBuilder,
              private ordemService: OrdemService,
              private messageService: MessageService) {
    this.formulario = this.formBuilder.group({
        preco: [null, Validators.required],
        quantidade: [null, Validators.required],
        dataOrdem: [null, Validators.required],
        codigoAtivo: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.ativoService.getAtivos().then(resposta => {
        this.ativos = resposta.map((r: Ativo) => new Ativo(r.codigoAtivo, r.idTipoAtivo, r.descricaoAtivo));
    });
  }

  salvar(): void{
    let ordem: Ordem;
    const data = this.formulario.value.dataOrdem;
    const dataAsString = data.getDate() + '/' + (data.getMonth() < 10?'0'+data.getMonth():data.getMonth()) + '/' + data.getFullYear();
    ordem = new Ordem(dataAsString, this.formulario.value.preco,
                                    this.formulario.value.quantidade,
                                    this.formulario.value.codigoAtivo);

    this.ordemService.salvar(ordem)
                     .then(() => {
                        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Cadastro de ordem realizado com sucesso.'});
                      })
                     .catch(err => {
                        this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao cadastrar ordem.'});
                        console.log(err);
                      });
  }

}
