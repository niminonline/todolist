import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingListComponent } from './ongoing-list.component';

describe('OngoingListComponent', () => {
  let component: OngoingListComponent;
  let fixture: ComponentFixture<OngoingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OngoingListComponent]
    });
    fixture = TestBed.createComponent(OngoingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
