import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from './../../services/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../models/veiculo.model';

@Component({
  selector: 'app-detalhe-veiculo',
  standalone: true,
  imports: [],
  templateUrl: './detalhe-veiculo.component.html',
  styleUrl: './detalhe-veiculo.component.scss'
})
export class DetalheVeiculoComponent implements OnInit{
  veiculo?: Veiculo;

  constructor(
    private route: ActivatedRoute,
    private veiculoService: VeiculoService
  ){

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.veiculoService.getVeiculoPorId(id).subscribe((dados) => {
        this.veiculo = dados;
      })
    }
  }
}
