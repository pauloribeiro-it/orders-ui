import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ordem } from '../core/Ordem';
@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  private urlAtivos: string;

  constructor(private http: HttpClient) {
    this.urlAtivos = environment.urlApi + '/ordens';
  }

  salvar(ordem: Ordem): Promise<any>{
    return this.http.post(this.urlAtivos, ordem).toPromise();
  }
}
