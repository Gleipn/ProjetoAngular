import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DatabaseService } from 'src/app/service/database.service';
import { Estudantes } from '../lista/estudante';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  routerId = null;

  alunos: Estudantes[] = [];
  aluno = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataBase: DatabaseService
  ) {}

  ngOnInit(): void {
    this.routerId = this.activatedRoute.snapshot.params['id'];

    if (this.routerId) {
      this.dataBase
        .getEstudante()
        .subscribe((results) => (this.alunos = results));

      for (let i = 0; i < this.alunos.length; i++) {
        if (this.alunos[i].id == this.routerId) {
          this.aluno = this.alunos[i];
        }
      }
    }
  }
}
