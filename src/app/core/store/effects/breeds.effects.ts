import { Injectable } from '@angular/core';
import { BreedsService } from '@core/services/breeds.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BreedActions } from '@core/store/actions/breeds.actions';
import { filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Breed } from '@core/models/breed.models';
import { Store } from '@ngrx/store';

@Injectable()
export class BreedsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<{ breeds: Breed[] }>,
    private breadService: BreedsService
  ) {}

  loadBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(BreedActions.REQUEST),
    switchMap(() => this.store.select('breeds')),
    filter((breeds: Breed[]) => !breeds || breeds.length === 0),
    switchMap(() => this.breadService.getBreeds()
    .pipe(
      map(breeds => ({ type: BreedActions.UPDATE, list: breeds }))
    ))
  ));
}
