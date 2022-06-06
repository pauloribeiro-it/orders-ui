import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ativo } from './ativos/Ativo';
@Injectable({
  providedIn: 'root'
})
export class AtivosService {

  private urlAtivos: string;

  constructor(private http: HttpClient) {
    this.urlAtivos = environment.urlApi + '/ativo';
  }

  getTiposAtivos(): Promise<any>{
    return this.http.get(`${this.urlAtivos}/tipos`)
                    .toPromise()
                    .then(resposta => resposta);
  }

  salvar(ativo: Ativo): Promise<any>{
    return this.http.post(this.urlAtivos, ativo).toPromise();
  }
}
