import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Estudantes } from '../estudante/lista/estudante';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  readonly API = 'http://localhost:3000/estudantes/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  postEstudante(form: any) {
    return this.http
      .post(this.API, JSON.stringify(form), this.httpOptions)
      .subscribe();
  }

  updateFoto(dados: Estudantes) {
    return this.http
      .put(this.API + dados.id, JSON.stringify(dados), this.httpOptions)
      .subscribe();
  }

  getEstudante() {
    return this.http.get<Estudantes[]>(this.API);
  }

  delEstudante(id: number) {
    return this.http.delete(this.API + id).subscribe();
  }
}
