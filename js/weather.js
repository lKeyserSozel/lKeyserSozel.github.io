'use strict';

class Weather {
	constructor() {
		this.weather = document.querySelector(".weather");
		this.cloud = document.querySelector(".weather__cloud");
	}

	on() {
		setTimeout(() => this.weather.classList.add("weather--on"), 1000);
	}

	sunny() {
		this.cloud.classList.remove("weather__cloud--opened");
		setTimeout(() => document.body.classList.remove("cloudy"), 500);
		window.raindrops.forEach((el) => {
			el.infinity = false;
		});
	}

	cloudy() {
		this.cloud.classList.add("weather__cloud--opened");
		setupRain();
		setTimeout(() => document.body.classList.add("cloudy"), 500);
	}
}


const weather = new Weather();

function weatherSetup() {
	weather.on();
	const busStation = document.querySelector('.bus-station');

	function changeWeather() {
		if (weather.cloud.classList.contains("weather__cloud--opened")) {
			weather.sunny();
			mainCar.moveLeft();
			busStation.classList.remove('bus-station--close');
		} else {
			weather.cloudy();
			mainCar.moveRight();
			busStation.classList.add('bus-station--close');
		}
	};

	weather.weather.addEventListener('click', changeWeather);
};

weatherSetup();

