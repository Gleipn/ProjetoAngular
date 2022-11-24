import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private database: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validarCadastro();
  }

  validarCadastro() {
    this.formCadastro = this.formBuilder.group({
      imagem: ['', [Validators.maxLength(255)]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      nome: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      telefone: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      endereco: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      bairro: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      dataNascimento: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      nivelEscolaridade: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      instituicao: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
      motivoMatricula: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(1),
        ],
      ],
    });
  }

  cadastrarEstudante() {
    this.database.postEstudante(this.formCadastro.value);
    this.router.navigate(['']);
  }
}
