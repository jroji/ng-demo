import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { BreedsService } from '@core/services/breeds.service';
import { SearchComponent } from './components/search/search.component';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { PortraitComponent } from '@shared/components/portrait/portrait.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'app/app.routes';
import { Inject } from '@angular/core';
import { Location } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let location: Location;

  const breedStub = jasmine.createSpyObj('ValueService', ['getBreeds', 'searchBreed']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([{
          path: 'detail/:id', component: HomeComponent
        }]),
        HttpClientTestingModule
      ],
      providers: [ {
        provide: BreedsService, useValue: breedStub,
      }],
      declarations: [
        PortraitComponent,
        SearchComponent,
        HomeComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    breedStub.getBreeds.and.returnValue(of([]));
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should have been called',  fakeAsync(() => {
    const component = fixture.debugElement;
    breedStub.searchBreed.and.returnValue(of([{ name: 'test', id: 'test' }]));
    const input = component.nativeElement.querySelector('input');
    input.value = 'Mu';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(600);
    expect(breedStub.searchBreed).toHaveBeenCalledWith('Mu');
    fixture.detectChanges();
    const listElement = component.nativeElement.querySelector('.list > div');
    expect(listElement.textContent).toBe('test');
    listElement.click();
    fixture.detectChanges();
    flushMicrotasks();
    tick(6000);
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/detail/test');
    });
  }));
});
