import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListTimingComponent } from './hero-list-timing.component';

describe('HeroListTimingComponent', () => {
  let component: HeroListTimingComponent;
  let fixture: ComponentFixture<HeroListTimingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListTimingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
