import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImagesRoomComponent } from './modal-images-room.component';

describe('ModalImagesRoomComponent', () => {
  let component: ModalImagesRoomComponent;
  let fixture: ComponentFixture<ModalImagesRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalImagesRoomComponent]
    });
    fixture = TestBed.createComponent(ModalImagesRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
