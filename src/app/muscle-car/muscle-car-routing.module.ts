import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuscleCarDisplayComponent } from './muscle-car-display/muscle-car-display.component';

const muscleCarRoutes: Routes = [
  { path: '', component: MuscleCarDisplayComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(muscleCarRoutes) ],
  exports: [ RouterModule ]
})
export class MuscleCarRoutingModule { }
