export class Ordem{
  dataOrdem: string;
  preco: number;
  quantidade: number;
  codAtivo: string;

  constructor(dataOrdem: string, preco: number, quantidade: number, codAtivo: string){
    this.dataOrdem = dataOrdem;
    this.preco = preco;
    this.quantidade = quantidade;
    this.codAtivo = codAtivo;
  }
}
