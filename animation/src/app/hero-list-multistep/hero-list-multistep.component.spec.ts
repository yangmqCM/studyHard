import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListMultistepComponent } from './hero-list-multistep.component';

describe('HeroListMultistepComponent', () => {
  let component: HeroListMultistepComponent;
  let fixture: ComponentFixture<HeroListMultistepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListMultistepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListMultistepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
