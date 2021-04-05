import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCarrosComponent } from './tabela-carros.component';

describe('TabelaCarrosComponent', () => {
  let component: TabelaCarrosComponent;
  let fixture: ComponentFixture<TabelaCarrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaCarrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
