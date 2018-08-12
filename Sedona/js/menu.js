var NavMain   = document.querySelector(".main-nav");
var NavToggle = document.querySelector(".main-nav__toggle");
var NavClose  = document.querySelector(".main-nav__item--close");

NavMain.classList.remove("main-nav--nojs");

NavToggle.addEventListener("click", function() {
	if (NavMain.classList.contains("main-nav--closed")) { 
		NavMain.classList.remove("main-nav--closed");
		NavMain.classList.add("main-nav--opened");
	} else {
		NavMain.classList.add("main-nav--closed");
		NavMain.classList.remove("main-nav--opened");
	}
});

NavClose.addEventListener("click", function() {
 NavMain.classList.remove("main-nav--opened");
 NavMain.classList.add("main-nav--closed");
});