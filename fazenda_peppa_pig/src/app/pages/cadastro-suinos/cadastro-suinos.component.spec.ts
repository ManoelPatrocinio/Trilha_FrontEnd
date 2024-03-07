import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSuinosComponent } from './cadastro-suinos.component';

describe('CadastroSuinosComponent', () => {
  let component: CadastroSuinosComponent;
  let fixture: ComponentFixture<CadastroSuinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroSuinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroSuinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
