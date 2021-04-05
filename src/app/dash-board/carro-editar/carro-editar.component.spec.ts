import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroEditarComponent } from './carro-editar.component';

describe('CarroEditarComponent', () => {
  let component: CarroEditarComponent;
  let fixture: ComponentFixture<CarroEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
