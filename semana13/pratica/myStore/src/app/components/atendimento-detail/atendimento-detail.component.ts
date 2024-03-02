import { Component, Input } from '@angular/core';
import { type_atendimento } from '../../types/atendimento';

@Component({
  selector: 'app-atendimento-detail',
  standalone: true,
  imports: [],
  templateUrl: './atendimento-detail.component.html',
  styleUrl: './atendimento-detail.component.css'
})
export class AtendimentoDetailComponent {

  @Input() atendimento:type_atendimento|null = null;
}
