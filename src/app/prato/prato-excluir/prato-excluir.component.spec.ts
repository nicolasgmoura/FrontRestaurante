import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoExcluirComponent } from './prato-excluir.component';

describe('PratoExcluirComponent', () => {
  let component: PratoExcluirComponent;
  let fixture: ComponentFixture<PratoExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
