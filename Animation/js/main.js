'use strict';

const ScreenSize = {
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
		this.x = getRandomValue(-ScreenSize.width, ScreenSize.width * 1.6);
		this.y = getRandomValue(0, ScreenSize.height);

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
			return this.y > ScreenSize.height + this.size ||
				this.x > ScreenSize.width + this.size ||
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
};

const cleanupFrame = function (ctx) {
	ctx.clearRect(0, 0, ScreenSize.width, ScreenSize.height);
};

const renderFrame = function (ctx, raindrops) {
	cleanupFrame(ctx);

	raindrops.forEach(function (it) {
		it.render(ctx);
		it.update();
	});

	requestAnimationFrame(renderFrame.bind(null, ctx, raindrops));
};

const setup = function () {
	const DROPS = 600;
	const canvas = document.querySelector('#canvas');
	const ctx = canvas.getContext('2d');

	canvas.width = ScreenSize.width;
	canvas.height = ScreenSize.height;

	window.raindrops = new Array(DROPS).fill('').map(function () {
		return new Raindrop();
	});

	renderFrame(ctx, raindrops);
};