import { Component, OnInit } from '@angular/core';
import { Breed } from '@core/models/breed.models';
import { BreedsService } from '@core/services/breeds.service';
import { request, update } from '@core/store/actions/breeds.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'ev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public breeds$: Observable<Breed[]>;
  public searchedBreeds: Breed[] = [];

  constructor(
    private store: Store<{ breeds: Breed[] }>,
    private breedsService: BreedsService
  ) {
    this.breeds$ = store.select('breeds');
  }

  ngOnInit(): void {
    this.store.dispatch(request());
  }

  public search(q: string) {
    this.breedsService.searchBreed(q)
      .pipe(debounceTime(600))
      .subscribe((searchedBreeds) => this.searchedBreeds = searchedBreeds as Breed[]);
  }

}
