import { Component, OnInit } from '@angular/core';
/*
@Component({
  selector: 'app-keyup2',
  template: `
  <input #box (keyup)="onKey(box.value)">
	<p>{{values}}</p>
  `,
  styleUrls: ['./keyup.component.css']
}) 
export class KeyupComponent_2{
 values = "";
 onKey(value:string){
 	this.values += value + '|';
 }
}
 
@Component({
  selector: 'app-keyup3',
  template:` 
  <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>`,
  styleUrls: ['./keyup.component.css']
})

export class KeyupComponent_3{
	value="";
	onEnter(value:string){
		this.value = value;
	}
}
@Component({
	selector:'app-keyup4',
	template:`<input #box 
	(keyup.enter)="update(box.value)"
	(blur)="update(box.value)">
	<p>{{value}}</p>`
})

export class KeyUpComponent_4{
	value = "";
	update(value:string){
		this.value = value;
	}
}
*/
@Component({
	selector:'app-keyup',
	templateUrl: './keyup.component.html'
})
//export class KeyupComponent = [KeyupComponent_2,KeyupComponent_3,KeyUpComponent_4];
export class KeyupComponent = []
