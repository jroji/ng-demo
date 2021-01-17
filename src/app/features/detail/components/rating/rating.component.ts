import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ev-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rate: number;
  @Input() name: string;
  maxRate = Array(5).fill(undefined);

  constructor() { }
}
