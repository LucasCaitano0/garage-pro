import { Veiculo } from './../../models/veiculo.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VeiculoService } from '../../services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-veiculo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.scss'
})



export class CadastroVeiculoComponent implements OnInit {
  idEdicao: string | null = null;

  form = new FormGroup({
    placa: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    ano: new FormControl(''),
    clienteId: new FormControl('')
  });

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void{
    this.idEdicao = this.route.snapshot.paramMap.get('id');

    if(this.idEdicao){
      this.veiculoService.getVeiculoPorId(this.idEdicao).subscribe((veiculo) => {
        this.form.patchValue({
          placa: veiculo.placa,
          marca: veiculo.marca,
          modelo: veiculo.modelo,
          ano: String(veiculo.ano),
          clienteId: String(veiculo.clienteId)
        });
      });
    }
  }

  onSubmit(){
    const formValue = this.form.value;

    const veiculo = {
      placa: formValue.placa,
      marca: formValue.marca,
      modelo: formValue.modelo,
      ano: Number(formValue.ano),
      clienteId: Number(formValue.clienteId)
    }

    if(this.idEdicao) {
      this.veiculoService.updateVeiculo(this.idEdicao, veiculo as any).subscribe(() => {
      console.log("Veículo atualizado!");
      this.router.navigate(['/veiculos']);
    });
  } else {
      this.veiculoService.addVeiculo(veiculo as any).subscribe(() => {
        console.log("Veículo cadastrado!");
        this.router.navigate(['/veiculos']);
      });
    }
  }
}