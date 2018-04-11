import { Component} from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: '<h2>Master control {{names.length}} names</h2><app-name-child *ngFor="let name of names" [name]="name"></app-name-child>'
  
})
export class NameParentComponent {
 names = ['战枫',' ','静渊王']; //子组件的set替换了这里的空格
}
