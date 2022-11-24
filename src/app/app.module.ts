import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import { EstudanteModule } from './estudante/estudante.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, HttpClientModule, EstudanteModule, RouterLink],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
