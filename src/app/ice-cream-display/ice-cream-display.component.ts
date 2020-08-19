import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IceCream } from './../models/ice-cream';

@Component({
  selector: 'app-ice-cream-display',
  templateUrl: './ice-cream-display.component.html',
  styleUrls: ['./ice-cream-display.component.scss']
})
export class IceCreamDisplayComponent implements OnInit {
  public iceCreamSubject: Subject<IceCream[]> = new Subject<IceCream[]>();
  public iceCreamObservable: Observable<IceCream[]> = this.iceCreamSubject.asObservable();
  private iceCreams: IceCream[] = [];

  constructor() { }

  ngOnInit() { }

  onNewFlavor(newFlavor: IceCream) {
    this.iceCreams.push(newFlavor);
    this.iceCreamSubject.next(this.iceCreams);
  }

  onDeleteFlavor(index: number) {
    this.iceCreams = this.iceCreams.filter((iceCream, id, array) => (index !== id));
    this.iceCreamSubject.next(this.iceCreams);
  }
}
