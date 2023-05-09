import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSoftComponent } from './editar-soft.component';

describe('EditarSoftComponent', () => {
  let component: EditarSoftComponent;
  let fixture: ComponentFixture<EditarSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
