import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MuscleCar } from '../../models/muscle-car';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-muscle-car-read',
  templateUrl: './muscle-car-read.component.html',
  styleUrls: ['./muscle-car-read.component.scss']
})
export class MuscleCarReadComponent implements OnInit {
  @Input() muscleCars: Observable<MuscleCar[]>;
  @Output() deleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  deleteMuscleCar(index: number) {
    this.deleted.emit(index);
  }
}
