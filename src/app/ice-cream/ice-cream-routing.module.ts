import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IceCreamDisplayComponent } from './ice-cream-display/ice-cream-display.component';

const iceCreamRoutes: Routes = [
  { path: '', component: IceCreamDisplayComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(iceCreamRoutes) ],
  exports: [ RouterModule ]
})
export class IceCreamRoutingModule { }
