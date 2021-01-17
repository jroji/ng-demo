import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breed } from '@core/models/breed.models';
import { environment } from '@env';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breed[]> {
    return this.http.get(`${environment.apiUrl}/breeds`) as Observable<Breed[]>;
  }

  getBreed(id: string): Observable<Breed> {
    return this.http.get(`${environment.apiUrl}/breeds/${id}`) as Observable<Breed>;
  }

  getBreedImage(id: string): Observable<Record<'url', string>[]>{
    return this.http.get(`${environment.apiUrl}/images/search?breed_id=${id}`) as Observable<Record<'url', string>[]>;
  }

  searchBreed(q: string) {
    return this.http.get(`${environment.apiUrl}/breeds/search?q=${q}`)
  }

  // getBreed(id: string) {
  //   return combineLatest([
  //     this.http.get(`${environment.apiUrl}/breeds/${id}`) as Observable<Breed>,
  //     this.http.get(`${environment.apiUrl}/images/search?breed_id=${id}`) as Observable<Record<'url', string>[]>,
  //   ]).pipe(
  //     map(([breed, images]) => {
  //       breed.image = { url: images[0].url };
  //       return breed;
  //     })
  //   );
  // }

}
