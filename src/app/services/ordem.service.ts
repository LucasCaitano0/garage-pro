import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ordem } from '../models/ordem.model';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  private apiUrl = 'http://localhost:3000/ordens';

  constructor(private http: HttpClient) { 

  }

  getOrdens(){
    return this.http.get<Ordem[]>(this.apiUrl);
  }

  getOrdemPorId(id: string){
    return this.http.get<Ordem>(`${this.apiUrl}/${id}`);
  }

  addOrdem(ordem: Ordem){
    return this.http.post<Ordem>(this.apiUrl, ordem);
  }

  updateOrdem(id: string, ordem: Ordem){
    return this.http.put<Ordem>(`${this.apiUrl}/${id}`, ordem);
  }

  deleteOrdem(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
