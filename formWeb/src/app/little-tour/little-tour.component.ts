import { Component } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  templateUrl: './little-tour.component.html',
  styleUrls: ['./little-tour.component.css']
})
export class LittleTourComponent {
 heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
 
 addHero(newHero:string){
 	if(newHero){
 		this.heroes.push(newHero);
 	}
 }
}
