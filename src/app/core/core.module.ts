import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { breedsReducer } from './store/reducers/breeds.reducers';
import { BreedsEffects } from './store/effects/breeds.effects';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    EffectsModule.forRoot([BreedsEffects]),
    StoreModule.forRoot({ breeds: breedsReducer })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule { }
