import Car from './10-car';

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    // eslint-disable-next-line class-methods-this
    cloneCar() {
        return new Car();
    }
}