import { TestBed } from '@angular/core/testing';

import { LivrosResolverGuard } from './livros-resolver.guard';

describe('LivrosResolverGuard', () => {
  let guard: LivrosResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LivrosResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
