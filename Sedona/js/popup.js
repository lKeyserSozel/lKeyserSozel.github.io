var errorPopup = document.querySelector(".error-popup");
var btnError = document.querySelector(".error-popup__btn");
var successPopup = document.querySelector(".success-popup");
var btnSuccess = document.querySelector(".success-popup__btn");
var overlay = document.querySelector(".overlay");
var btnReview = document.querySelector(".btn--review");
var userName = document.querySelector(".fullname__name");
var userSurname = document.querySelector(".fullname__surname");
var tel = document.querySelector(".phone");
var email = document.querySelector(".email");
var form = document.querySelector("form");


btnReview.addEventListener("click", function (event) {
	if (!userName.value || !userSurname.value || !tel.value || !email.value) {
		event.preventDefault();
		errorPopup.classList.toggle("error-popup--open");
		overlay.classList.add("overlay--open");
	}
});

overlay.addEventListener("click" , function (event) {
	event.preventDefault();
	if (errorPopup.classList.contains("error-popup--open") || successPopup.classList.contains("success-popup--open")) {
		overlay.classList.remove("overlay--open");
		errorPopup.classList.remove("error-popup--open");
		successPopup.classList.remove("success-popup--open");
	}
});

btnError.addEventListener("click" , function (event) {
	event.preventDefault();
	overlay.classList.remove("overlay--open");
	errorPopup.classList.remove("error-popup--open");
});

btnSuccess.addEventListener("click" , function (event) {
	event.preventDefault();
	overlay.classList.remove("overlay--open");
	successPopup.classList.remove("success-popup--open");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (errorPopup.classList.contains("error-popup--open") || successPopup.classList.contains("success-popup--open")) {
			errorPopup.classList.remove("error-popup--open");
			successPopup.classList.remove("success-popup--open");
			overlay.classList.remove("overlay--open");
		}
	}
});

form.addEventListener("submit", function(event) {
	event.preventDefault();
	overlay.classList.add("overlay--open");
	successPopup.classList.add("success-popup--open");
});

