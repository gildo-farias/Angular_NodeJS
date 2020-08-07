import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLocacaoComponent } from './cadastro-locacao.component';

describe('CadastroLocacaoComponent', () => {
  let component: CadastroLocacaoComponent;
  let fixture: ComponentFixture<CadastroLocacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLocacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
