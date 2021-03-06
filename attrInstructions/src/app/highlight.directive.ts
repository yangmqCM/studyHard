import { Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'//'[]'属性型选择器
}) 
export class HighlightDirective {
	
  constructor(private  el:ElementRef) {   
  }  
  @Input('appHighlight') hightlightColor: string;
  @Input() defaultColor: string;
  
	@HostListener('mouseenter') onMouseEnter(){ 
	 this.hightlight(this.hightlightColor|| this.defaultColor ||'red');
	}
	
	@HostListener('mouseleave') onMouseLeave(){
		this.hightlight(null);
	}
	private hightlight(color:string){
			this.el.nativeElement.style.backgroundColor = color;
	}
	
}
