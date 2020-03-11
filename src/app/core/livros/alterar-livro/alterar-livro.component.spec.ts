import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarLivroComponent } from './alterar-livro.component';

describe('AlterarLivroComponent', () => {
  let component: AlterarLivroComponent;
  let fixture: ComponentFixture<AlterarLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
