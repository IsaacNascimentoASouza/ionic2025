import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public disciplinas = [
    {id: 1, titulo: "Redes de computadores", descricao: "Redes e infraestrutura de TI"},
    {id: 2, titulo: "Desenvolvimento mobile", descricao: "Desenvolvimento mobile híbrido utilizando Ionic"},
    {id: 3, titulo: "Lógica aplicada", descricao: "Lógica proposicional e regras de inferência"},
    {id: 4, titulo: "Projeto final", descricao: "Trabalho de conclusão de curso"}
  ]

  constructor() {}

}
