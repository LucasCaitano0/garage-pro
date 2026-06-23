import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
    
  constructor(private clienteService: ClienteService){}
    
    ngOnInit(): void {
      this.clienteService.getClientes().subscribe((dados)=>{
        this.clientes = dados;
      })
    }

    excluirCliente(id:string){
      if (confirm('Tem certeza que deseja excluir este cliente?')){
        this.clienteService.deleteCliente(id).subscribe(()=>{
          this.clientes = this.clientes.filter(cliente => cliente.id !== id);
        })
      }
    }
}

