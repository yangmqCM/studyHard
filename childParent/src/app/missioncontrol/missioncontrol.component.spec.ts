import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioncontrolComponent } from './missioncontrol.component';

describe('MissioncontrolComponent', () => {
  let component: MissioncontrolComponent;
  let fixture: ComponentFixture<MissioncontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissioncontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioncontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  it('should announce a mission', function () {
  let missionControl = element(by.tagName('app-mission-control'));
  let announceButton = missionControl.all(by.tagName('button')).get(0);
  announceButton.click().then(function () {
    let history = missionControl.all(by.tagName('li'));
    expect(history.count()).toBe(1);
    expect(history.get(0).getText()).toMatch(/Mission.* announced/);
  });
});

it('should confirm the mission by Lovell', function () {
  testConfirmMission(1, 2, 'Lovell');
});

it('should confirm the mission by Haise', function () {
  testConfirmMission(3, 3, 'Haise');
});

it('should confirm the mission by Swigert', function () {
  testConfirmMission(2, 4, 'Swigert');
});

function testConfirmMission(buttonIndex: number, expectedLogCount: number, astronaut: string) {
  let _confirmedLog = ' confirmed the mission';
  let missionControl = element(by.tagName('app-mission-control'));
  let confirmButton = missionControl.all(by.tagName('button')).get(buttonIndex);
  confirmButton.click().then(function () {
    let history = missionControl.all(by.tagName('li'));
    expect(history.count()).toBe(expectedLogCount);
    expect(history.get(expectedLogCount - 1).getText()).toBe(astronaut + _confirmedLog);
  });
}
});
