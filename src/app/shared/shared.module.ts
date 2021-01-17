import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [sharedComponents],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    sharedComponents,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
