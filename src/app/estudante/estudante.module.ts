import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';

import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    FormularioComponent,
    HomeComponent,
    PerfilComponent,
    ListaComponent,
  ],
  imports: [SharedModule, FormsModule, ReactiveFormsModule],

  exports: [
    FormularioComponent,
    HomeComponent,
    PerfilComponent,
    ListaComponent,
  ],
})
export class EstudanteModule {}
