import { Component, EventEmitter, Input } from '@angular/core';
import { Car } from './car-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  carAdd = new EventEmitter<Car>();
  // constructor() {
  //   this.car = new Car('','','',false,213123);
  // }
  //@Input() car: Car;
  public cars: Car[] = [
    new Car('Ford', '29.11.18', 'focus', false, 1),
    new Car('Audi', '09.10.22', 'a3', true, 2),
  ]

  onAdd(car: any) {
    //debugger
    console.log('onAdd');
    console.log(car);
    this.carAdd.emit(car);
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id)
  }
}
