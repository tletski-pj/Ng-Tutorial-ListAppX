import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuscleCarCreateComponent } from './muscle-car-create/muscle-car-create.component';
import { MuscleCarReadComponent } from './muscle-car-read/muscle-car-read.component';
import { MuscleCarDisplayComponent } from './muscle-car-display/muscle-car-display.component';
import { MuscleCarRoutingModule } from './muscle-car-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MuscleCarRoutingModule
  ],
  declarations: [
    MuscleCarDisplayComponent,
    MuscleCarCreateComponent,
    MuscleCarReadComponent
  ]
})
export class MuscleCarModule { }
