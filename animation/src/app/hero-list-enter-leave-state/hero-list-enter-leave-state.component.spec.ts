import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListEnterLeaveStateComponent } from './hero-list-enter-leave-state.component';

describe('HeroListEnterLeaveStateComponent', () => {
  let component: HeroListEnterLeaveStateComponent;
  let fixture: ComponentFixture<HeroListEnterLeaveStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListEnterLeaveStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListEnterLeaveStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
