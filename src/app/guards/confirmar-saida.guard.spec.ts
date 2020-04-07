import { TestBed } from '@angular/core/testing';

import { ConfirmarSaidaGuard } from './confirmar-saida.guard';

describe('ConfirmarSaidaGuard', () => {
  let guard: ConfirmarSaidaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmarSaidaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
