import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveNameDropdownComponent } from './leave-name-dropdown.component';

describe('LeaveNameDropdownComponent', () => {
  let component: LeaveNameDropdownComponent;
  let fixture: ComponentFixture<LeaveNameDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveNameDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveNameDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
