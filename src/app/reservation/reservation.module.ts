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
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from '../shared/components/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';

import { SearchHotelsComponent } from './search-hotels/search-hotels.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { CreateReservationModalComponent } from './create-reservation-modal/create-reservation-modal.component';
import { ListHotelsReservationComponent } from './list-hotels-reservation/list-hotels-reservation.component';
import { RoomModalComponent } from './room-modal/room-modal.component';
import { ListRoomsReservationComponent } from './list-rooms-reservation/list-rooms-reservation.component';

@NgModule({
  declarations: [
    SearchHotelsComponent,
    CreateReservationModalComponent,
    ListHotelsReservationComponent,
    RoomModalComponent,
    ListRoomsReservationComponent
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
    ReservationRoutingModule,
    MatSnackBarModule,
    MatStepperModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
})
export class ReservationModule { }
