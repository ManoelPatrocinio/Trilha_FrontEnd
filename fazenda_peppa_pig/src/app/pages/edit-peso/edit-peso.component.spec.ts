import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPesoComponent } from './edit-peso.component';

describe('EditPesoComponent', () => {
  let component: EditPesoComponent;
  let fixture: ComponentFixture<EditPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
