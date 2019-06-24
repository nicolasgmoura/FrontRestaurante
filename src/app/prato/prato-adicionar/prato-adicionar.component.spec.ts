import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoAdicionarComponent } from './prato-adicionar.component';

describe('PratoAdicionarComponent', () => {
  let component: PratoAdicionarComponent;
  let fixture: ComponentFixture<PratoAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
