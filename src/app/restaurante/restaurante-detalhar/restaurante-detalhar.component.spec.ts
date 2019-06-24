import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteDetalharComponent } from './restaurante-detalhar.component';

describe('RestauranteDetalharComponent', () => {
  let component: RestauranteDetalharComponent;
  let fixture: ComponentFixture<RestauranteDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteDetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
