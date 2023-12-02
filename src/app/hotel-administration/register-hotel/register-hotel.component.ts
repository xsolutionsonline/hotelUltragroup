import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotel } from 'src/app/shared/models/hotel.interface';

@Component({
  selector: 'app-register-hotel',
  templateUrl: './register-hotel.component.html',
  styleUrls: ['./register-hotel.component.scss']
})
export class RegisterHotelComponent implements OnInit {
  hotelForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      isActive: [true],      
    });
  }

  createHotel() {
    if (this.hotelForm.valid) {
      const newHotel: Hotel = this.hotelForm.value;
      
      console.log('Hotel creado:', newHotel);
    }
  }
}