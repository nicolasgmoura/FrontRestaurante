import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteExcluirComponent } from './restaurante-excluir.component';

describe('RestauranteExcluirComponent', () => {
  let component: RestauranteExcluirComponent;
  let fixture: ComponentFixture<RestauranteExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
