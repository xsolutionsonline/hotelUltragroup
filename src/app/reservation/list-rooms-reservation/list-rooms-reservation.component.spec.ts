import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoomsReservationComponent } from './list-rooms-reservation.component';

describe('ListRoomsReservationComponent', () => {
  let component: ListRoomsReservationComponent;
  let fixture: ComponentFixture<ListRoomsReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRoomsReservationComponent]
    });
    fixture = TestBed.createComponent(ListRoomsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
