import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepCreateHotelComponent } from './multi-step-create-hotel.component';

describe('MultiStepCreateHotelComponent', () => {
  let component: MultiStepCreateHotelComponent;
  let fixture: ComponentFixture<MultiStepCreateHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiStepCreateHotelComponent]
    });
    fixture = TestBed.createComponent(MultiStepCreateHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
