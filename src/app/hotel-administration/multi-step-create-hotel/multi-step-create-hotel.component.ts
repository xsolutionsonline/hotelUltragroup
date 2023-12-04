import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper  } from '@angular/material/stepper';

@Component({
  selector: 'app-multi-step-create-hotel',
  templateUrl: './multi-step-create-hotel.component.html',
  styleUrls: ['./multi-step-create-hotel.component.scss']
})
export class MultiStepCreateHotelComponent implements OnInit{
  @ViewChild(MatStepper ) stepper!: MatStepper ;
  
  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  
  submitStep1(form: FormGroup) {
    console.log('entro aqui',form);
    this.stepper.next();
  }

  submitStep2(file: File[]) {
    console.log('entro aqui 2',file);
    this.stepper.next();
  }

  submitStep3(form: FormGroup) {    
  }

  submitStep4(form: FormGroup) {

  }

  back(){
    this.stepper.previous();
  }
}
