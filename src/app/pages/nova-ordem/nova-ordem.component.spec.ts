import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaOrdemComponent } from './nova-ordem.component';

describe('NovaOrdemComponent', () => {
  let component: NovaOrdemComponent;
  let fixture: ComponentFixture<NovaOrdemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaOrdemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaOrdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
