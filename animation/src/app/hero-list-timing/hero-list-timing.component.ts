import { Component, Input } from '@angular/core';
import { trigger,state,style,animate,transition} from '@angular/animations';
import {Hero} from '../hero.service';
@Component({
  selector: 'app-hero-list-timing',
  template: `
  <ul>
	<li *ngFor="let hero of heroes"
		[@flyInOut]="'in'"
		(click)="hero.toggleState()"
		>
		{{hero.name}}
	</li>
</ul>
`,
  styleUrls: ['./hero-list-timing.component.css'],
  
  animations:[ 
 		 trigger('flyInOut',[
 		  state('in',style({opacity:1,transform:'translateX(0)'})),
 		  transition('void => *',[
 		  	style({opacity:0,
 		  				transform:'translateX(-100%)'
 		  		}),
 		  		animate('0.2s ease-in')
 		  ]),
 		  transition('* => void',[
 		  	animate('0.2s 0.1s ease-out',style({
 		  		opacity:0,
 		  		transform:'translateX(100%)'
 		  	}))
 		  ])
 		 ])
  ]
})
export class HeroListTimingComponent{
 @Input() heroes :Hero[];
}
