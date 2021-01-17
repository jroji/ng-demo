import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ev-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortraitComponent {
  @Input() public image = 'https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg';
  @Input() public name: string;

  constructor() { }
}
