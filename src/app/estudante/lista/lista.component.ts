import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DatabaseService } from 'src/app/service/database.service';
import { Estudantes } from './estudante';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  estudantes: Estudantes[] = [];

  constructor(private database: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.database
      .getEstudante()
      .subscribe((lista) => (this.estudantes = lista));
  }

  deletar(id: number) {
    this.database.delEstudante(id);
    this.router.navigate(['']);
  }
}
