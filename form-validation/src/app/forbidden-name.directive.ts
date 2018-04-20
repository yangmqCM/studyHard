import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';


export function forbiddenNameValidator(nameRe:RegExp): ValidatorFn{
	return (control: AbstractControl) :{[key:string]:any} => {
		const forbidden = nameRe.test(control.value);
		return forbidden ? {'forbiddenName':{
			value:control.value
		}}: null
	}
}
 @Directive({
  selector: '[appForbiddenName]',
  providers:[{provide:NG_VALIDATORS,useExisting:
  ForbiddenNameDirective,multi:true}]
})

export class ForbiddenNameDirective implements Validator{
  @Input('appForbiddenName') forbiddenName: string;
  validate(control:AbstractControl):{[key:string]:any} {
  	return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName,'i'))(control):null;
  }
}
