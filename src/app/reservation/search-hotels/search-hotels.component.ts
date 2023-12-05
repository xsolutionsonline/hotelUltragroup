import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  countries = ['Colombia', 'Peru', 'Chile'];
  departments = ['Antioquia', 'Lima', 'Santiago'];
  cities = ['Medellín', 'Lima', 'Santiago'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
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
        ...this.searchForm.value
      }
    
      this.searchFilterHotels.emit(this.searchFilter);
    }
  }
}
