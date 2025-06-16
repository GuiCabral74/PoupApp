import { Component, input } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { Transacao } from '../compartilhados/transacao.model';
import { BotaoComponent } from "../../compartilhados/botao/botao.component";
// import { DestaqueValorNumericoDirective } from '../../compartilhados/destaque-valor-numerico.directive';

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, BotaoComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacoes = input.required<Transacao[]>();
}
