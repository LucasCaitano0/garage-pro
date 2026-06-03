import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
    
  constructor(private clienteService: ClienteService){
    
    ngOnIinit(): void {
      this.clienteService.getClientes().subscribe((dados)=>{
        this.clientes = dados;
      })
    }
  }
}

