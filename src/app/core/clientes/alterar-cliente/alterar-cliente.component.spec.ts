import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarClienteComponent } from './alterar-cliente.component';

describe('AlterarClienteComponent', () => {
  let component: AlterarClienteComponent;
  let fixture: ComponentFixture<AlterarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
