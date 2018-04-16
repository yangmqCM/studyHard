import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(
  	private templateRef: TemlateRef<any>,
  	private viewContainer: ViewContainerRef
  ) { }
  
  @Input() set appUnless(condition: boolean){
  	
  }

}
