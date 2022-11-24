import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  exports: [HeaderComponent, CommonModule, BrowserModule, AppRoutingModule],
})
export class SharedModule {}
