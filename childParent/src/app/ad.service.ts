import { Injectable }           from '@angular/core';

import { HeroJobAddComponent }   from './hero-job-add/hero-job-add.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AddItem }               from './add-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AddItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AddItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AddItem(HeroJobAddComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AddItem(HeroJobAddComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}
