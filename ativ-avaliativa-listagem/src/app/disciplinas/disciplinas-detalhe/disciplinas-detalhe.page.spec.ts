import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisciplinasDetalhePage } from './disciplinas-detalhe.page';

describe('DisciplinasDetalhePage', () => {
  let component: DisciplinasDetalhePage;
  let fixture: ComponentFixture<DisciplinasDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
