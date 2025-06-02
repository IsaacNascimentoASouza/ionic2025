import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicoDetalhePage } from './servico-detalhe.page';

describe('ServicoDetalhePage', () => {
  let component: ServicoDetalhePage;
  let fixture: ComponentFixture<ServicoDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
