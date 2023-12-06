import { Component,OnInit } from '@angular/core';
import { HotelService } from 'src/app/core/services/hotel-service.service';
import { Hotel } from 'src/app/shared/models/hotel.interface';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.scss']
})
export class ListHotelsComponent implements OnInit{
  hoteles: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHoteles().subscribe((hoteles) => {
      this.hoteles = hoteles;
    });
  }
}
