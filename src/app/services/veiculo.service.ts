import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private apiUrl = 'http://localhost:3000/veiculos';

  constructor(private http: HttpClient) {

  }

  getVeiculos(){
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  addVeiculo(veiculo: Veiculo){
    return this.http.post<Veiculo>(this.apiUrl, veiculo);
  }

  getVeiculoPorId(id: string){
    return this.http.get<Veiculo>(`${this.apiUrl}/${id}`);
  }
  
  deleteVeiculo(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateVeiculo(id:string, veiculo: Veiculo){
    return this.http.put<Veiculo>(`${this.apiUrl}/${id}`, veiculo);
  }

}