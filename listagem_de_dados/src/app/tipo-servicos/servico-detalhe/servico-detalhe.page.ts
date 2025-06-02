import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoServicosService } from 'src/app/services/tipo-servicos.service';

@Component({
  selector: 'app-servico-detalhe',
  templateUrl: './servico-detalhe.page.html',
  styleUrls: ['./servico-detalhe.page.scss'],
  standalone: false,
})
export class ServicoDetalhePage implements OnInit {

  public servico: any;

  constructor(private route: ActivatedRoute,
    private service: TipoServicosService) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.servico = this.service.getById(id);
  }
}
