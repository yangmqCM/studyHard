import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentComponent } from './countdown-parent.component';

describe('CountdownParentComponent', () => {
  let component: CountdownParentComponent;
  let fixture: ComponentFixture<CountdownParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('timer and parent seconds should match', function () {
  let parent = element(by.tagName(parentTag));
  let message = parent.element(by.tagName('app-countdown-timer')).getText();
  browser.sleep(10); // give `seconds` a chance to catchup with `message`
  let seconds = parent.element(by.className('seconds')).getText();
  expect(message).toContain(seconds);
});

it('should stop the countdown', function () {
  let parent = element(by.tagName(parentTag));
  let stopButton = parent.all(by.tagName('button')).get(1);

  stopButton.click().then(function() {
    let message = parent.element(by.tagName('app-countdown-timer')).getText();
    expect(message).toContain('Holding');
  });
});
});
