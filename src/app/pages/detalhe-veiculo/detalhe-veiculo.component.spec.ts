import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVeiculoComponent } from './detalhe-veiculo.component';

describe('DetalheVeiculoComponent', () => {
  let component: DetalheVeiculoComponent;
  let fixture: ComponentFixture<DetalheVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheVeiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
