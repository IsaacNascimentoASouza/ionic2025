import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-servicos-listagem',
  templateUrl: './tipo-servicos-listagem.page.html',
  styleUrls: ['./tipo-servicos-listagem.page.scss'],
  standalone: false,
})
export class TipoServicosListagemPage implements OnInit {

  public lista = [
    {id: 1, titulo: "Montagem e manutenção", preco: "100"},
    {id: 2, titulo: "Desenvolvimento mobile", preco: "5000"},
    {id: 3, titulo: "Desenvolvimento web", preco: "8000"},
    {id: 4, titulo: "Analise de sistemas", preco: "3000"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
