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
import { ImageUploadComponent } from '../shared/components/image-upload/image-upload.component';
@NgModule({
  declarations: [
    RegisterHotelComponent,   
    ImageUploadComponent, 
    
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
    MatNativeDateModule,
    MatSlideToggleModule,
    HotelAdministrationRoutingModule,
    MatSnackBarModule,
    
    
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },     
  ],
})
export class HotelAdministrationModule { }
