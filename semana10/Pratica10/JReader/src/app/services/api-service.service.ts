import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlToJson = '../assets/veiculos.json';
  dados: any;

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<any> {
    return this.http.get(this.urlToJson)
  }






}
