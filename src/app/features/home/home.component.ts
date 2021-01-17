import { Component, OnInit } from '@angular/core';
import { Breed } from '@core/models/breed.models';
import { BreedsService } from '@core/services/breeds.service';
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

  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.breeds$ = this.breedsService.getBreeds()
      .pipe(map(breeds => breeds.slice(0, 4)));
  }

  public search(q: string) {
    this.breedsService.searchBreed(q)
      .pipe(debounceTime(600))
      .subscribe((searchedBreeds) => this.searchedBreeds = searchedBreeds as Breed[]);
  }

}
