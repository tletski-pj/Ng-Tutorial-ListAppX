import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MuscleCar } from '../../models/muscle-car';

@Component({
  selector: 'app-muscle-car-create',
  templateUrl: './muscle-car-create.component.html',
  styleUrls: ['./muscle-car-create.component.scss']
})
export class MuscleCarCreateComponent implements OnInit {
  @Output() newMuscleCar = new EventEmitter<MuscleCar>();

  constructor() { }

  ngOnInit() { }

  addMuscleCar(theMake: string, theModel: string, theYear: string) {
    const muscleCar: MuscleCar = {make: theMake, model: theModel, year: theYear};
    this.newMuscleCar.emit(muscleCar);
  }
}
