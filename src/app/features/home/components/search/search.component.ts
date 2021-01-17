import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Breed } from '@core/models/breed.models';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ev-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() list = [];
  @Output() searched = new EventEmitter();
  searchControl = new FormControl();
  public search: string;

  public ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(600))
      .subscribe((term) => this.searched.emit(term));
  }
}
