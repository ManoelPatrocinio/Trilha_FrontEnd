import { Component, Input } from '@angular/core';
import { type_suino } from '../../types/type_suino';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-suino-detail',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './card-suino-detail.component.html',
  styleUrl: './card-suino-detail.component.css'
})
export class CardSuinoDetailComponent {
  @Input() suino:type_suino|null = null

  constructor(private apiService:ApiService){}
  deleteSuino(){
    this.apiService.deleteSuinoById(this.suino!.id!)
  }
}
