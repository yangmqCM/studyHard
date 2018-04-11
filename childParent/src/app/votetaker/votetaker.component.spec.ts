import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotetakerComponent } from './votetaker.component';

describe('VotetakerComponent', () => {
  let component: VotetakerComponent;
  let fixture: ComponentFixture<VotetakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotetakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotetakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should not emit the event initially', function () {
  let voteLabel = element(by.tagName('app-vote-taker'))
    .element(by.tagName('h3')).getText();
  expect(voteLabel).toBe('Agree: 0, Disagree: 0');
});

it('should process Agree vote', function () {
  let agreeButton1 = element.all(by.tagName('app-voter')).get(0)
    .all(by.tagName('button')).get(0);
  agreeButton1.click().then(function() {
    let voteLabel = element(by.tagName('app-vote-taker'))
      .element(by.tagName('h3')).getText();
    expect(voteLabel).toBe('Agree: 1, Disagree: 0');
  });
});

it('should process Disagree vote', function () {
  let agreeButton1 = element.all(by.tagName('app-voter')).get(1)
    .all(by.tagName('button')).get(1);
  agreeButton1.click().then(function() {
    let voteLabel = element(by.tagName('app-vote-taker'))
      .element(by.tagName('h3')).getText();
    expect(voteLabel).toBe('Agree: 1, Disagree: 1');
  });
});
});
