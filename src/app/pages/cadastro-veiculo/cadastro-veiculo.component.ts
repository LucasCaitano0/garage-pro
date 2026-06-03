import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-cadastro-veiculo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.scss'
})



export class CadastroVeiculoComponent {

  form = new FormGroup({
    placa: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    ano: new FormControl(''),
    clienteId: new FormControl('')
  });

  constructor(private veiculoService: VeiculoService) { }

  onSubmit(){
    const formValue = this.form.value;

    const novoVeiculo = {
      placa: formValue.placa,
      marca: formValue.marca,
      modelo: formValue.modelo,
      ano: Number(formValue.ano),
      clienteId: Number(formValue.clienteId)
    }

    this.veiculoService.addVeiculo(novoVeiculo as any).subscribe(() => {
      console.log("Veículo cadastrado!");
      this.form.reset();
    });
  }
}