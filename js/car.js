'use strict';

class Car {
	constructor() {
		this.car = document.querySelector(".car");
	}

	moveRight() {
		this.car.classList.remove("car--move-left");
		this.car.classList.add("car--move-right");
	}

	moveLeft() {
		this.car.classList.remove("car--move-right");
		this.car.classList.add("car--move-left");
	}
};

const mainCar = new Car();