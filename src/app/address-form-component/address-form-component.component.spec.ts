import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormComponentComponent } from './address-form-component.component';

describe('AddressFormComponentComponent', () => {
  let component: AddressFormComponentComponent;
  let fixture: ComponentFixture<AddressFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
