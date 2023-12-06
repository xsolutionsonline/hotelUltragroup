import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationModalComponent } from './create-reservation-modal.component';

describe('CreateReservationModalComponent', () => {
  let component: CreateReservationModalComponent;
  let fixture: ComponentFixture<CreateReservationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReservationModalComponent]
    });
    fixture = TestBed.createComponent(CreateReservationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
