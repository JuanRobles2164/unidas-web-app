import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxListFormComponentComponent } from './checkbox-list-form-component.component';

describe('CheckboxListFormComponentComponent', () => {
  let component: CheckboxListFormComponentComponent;
  let fixture: ComponentFixture<CheckboxListFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxListFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxListFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
