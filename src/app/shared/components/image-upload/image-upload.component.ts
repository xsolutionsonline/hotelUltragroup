import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  selectedImages: File[] = Array(8); // Inicializa un array con 8 elementos

  onImageChange(event: any, index: number) {
    const file = event.target.files[0]; // Selecciona solo la primera imagen si se seleccionan múltiples
    if (file) {
      this.selectedImages[index] = file;
    }
  }

  getImageUrl(image: File): string | null {
    return image ? URL.createObjectURL(image) : null;
  }
}
