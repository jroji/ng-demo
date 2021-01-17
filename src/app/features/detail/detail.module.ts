import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RatingComponent } from './components/rating/rating.component';



@NgModule({
  declarations: [DetailComponent, RatingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: DetailComponent,
    }])
  ]
})
export class DetailModule { }
