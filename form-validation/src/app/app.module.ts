import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { ForbiddenNameDirective } from './forbidden-name.directive';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormReactiveComponent,
    ForbiddenNameDirective,
    HeroFormTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
