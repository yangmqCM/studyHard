import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Hero } from '../hero.service';

@Component({
  selector: 'app-hero-list-enter-leave-state',
  template: `
  <ul>
 	<li *ngFor="let hero of heroes"
 		(click)="hero.toggleState()"
 		[@heroState]="hero.state"
 		>
 	{{hero.name}}
 	</li>
 </ul>`,
  styleUrls: ['./hero-list-enter-leave-state.component.css'],
  animations:[
  	trigger('heroState',[
  	state('inactive',style({transform:'translateX(0) scale(1)'})),
  	state('active',style({transform:'translateX(0) scale(1.1)'})),
  	transition('inactive => active',animate('100ms ease-in')),
  	transition('active => inactive',animate('100ms ease-out')),
  	transition('void => inactive',[
  	  style({transform:'translateX(-100%) scale(1)'}),
  	  animate(100)
  	]),
  	transition('inactive => void',[
  		animate(100,style({transform:'translateX(100%) scale(1)'}))
  	]),
  	transition('void => active',[
  		style({transform:'translateX(0) scale(0)'}),
  		animate(200)
  	]),
  	transition('active => void', [
  		animate(200, style({transform:'translateX(0) scale(0)'}))
  	])
  	
  	])
  ]
})
export class HeroListEnterLeaveStateComponent {
 
	@Input() heroes:Hero[];
}
