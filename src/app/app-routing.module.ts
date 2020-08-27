import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListHomeComponent } from './list-home/list-home.component';

const routes: Routes = [
  {path: '', component: ListHomeComponent},
  {path: 'home', component: ListHomeComponent},
  {
    path: 'icecream',
    loadChildren: () => import('./ice-cream/ice-cream.module').then(m => m.IceCreamModule)
  },
  {
    path: 'musclecar',
    loadChildren: () => import('./muscle-car/muscle-car.module').then(m => m.MuscleCarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
