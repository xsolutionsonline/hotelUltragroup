import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { Country } from 'src/app/shared/models/country';
import { Department } from 'src/app/shared/models/department';
import { Hotel } from 'src/app/shared/models/hotel.interface';

@Component({
  selector: 'app-register-hotel',
  templateUrl: './register-hotel.component.html',
  styleUrls: ['./register-hotel.component.scss']
})
export class RegisterHotelComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<FormGroup>();
  hotelForm!: FormGroup;
  starting:number=1;
  isCountrySelected = false;
  isDepartmentSelected = false;
  countries!:Country[];
  departments!:Department[]; 
  cities!:string[];

  constructor(private fb: FormBuilder,
    private dataService:DataService) {}

  ngOnInit() {
    this.initializeForm();
    this.dataService.getDepartment().subscribe((services) => {
      this.countries = services; 
          
    });
  }

  initializeForm() {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      country: [''],
      department: [''],
      city: [''],
      isActive: [true],      
    });
  }

  createHotel() {
    if (this.hotelForm.valid) {
      const newHotel: Hotel = this.hotelForm.value;
      this.formSubmit.emit(this.hotelForm);
      console.log('Hotel creado:', newHotel);
    }
  }

  onCountryChange() {
    this.departments = [];
    this.departments = this.hotelForm.get('country')?.value.departments;
    this.hotelForm.get('department')?.setValue('');    
  }

  onDepartmentChange() {
    this.cities = [];
    this.cities = this.hotelForm.get('department')?.value.cities;
    this.hotelForm.get('city')?.setValue('');
  }
}