import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotelsReservationComponent } from './list-hotels-reservation.component';

describe('ListHotelsReservationComponent', () => {
  let component: ListHotelsReservationComponent;
  let fixture: ComponentFixture<ListHotelsReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHotelsReservationComponent]
    });
    fixture = TestBed.createComponent(ListHotelsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
