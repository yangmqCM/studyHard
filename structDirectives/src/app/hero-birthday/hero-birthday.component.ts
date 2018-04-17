import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  templateUrl: './hero-birthday.component.html',
  styleUrls: ['./hero-birthday.component.css']
})
export class HeroBirthdayComponent {
 birthday = new Date(1994,10,24);
 toggle = true;
 get format(){
 	return this.toggle ? 'shortDate':'fullDate';
 }
 toggleFormat(){
 this.toggle = !this.toggle;
 }
}
