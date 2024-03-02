import { Injectable } from '@angular/core';
import { type_atendimento } from '../types/atendimento';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loadedAtendimentos: type_atendimento[] = [];

  constructor(private http: HttpClient) { }



  addAtendimento(newAtendimento: type_atendimento) {

    this.http.post(
      'https://residencia-b1914-default-rtdb.firebaseio.com/posts.json',
      newAtendimento)
      .pipe(
        catchError(error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Ocorreu um erro ao adicionar o atendimento. Por favor, tente novamente.'
          });
          return throwError(error);
        })
      ).subscribe(responseData => {
        console.log(responseData);
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Atendimento adicionado com sucesso.'
        });
      });
  }

  

  getAtendimento() {

    return this.http.get< {[key:string]: type_atendimento}>('https://residencia-b1914-default-rtdb.firebaseio.com/posts.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    ).pipe(
      catchError( error =>{
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Ocorreu um erro ao adicionar o atendimento. Por favor, tente novamente.'
        });
        return throwError(error);
      }),
      map(responseData => {
        // Convertendo o objeto de resposta em um array de objetos
        if (responseData) {
          return Object.keys(responseData).map(key => ({ id: key, ...responseData[key] }));
        } else {
          return [];
        }
      })
    )

  }




  // getUser(id: string): Observable<type_atendimento[]> {
  //   return this.http.get<type_atendimento[]>(`/api/user/${id}`);
  // }

  apagarTodosAtendimentos() {
    return this.http.delete('https://residencia-b1914-default-rtdb.firebaseio.com/posts.json');
  }

  
  editarAtendimento(id:string, newAtendimento: type_atendimento) {
    return this.http.put(`https://residencia-b1914-default-rtdb.firebaseio.com/posts/${id}.json`, newAtendimento, {observe: 'response'});
  }
}
