(function onWeather() {
	var weather = document.querySelector(".weather");
	var weatherCloud = weather.querySelector(".weather__cloud");
	var car = document.querySelector(".car");

	setTimeout(function () {
		weather.classList.add("weather--on");
	}, 1000);

	weather.addEventListener('click', hiddenCloud);

	function hiddenCloud() {
		weatherCloud.classList.toggle("weather__cloud--closed");
		car.classList.add("car--move");
		setTimeout(function () {
			document.body.classList.toggle("sunny");
		}, 500);
	}
	
})();

