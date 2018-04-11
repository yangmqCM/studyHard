import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameParentComponent } from './name-parent.component';

describe('NameParentComponent', () => {
  let component: NameParentComponent;
  let fixture: ComponentFixture<NameParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display trimmed, non-empty names', function () {
  let _nonEmptyNameIndex = 0;
  let _nonEmptyName = '"Mr. IQ"';
  let parent = element.all(by.tagName('app-name-parent')).get(0);
  let hero = parent.all(by.tagName('app-name-child')).get(_nonEmptyNameIndex);

  let displayName = hero.element(by.tagName('h3')).getText();
  expect(displayName).toEqual(_nonEmptyName);
});

it('should replace empty name with default name', function () {
  let _emptyNameIndex = 1;
  let _defaultName = '"<no name set>"';
  let parent = element.all(by.tagName('app-name-parent')).get(0);
  let hero = parent.all(by.tagName('app-name-child')).get(_emptyNameIndex);

  let displayName = hero.element(by.tagName('h3')).getText();
  expect(displayName).toEqual(_defaultName);
});
});
