import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListModalComponent } from './guest-list-modal.component';

describe('GuestListModalComponent', () => {
  let component: GuestListModalComponent;
  let fixture: ComponentFixture<GuestListModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestListModalComponent]
    });
    fixture = TestBed.createComponent(GuestListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
