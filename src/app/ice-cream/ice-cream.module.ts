import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IceCreamCreateComponent } from './ice-cream-create/ice-cream-create.component';
import { IceCreamReadComponent } from './ice-cream-read/ice-cream-read.component';
import { IceCreamDisplayComponent } from './ice-cream-display/ice-cream-display.component';
import { IceCreamRoutingModule } from './ice-cream-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IceCreamRoutingModule
  ],
  declarations: [
    IceCreamDisplayComponent,
    IceCreamCreateComponent,
    IceCreamReadComponent
  ]
})
export class IceCreamModule { }
