import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IceCream } from './../models/ice-cream';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ice-cream-read',
  templateUrl: './ice-cream-read.component.html',
  styleUrls: ['./ice-cream-read.component.scss']
})
export class IceCreamReadComponent implements OnInit {
  @Input() iceCreams: Observable<IceCream[]>;
  @Output() deleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  deleteIceCream(index: number) {
    this.deleted.emit(index);
  }
}
