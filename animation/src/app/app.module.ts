import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';  
import { AppComponent } from './app.component';
import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';
import { HeroListEnterLeaveStateComponent } from './hero-list-enter-leave-state/hero-list-enter-leave-state.component';
import { HeroListAutoComponent } from './hero-list-auto/hero-list-auto.component';
import { HeroListTimingComponent } from './hero-list-timing/hero-list-timing.component';
import { HeroListMultistepComponent } from './hero-list-multistep/hero-list-multistep.component';
import { HeroListGroupsComponent } from './hero-list-groups/hero-list-groups.component';
import { HeroTeamBuilderComponent } from './hero-team-builder/hero-team-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroListBasicComponent,
    HeroListEnterLeaveComponent,
    HeroListEnterLeaveStateComponent,
    HeroListAutoComponent,
    HeroListTimingComponent,
    HeroListMultistepComponent,
    HeroListGroupsComponent,
    HeroTeamBuilderComponent 
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [HeroTeamBuilderComponent]
})
export class AppModule { }
