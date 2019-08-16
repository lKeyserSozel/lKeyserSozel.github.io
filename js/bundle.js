(function () {
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
	}
	const car = new Car();

	const screenSize = {
		width: document.documentElement.clientWidth || document.body.clientWidth,
		height: document.documentElement.clientHeight || document.body.clientHeight
	};

	const getRandomValue = function (min, max) {
		return Math.random() * (max - min) + min;
	};

	class Raindrop {
		constructor() {
			this._reset();
			this.infinity = true;
		}

		_reset() {
			this.size = getRandomValue(1, 6);
			this.x = getRandomValue(-screenSize.width, screenSize.width * 1.6);
			this.y = getRandomValue(0, screenSize.height);

			this.velocity = this.size;
			this.hVelocity = this.size / 2;
		};

		render(ctx) {
			ctx.strokeStyle = 'white';
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x + this.size, this.y + this.size);
			ctx.closePath();
			ctx.stroke();
		};

		isOffscreen(trigg) {
			if (trigg) {
				return this.y > screenSize.height + this.size ||
					this.x > screenSize.width + this.size ||
					this.x < -this.size;
			}
			return false;
		};

		update() {
			this.x += this.hVelocity;
			this.y += this.velocity;

			if (this.isOffscreen(this.infinity)) {
				this._reset();
			}
		};
	}
	const cleanupFrame = function (ctx) {
		ctx.clearRect(0, 0, screenSize.width, screenSize.height);
	};

	const renderFrame = function (ctx, raindrops) {
		cleanupFrame(ctx);

		raindrops.forEach(function (it) {
			it.render(ctx);
			it.update();
		});

		requestAnimationFrame(renderFrame.bind(null, ctx, raindrops));
	};

	const setupRain = function () {
		const DROPS = 600;
		const canvas = document.querySelector('#canvas');
		const ctx = canvas.getContext('2d');

		canvas.width = screenSize.width;
		canvas.height = screenSize.height;

		window.raindrops = new Array(DROPS).fill('').map(function () {
			return new Raindrop();
		});

		renderFrame(ctx, raindrops);
	};

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
		const wolf = document.querySelector('.wolf');

		function changeWeather() {
			if (weather.cloud.classList.contains("weather__cloud--opened")) {
				weather.sunny();
				car.moveLeft();
				wolf.classList.remove('wolf--jump');
				busStation.classList.remove('bus-station--close');
			} else {
				weather.cloudy();
				car.moveRight();
				wolf.classList.add('wolf--jump');
				busStation.classList.add('bus-station--close');
			}
		}
		weather.weather.addEventListener('click', changeWeather);
	}

	weatherSetup();

}());
//# sourceMappingURL=bundle.js.map
