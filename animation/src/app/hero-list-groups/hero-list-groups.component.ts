import { Component, Input } from '@angular/core';
import { trigger,state,style,animate,transition,group} from '@angular/animations'
import { Hero } from '../hero.service';

@Component({
  selector: 'app-hero-list-groups',
  template: `
  <ul>
	<li *ngFor="let hero of heroes"
		[@flyInOut]="'in'"
		>{{hero.name}}</li>
</ul>`,
  styleUrls: ['./hero-list-groups.component.css'],
  styles:[`
  li{
  	padding:0 !important;
  	text-align:center;
  }
  `],
  animations:[
  	trigger('flyInOut',[
  		state('in',style({width:120,transform:'translateX(0)',opacity:1})),
  		transition('void => *',[
  		style({width:10,transform:'translateX(50px)',
  		opacity:0}),
  		group([
  			animate('0.3s 0.1s ease',style({
  				transform:'translateX(0)',
  				width:120
  			})),
  			animate('0.3s ease',style({
  				opacity:1
  			}))
  		])
  		]),
  		transition('* => void',[
  			group([
  				animate('0.3s ease',style({
  					transform:'translateX(50px)',
  					width:10
  				})),
  				animate('0.3s 0.2s ease',style({
  					opacity:0
  				}))
  			])
  		]) 
  	])
  ]
})
export class HeroListGroupsComponent{
  @Input() heroes: Hero[];
}
