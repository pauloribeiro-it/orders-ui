
export class Ativo{
  codigoAtivo: string;
  idTipoAtivo: number;
  descricaoAtivo: string;

  constructor(codigoAtivo: string, idTipoAtivo: number, descricaoAtivo: string){
    this.codigoAtivo = codigoAtivo;
    this.idTipoAtivo = idTipoAtivo;
    this.descricaoAtivo = descricaoAtivo;
  }
}
