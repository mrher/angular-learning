import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../car-model';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {
  private id: number = 2;
  carName: string = '';
  carModel: string = '';

  @Output() addCar = new EventEmitter<Car>();

  onAdd() {
    if (this.carName === '' || this.carModel === '') return;
    //this.id = ++ this.id;
    const car = new Car(
      this.carName,
      Date(),
      this.carModel,
      false,
      ++ this.id
    );
    //console.log(car);

    //debugger

    this.addCar.emit(car);
    this.carModel = '';
    this.carName = '';
  }
  onLoad() {
    //TODO
  }
}
