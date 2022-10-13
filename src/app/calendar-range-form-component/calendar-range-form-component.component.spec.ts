import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRangeFormComponentComponent } from './calendar-range-form-component.component';

describe('CalendarRangeFormComponentComponent', () => {
  let component: CalendarRangeFormComponentComponent;
  let fixture: ComponentFixture<CalendarRangeFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarRangeFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarRangeFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
