import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<File[]>();
  @Output() back = new EventEmitter<void>();
  currentFile?: File;
  progress = 0;
  message = '';
  @Input() title!: string;
  @Input() nextTittle!: string;
  @Input() backTittle!: string;
  selectedImages: File[] = Array(6);
  fileName = 'Select File';
  uploadImageForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.uploadImageForm = this.fb.group({
      images: [[]],
    });
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  async onImageChange(event: any, index: number) {

    const file = await event.target.files[0];
    if (file) {
      this.selectedImages[index] = file;
    }
  }

  getImageUrl(image: File): string | null {

    return image ? URL.createObjectURL(image) : null;;
  }

  next(): void {
    this.formSubmit.emit(this.selectedImages);
  }

  backStepper() {
    this.back.emit();
  }
}
