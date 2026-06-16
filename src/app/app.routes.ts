
import { OrdensComponent } from './pages/ordens/ordens.component';
import { DetalheVeiculoComponent } from './pages/detalhe-veiculo/detalhe-veiculo.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { NovaOrdemComponent } from './pages/nova-ordem/nova-ordem.component';
import { CadastroVeiculoComponent } from './pages/cadastro-veiculo/cadastro-veiculo.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'veiculos', component: VeiculosComponent},
    {path: 'veiculos/novo', component: CadastroVeiculoComponent},
    {path: 'veiculos/:id', component: DetalheVeiculoComponent},
    {path: 'veiculos/:id/editar', component: CadastroVeiculoComponent},
    {path: 'ordens', component: OrdensComponent},
    {path: 'ordens/nova', component: NovaOrdemComponent}
    
];
