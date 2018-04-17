import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';
import { HeroSwitchComponent } from './hero-switch/hero-switch.component';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { ExponentialPipe } from './exponential.pipe';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';

import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

 import {
  FlyingHeroesPipe,
  FlyingHeroesImpurePipe
} from './flying-heroes.pipe';

/*import { FlyHeroesImpurePipe } from './fly-heroes-impure.pipe';*/
/*import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';*/
import { FetchJsonPipe } from './fetch-json.pipe';
import { HeroListComponent } from './hero-list/hero-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    HeroSwitchComponent,
    HeroBirthdayComponent,
    ExponentialPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,  
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe,
    HeroListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
