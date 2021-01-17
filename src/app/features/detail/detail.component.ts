import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed } from '@core/models/breed.models';
import { BreedsService } from '@core/services/breeds.service';
import { forkJoin } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'ev-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public breed: Breed;
  public image: string;

  constructor(
    private breedsService: BreedsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          // cambiarlo a servicio y transformar el resultado
          return forkJoin([
            this.breedsService.getBreed(params.id),
            this.breedsService.getBreedImage(params.id).pipe(map(item => item[0]))
          ]);
        }),
      )
      .subscribe(([breed, image]) => {
        this.breed = breed;
        this.image = image.url;
      });
  }

}
