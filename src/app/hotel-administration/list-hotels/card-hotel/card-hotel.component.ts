import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/shared/models/hotel.interface';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent {

  @Input() hotel!: Hotel;

  constructor(
    private router: Router
  ) {}

  editarHotel(): void {
    this.router.navigate(['/edit-hotel', this.hotel.id]);
  }
}
