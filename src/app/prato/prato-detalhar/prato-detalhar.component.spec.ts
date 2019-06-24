import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoDetalharComponent } from './prato-detalhar.component';

describe('PratoDetalharComponent', () => {
  let component: PratoDetalharComponent;
  let fixture: ComponentFixture<PratoDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoDetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
