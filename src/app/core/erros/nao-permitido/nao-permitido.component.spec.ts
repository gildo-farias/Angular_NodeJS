import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoPermitidoComponent } from './nao-permitido.component';

describe('NaoPermitidoComponent', () => {
  let component: NaoPermitidoComponent;
  let fixture: ComponentFixture<NaoPermitidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoPermitidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoPermitidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
