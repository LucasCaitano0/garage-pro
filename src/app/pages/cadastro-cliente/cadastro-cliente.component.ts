import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit{
  idEdicao: string | null = null

  form = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl('')
  })
  
  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idEdicao = this.route.snapshot.paramMap.get('id');

    if(this.idEdicao){
      this.clienteService.getClientePorId(this.idEdicao).subscribe((cliente) => {
        this.form.patchValue({
          nome: cliente.nome,
          telefone: cliente.telefone,
          email: cliente.email
        });
      });
    }
  }

  onSubmit(){
    const formValue = this.form.value;

    const cliente = {
      nome: formValue.nome,
      telefone: formValue.telefone,
      email: formValue.email
    };

    if(this.idEdicao){
      this.clienteService.updateCliente(this.idEdicao, cliente as any).subscribe(()=>{
        console.log("Cliente atualizado!");
        this.router.navigate(['/clientes']);
      })
    }else{
        this.clienteService.addCliente(cliente as any).subscribe(() => {
          console.log("Cliente atualizado!")
          this.router.navigate(['/clientes']);
        })
    }
  }
}
