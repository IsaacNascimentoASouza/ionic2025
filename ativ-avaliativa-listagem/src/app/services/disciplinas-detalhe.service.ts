import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasDetalheService {

  private disciplinas = [
    {id: 1, titulo: "Redes de computadores", descricao: "Redes e infraestrutura de TI"},
    {id: 2, titulo: "Desenvolvimento mobile", descricao: "Desenvolvimento mobile híbrido utilizando Ionic"},
    {id: 3, titulo: "Lógica aplicada", descricao: "Lógica proposicional e regras de inferência"},
    {id: 4, titulo: "Projeto final", descricao: "Trabalho de conclusão de curso"}
  ]

  constructor() { }

  getById(id: number) {
    const disciplina = this.disciplinas.filter(
      disciplina => disciplina.id === id
    )
    return disciplina[0]
  }
}
