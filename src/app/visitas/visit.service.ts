import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Visit } from './visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  // private REST_API_SERVER = "https://apinove.herokuapp.com/visits";
  private REST_API_SERVER = "http://localhost:3333/visits";

  // Injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // Obtém todas as visitas
  getVisits(): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>(this.REST_API_SERVER)
      .pipe(
        retry(2),
        catchError(this.handleError)
    );
  }

  // Salvando Visita
  saveVisit(visit: Visit): Observable<Visit> {
    return this.httpClient.post<Visit>(this.REST_API_SERVER, JSON.stringify(visit), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  updateVisit(visit: Visit): Observable<Visit> {
    return this.httpClient.put<Visit>(this.REST_API_SERVER + '/' + visit.id, JSON.stringify(visit), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  deleteVisit(visit: Visit){
    return this.httpClient.delete<Visit>(this.REST_API_SERVER + '/' + visit.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Manipulação de Erros

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, + mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
