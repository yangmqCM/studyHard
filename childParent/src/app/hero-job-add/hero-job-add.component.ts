import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-hero-job-add',
  template: 
  `
   <div class="job-ad"> 
   	<h4>{{data.headline}}</h4>
   	{{data.body}} 
   </div>
  `,
  styleUrls: ['./hero-job-add.component.css']
})
export class HeroJobAddComponent {
 @Input() data:any;
}
