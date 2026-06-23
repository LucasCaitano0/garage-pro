import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { 

  }

  getClientes(){
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getClientePorId(id: string){
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  addCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  updateCliente(id:string, cliente: Cliente){
    return this.http.put<Cliente>(`${this.apiUrl}/${id}`, cliente);
  }

  deleteCliente(id:string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
