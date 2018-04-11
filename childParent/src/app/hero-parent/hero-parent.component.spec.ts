import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParentComponent } from './hero-parent.component';

describe('HeroParentComponent', () => {
  let component: HeroParentComponent;
  let fixture: ComponentFixture<HeroParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*测试代码如何运行*/
  let_heroNames=['张三','李四','王五'];
  let_masterName="Master";
  
  it('显示子组件的数据',function(){
  	let partent = element.all(by.tagName('app-hero-parent')).get(0);
  	let heroes = parent.all(by.tagName('app-hero-child'));
  	for(let i = 0;i<_heroNames.length;i++){
  		let childTitle = heroes.get(i).element(by.tagName('h3')).getText();
  		let childDetail= heroes.get(i).element(by.tagName('p')).getText();
  		expect(childTitle).toEqual(_heroName[i] + 'says:');
  		expect(childDetail).toContain(_masterName);
  	}
  });
});
