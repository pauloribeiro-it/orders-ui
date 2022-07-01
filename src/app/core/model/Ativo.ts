
export class Ativo{
  codigoAtivo: string;
  idAtivo: number;
  idTipoAtivo: number;
  descricaoAtivo: string;

  constructor(codigoAtivo: string, idAtivo: number, idTipoAtivo: number, descricaoAtivo: string){
    this.codigoAtivo = codigoAtivo;
    this.idAtivo = idAtivo;
    this.idTipoAtivo = idTipoAtivo;
    this.descricaoAtivo = descricaoAtivo;
  }
}
