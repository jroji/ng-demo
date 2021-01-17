import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeComponents } from './components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    homeComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }])
  ]
})
export class HomeModule { }
