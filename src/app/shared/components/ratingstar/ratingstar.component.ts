import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ratingstar',
  templateUrl: './ratingstar.component.html',
  styleUrls: ['./ratingstar.component.scss'],
})
export class RatingstarComponent  {
  @Input() selectedStars:number | undefined = 0;
  @Output() rateChange = new EventEmitter<number>();
  @Input() isInteractionEnabled: boolean = true;

  rateStar(rating: number): void {
    this.selectedStars = rating;
    this.rateChange.emit(this.selectedStars);
  }
}
