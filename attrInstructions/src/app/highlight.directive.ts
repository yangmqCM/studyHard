import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'//'[]'属性型选择器
}) 
export class HighlightDirective {
	
  constructor(private  el:ElementRef) {  
  //el.nativeElement.style.backgroundColor = 'yellow'; 
  }  
	@HostListener('mouseenter') onMouseEnter(){
		this.hightlight('yellow');
	}
	
	@HostListener('mouseleave') onMouseLeave(){
		this.hightlight(null);
	}
	private hightlight(color:string){
			this.el.nativeElement.style.backgroundColor = color;
	}
}
