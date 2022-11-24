import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './estudante/home/home.component';
import { FormularioComponent } from './estudante/formulario/formulario.component';

import { ListaComponent } from './estudante/lista/lista.component';
import { PerfilComponent } from './estudante/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'perfil/:id', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
