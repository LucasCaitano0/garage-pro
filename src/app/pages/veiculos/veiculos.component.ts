import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../models/veiculo.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.scss'
})

export class VeiculosComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService){ }

  ngOnInit(): void {
      this.veiculoService.getVeiculos().subscribe((dados)=>{
        this.veiculos = dados;
      })
    }

  deletar(id: string) {
    if (confirm('Tem certeza que deseja excluir este veículo?')){
      this.veiculoService.deleteVeiculo(id).subscribe(() => {
        this.veiculos = this.veiculos.filter(v => v.id !== id);
      });
    }
  }

  
}


