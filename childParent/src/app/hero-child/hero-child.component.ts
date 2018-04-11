import { Component, OnInit,Input} from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child',
  template: '<h3>{{hero.name}} says:</h3> <p>I,{{hero.name}},am at you service ,{{master}}</p>',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent{
  @Input() hero:Hero;
  @Input('master') masterName: string;
}
