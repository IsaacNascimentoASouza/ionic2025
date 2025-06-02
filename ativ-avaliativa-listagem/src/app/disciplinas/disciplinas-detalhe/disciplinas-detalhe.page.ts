import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisciplinasDetalheService } from 'src/app/services/disciplinas-detalhe.service';

@Component({
  selector: 'app-disciplinas-detalhe',
  templateUrl: './disciplinas-detalhe.page.html',
  styleUrls: ['./disciplinas-detalhe.page.scss'],
  standalone: false,
})
export class DisciplinasDetalhePage implements OnInit {

  public disciplina: any;

  constructor(private route: ActivatedRoute,
    private service: DisciplinasDetalheService) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.disciplina = this.service.getById(id);
  }

}
