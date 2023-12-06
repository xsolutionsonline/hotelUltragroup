import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { Country } from 'src/app/shared/models/country.interface';
import { Department } from 'src/app/shared/models/department.interface';
import { SearchFilter } from 'src/app/shared/models/searchFilter.interface';

@Component({
  selector: 'app-search-hotels',
  templateUrl: './search-hotels.component.html',
  styleUrls: ['./search-hotels.component.scss']
})
export class SearchHotelsComponent implements OnInit {
  @Output() searchFilterHotels: EventEmitter<SearchFilter> = new EventEmitter();


  searchForm!: FormGroup;
  searchFilter!:SearchFilter;
  countries!:Country[];
  departments!:Department[] | null; 
  cities!:string[] | null;

  constructor(private formBuilder: FormBuilder,
    private dataService:DataService) {}

  ngOnInit(): void {
    this.dataService.getDepartment().subscribe((services) => {
      this.countries = services; 
      this.initializeForm();      
    });
   
  }
  initializeForm() {
    this.searchForm = this.formBuilder.group({
      entryDate: [null, Validators.required],
      exitDate: [null, Validators.required],
      numberOfPersons: [null, Validators.min(1)],
      country: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  searchHotels(): void {
    if (this.searchForm.valid) {
      this.searchFilter = {
        ...this.searchForm.value,
        country:this.searchForm.get('country')?.value.name,
        department:this.searchForm.get('department')?.value.name ,
        
      }
    
      this.searchFilterHotels.emit(this.searchFilter);
    }
  }

  onCountryChange() {
    this.departments = this.searchForm.get('country')?.value.departments;
    this.searchForm.get('department')?.setValue('');    
  }

  onDepartmentChange() {
    this.cities = this.searchForm.get('department')?.value.cities;
    this.searchForm.get('city')?.setValue('');
  }
}
