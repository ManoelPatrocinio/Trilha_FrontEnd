import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheSuinoComponent } from './detalhe-suino.component';

describe('DetalheSuinoComponent', () => {
  let component: DetalheSuinoComponent;
  let fixture: ComponentFixture<DetalheSuinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheSuinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheSuinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
