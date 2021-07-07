import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableTabComponent } from './scrollable-tab.component';

// @ts-ignore
describe('ScrollableTabComponent', () => {
  let component: ScrollableTabComponent;
  let fixture: ComponentFixture<ScrollableTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollableTabComponent]
    })
      .compileComponents();
  }));

  // @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
