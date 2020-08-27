import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MuscleCar } from '../../models/muscle-car';

@Component({
  selector: 'app-muscle-car-display',
  templateUrl: './muscle-car-display.component.html',
  styleUrls: ['./muscle-car-display.component.scss']
})
export class MuscleCarDisplayComponent implements OnInit {
  public muscleCarsSubject: Subject<MuscleCar[]> = new Subject<MuscleCar[]>();
  public muscleCarsObservable: Observable<MuscleCar[]> = this.muscleCarsSubject.asObservable();
  private muscleCars: MuscleCar[] = [];

  constructor() { }

  ngOnInit() { }

  onNewCar(newMuscleCar: MuscleCar) {
    this.muscleCars.push(newMuscleCar);
    this.muscleCarsSubject.next(this.muscleCars);
  }

  onDeleteMuscleCar(index: number) {
    this.muscleCars = this.muscleCars.filter((muscleCar, id, array) => (index !== id));
    this.muscleCarsSubject.next(this.muscleCars);
  }
}
