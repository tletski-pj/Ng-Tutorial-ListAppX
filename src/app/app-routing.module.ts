import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListHomeComponent } from './list-home/list-home.component';
import { IceCreamDisplayComponent } from './ice-cream-display/ice-cream-display.component';

const routes: Routes = [
  {path: '', component: ListHomeComponent},
  {path: 'home', component: ListHomeComponent},
  {path: 'icecream', component: IceCreamDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
