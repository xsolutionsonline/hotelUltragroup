import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ratingstar',
  templateUrl: './ratingstar.component.html',
  styleUrls: ['./ratingstar.component.scss'],
})
export class RatingstarComponent  {
  @Input() selectedStars = 0;
  @Output() rateChange = new EventEmitter<number>();

  rateStar(rating: number): void {
    this.selectedStars = rating;
    this.rateChange.emit(this.selectedStars);
  }
}
