'use strict';

function weatherSetup() {
	const weather = document.querySelector(".weather");
	const weatherCloud = weather.querySelector(".weather__cloud");
	const weatherCloudClass = weatherCloud.classList;
	setTimeout(() => weather.classList.add("weather--on"), 1000);

	function changeWeather() {
		if (weatherCloudClass.contains("weather__cloud--opened")) {
			weatherCloudClass.remove("weather__cloud--opened");
			setTimeout(() => document.body.classList.remove("cloudy"), 500);
			window.raindrops.forEach((el) => {
				el.infinity = false;
			});

		} else {
			weatherCloudClass.add("weather__cloud--opened");
			moveCar();
			setup();
			setTimeout(() => document.body.classList.add("cloudy"), 500);
		}

	};

	weather.addEventListener('click', changeWeather);
};

weatherSetup();

