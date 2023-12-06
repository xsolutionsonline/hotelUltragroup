import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { Country } from 'src/app/shared/models/country.interface';
import { Department } from 'src/app/shared/models/department.interface';
import { Hotel } from 'src/app/shared/models/hotel.interface';

@Component({
  selector: 'app-register-hotel',
  templateUrl: './register-hotel.component.html',
  styleUrls: ['./register-hotel.component.scss']
})
export class RegisterHotelComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<Hotel>();
  @Input() hotel!:Hotel;
  hotelForm!: FormGroup;
  rate:number=0;
  isCountrySelected = false;
  isDepartmentSelected = false;
  countries!:Country[];
  departments!:Department[] | null; 
  cities!:string[] | null;

  constructor(private fb: FormBuilder,
    private dataService:DataService) {}

  ngOnInit() {
    this.dataService.getDepartment().subscribe((services) => {
      this.countries = services; 
      this.initializeForm();      
    });
    
    
  }

  initializeForm() {
    
    this.hotelForm = this.fb.group({
      name: [this.hotel?.name ?this.hotel.name :'', Validators.required],
      description: [this.hotel?.description ?this.hotel.description :'', Validators.required],
      country: [this.hotel?.country ? this.obtainCountry(this.hotel.country) :'',Validators.required],
      department: [this.hotel?.department ?this.departments?.find(data => data.name === this.hotel.department) :'',Validators.required],
      city: [this.hotel?.city ?this.hotel.city :'',Validators.required],
      active: [this.hotel?.active ?this.hotel.active :true],      
    });
    this.rate = this.hotel?.starCategory ? this.hotel.starCategory : 0;
  }

  createHotel() {
    if (this.hotelForm.valid) {
      const newHotel: Hotel = {
        ...this.hotelForm.value,
        country:this.hotelForm.get('country')?.value.name,
        department:this.hotelForm.get('department')?.value.name ,
        starCategory:this.rate
      };
      this.formSubmit.emit(newHotel);
      
    }
  }

  rateStar(rate:number){
    this.rate =rate;
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

  obtainCountry(countryP: string): Country | null {
    const country = this.countries.find(data => data.name.toUpperCase()=== countryP.toUpperCase());
    this.departments = country?.departments ? country?.departments : null;
    const cities =this.departments?.find(data => data.name === this.hotel.department)?.cities;
    this.cities =  cities ? cities : null;
    return country ? country : null;
  }
}
