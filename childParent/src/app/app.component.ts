import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
import { AddItem }            from './add-item';

@Component({
  selector: 'app-root',
  template: `
  
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
  styles: ['assets/sample.css']
})
export class AppComponent implements OnInit {
  ads: AddItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

