import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers =  ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
            
  model = new Hero(18,'Dr IQ',this.powers[0],'Chuck Overstreet');
  
  submitted = false; 
  onSubmit(){ this.submitted = true; }
 
 
  get diagnostic(){  	return JSON.stringify(this.model); } 
  newHero(){
  	this.model = new Hero(42,'','');
  }
  
  skyDog():Hero{
  	let myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('my hero is called'+myHero.name); 
      return myHero;
  }
  
  showFormControls(form: any){
  	return form && form.controls['name'] && form.controls['name'].value;
  }
}
