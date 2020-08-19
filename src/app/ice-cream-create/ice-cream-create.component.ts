import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IceCream } from './../models/ice-cream';

@Component({
  selector: 'app-ice-cream-create',
  templateUrl: './ice-cream-create.component.html',
  styleUrls: ['./ice-cream-create.component.scss']
})
export class IceCreamCreateComponent implements OnInit {
  @Output() newFlavor = new EventEmitter<IceCream>();

  constructor() { }

  ngOnInit() { }

  addIceCream(theFlavor: string, theMaker: string) {
    const iceCream: IceCream = {flavor: theFlavor, maker: theMaker};
    this.newFlavor.emit(iceCream);
  }
}
