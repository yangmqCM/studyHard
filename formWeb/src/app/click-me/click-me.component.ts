import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent {
 clickMessage="";
 onClickMe(){
 	this.clickMessage='You are hero!'
 }
 
 values = '';
 /*
 onKey(event: any){// 没有任何类型信息能够揭示事件对象的属性，防止简单的错误。
 	 this.values += event.target.value +'|';
 }*/
onKey(event:KeyboardEvent){//$event 的类型现在是 KeyboardEvent
	this.values += (<HTMLInputElement> event.target).value + '|';
}
}
