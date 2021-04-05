import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroPrincipalComponent } from './carro-principal.component';

describe('CarroPrincipalComponent', () => {
  let component: CarroPrincipalComponent;
  let fixture: ComponentFixture<CarroPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
