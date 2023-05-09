import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHardComponent } from './editar-hard.component';

describe('EditarHardComponent', () => {
  let component: EditarHardComponent;
  let fixture: ComponentFixture<EditarHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
