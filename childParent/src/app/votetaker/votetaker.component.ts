import { Component} from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent {
   agreed = 0;
   disagreed = 0;
   voters = ['Mr.IQ','MS.Universe','Bombasto'];
   
   onVoted(agreed:boolean){
   	  agreed ? this.agreed++ : this.disagreed++;
   }
}
