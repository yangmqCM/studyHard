import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LittleTourComponent } from './little-tour/little-tour.component';


@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    LoopBackComponent,
    KeyupComponent,
    LittleTourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
