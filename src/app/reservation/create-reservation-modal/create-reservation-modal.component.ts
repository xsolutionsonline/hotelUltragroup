import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Gender } from 'src/app/shared/enums/gender-enum';
import { DocumentType } from 'src/app/shared/enums/documentType-enum';


@Component({
  selector: 'app-create-reservation-modal',
  templateUrl: './create-reservation-modal.component.html',
  styleUrls: ['./create-reservation-modal.component.scss']
})
export class CreateReservationModalComponent {
  reservationForm!: FormGroup;
  maxGuests: number;
  genderOptions: { value: Gender; label: Gender; }[];
  documentTypeOptions: { value: DocumentType; label: DocumentType; }[];

  constructor(
    public dialogRef: MatDialogRef<CreateReservationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,

  ) {
    this.maxGuests = data.maxGuests || 2;
    this.genderOptions = Object.values(Gender).map(gender => ({ value: gender, label: gender }));
    this.documentTypeOptions = Object.values(DocumentType).map(type => ({ value: type, label: type }));
    this.initializeForm();
  }

  initializeForm(): void {
    this.reservationForm = this.fb.group({
      users: this.fb.array([]),
      emergencyContact: this.fb.group({
        fullName: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      })
    });

    for (let i = 0; i < this.maxGuests; i++) {
      this.addGuest();
    }
  }

  get users() {
    return this.reservationForm.get('users') as FormArray;
  }

  addGuest(): void {
    if (this.users.length < this.maxGuests) {
      this.users.push(
        this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          birthDate: [null, Validators.required], 
          gender: [null, Validators.required],    
          documentType: [null, Validators.required],
          documentNumber: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phoneNumber: ['', Validators.required],
        })
      );
    }
  }


  saveReservation(): void {
    this.dialogRef.close(this.reservationForm.value);
  }
}
