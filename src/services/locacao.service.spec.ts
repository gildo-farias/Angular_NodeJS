import { TestBed } from '@angular/core/testing';

import { LocacaoService } from './locacao.service';

describe('LocacaoService', () => {
  let service: LocacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
