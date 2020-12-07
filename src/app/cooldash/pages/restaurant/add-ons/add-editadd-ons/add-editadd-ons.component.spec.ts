import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditaddOnsComponent } from './add-editadd-ons.component';

describe('AddEditaddOnsComponent', () => {
  let component: AddEditaddOnsComponent;
  let fixture: ComponentFixture<AddEditaddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditaddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditaddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
