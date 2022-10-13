import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarFormComponentComponent } from './search-bar-form-component.component';

describe('SearchBarFormComponentComponent', () => {
  let component: SearchBarFormComponentComponent;
  let fixture: ComponentFixture<SearchBarFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
