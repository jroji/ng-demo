import { TestBed } from '@angular/core/testing';
import { BreedsEffects } from './breeds.effects';

describe('BreedsEffectsService', () => {
  let service: BreedsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedsEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
