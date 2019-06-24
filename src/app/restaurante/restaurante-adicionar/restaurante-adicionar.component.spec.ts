import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteAdicionarComponent } from './restaurante-adicionar.component';

describe('RestauranteAdicionarComponent', () => {
  let component: RestauranteAdicionarComponent;
  let fixture: ComponentFixture<RestauranteAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
