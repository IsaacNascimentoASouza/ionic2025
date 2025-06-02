import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoServicosService {

  private lista = [
    {id: 1, titulo: "Montagem e manutenção", preco: "100"},
    {id: 2, titulo: "Desenvolvimento mobile", preco: "5000"},
    {id: 3, titulo: "Desenvolvimento web", preco: "8000"},
    {id: 4, titulo: "Analise de sistemas", preco: "3000"}
  ]

  constructor() { }

  getById(id: number) {
    const servico = this.lista.filter(
      servico => servico.id === id
    )
    return servico[0]
  }
}