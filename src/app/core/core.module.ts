import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    ToolbarComponent,
    HttpClientModule
  ]
})

export class CoreModule { }
