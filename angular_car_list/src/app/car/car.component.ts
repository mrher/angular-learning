import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car-model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car = new Car('', '', '', false, 0);
  @Output() deleteCar = new EventEmitter<Car>();
  // constructor() {
  //   this.car = new Car('','','',false);
  // }

  onDelete() {
    this.deleteCar.emit(this.car);
  }

  onBuy() {
    this.car.isSold = true;
  }
}
