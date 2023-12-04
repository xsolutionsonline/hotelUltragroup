import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RegisterHotelComponent } from './register-hotel/register-hotel.component';
import { HotelAdministrationRoutingModule } from './hotel-administration-routing.module';
import { MultiStepCreateHotelComponent } from './multi-step-create-hotel/multi-step-create-hotel.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from '../shared/components/shared.module';
import { RoomFormComponent } from './room-form/room-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalImagesRoomComponent } from './room-form/modal-images-room/modal-images-room.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    RegisterHotelComponent,
    MultiStepCreateHotelComponent,
    RoomFormComponent,
    ModalImagesRoomComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatGridListModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    HotelAdministrationRoutingModule,
    MatSnackBarModule,
    MatStepperModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
})
export class HotelAdministrationModule { }
