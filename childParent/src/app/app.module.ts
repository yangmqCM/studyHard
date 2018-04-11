import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { MissioncontrolComponent } from './missioncontrol/missioncontrol.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { HeroAppComponent } from './hero-app/hero-app.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAddComponent } from './hero-job-add/hero-job-add.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
 
 


@NgModule({ 
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    MissioncontrolComponent,
    AstronautComponent,
    HeroAppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAddComponent,
    HeroProfileComponent 
    
  ],
  entryComponents: [ HeroJobAddComponent, HeroProfileComponent ],
  imports: [
    BrowserModule
  ],
 providers:[AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
