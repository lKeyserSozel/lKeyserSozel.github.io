var navList = document.querySelector('.main-nav__list');
var navClose = document.querySelector('.main-nav__close-btn');
var navBurger = document.querySelector('.main-nav__burger');

document.body.classList.remove('no-js');

if (navList.classList.contains('main-nav__list--opened')) {
	navList.classList.remove('main-nav__list--opened');
	navList.classList.add('main-nav__list--closed');
}

navBurger.addEventListener('click', function () {
	if (navList.classList.contains('main-nav__list--closed')) {
		navList.classList.remove('main-nav__list--closed');
		navList.classList.add('main-nav__list--opened');
	}
});

navClose.addEventListener('click', function () {
	if (navList.classList.contains('main-nav__list--opened')) {
		navList.classList.remove('main-nav__list--opened');
		navList.classList.add('main-nav__list--closed');
	}
});