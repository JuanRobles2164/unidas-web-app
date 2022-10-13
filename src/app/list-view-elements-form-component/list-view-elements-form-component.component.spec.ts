import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewElementsFormComponentComponent } from './list-view-elements-form-component.component';

describe('ListViewElementsFormComponentComponent', () => {
  let component: ListViewElementsFormComponentComponent;
  let fixture: ComponentFixture<ListViewElementsFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewElementsFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewElementsFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
