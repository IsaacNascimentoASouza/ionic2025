import { TestBed } from '@angular/core/testing';

import { DisciplinasDetalheService } from './disciplinas-detalhe.service';

describe('DisciplinasDetalheService', () => {
  let service: DisciplinasDetalheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinasDetalheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
