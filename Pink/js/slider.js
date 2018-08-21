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

