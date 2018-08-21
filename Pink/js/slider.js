var reviewBtn = document.querySelectorAll('.review__btn-wrapper label');
var reviewSlider = document.querySelector('.review__slider');
var priceBtn = document.querySelectorAll('.price__btn-wrapper label');
var priceSlider = document.querySelector('.price__table');


reviewBtn.forEach(function (el, i) {
	el.addEventListener('click', function () {
		reviewSlider.style.marginLeft = i * -300 + 'px';
	})
});


priceBtn.forEach(function (el, i) {
	el.addEventListener('click', function () {
		priceSlider.style.marginLeft = i * -254 + 'px';
	})
});


//Media Queries with JavaScript

var window_size = window.matchMedia('(min-width: 768px)');

if (window.matchMedia('(min-width: 768px)').matches) {
	reviewBtn.forEach(function (el, i) {
		el.addEventListener('click', function () {
			reviewSlider.style.marginLeft = i * -655 + 'px';
		})
	});
}
