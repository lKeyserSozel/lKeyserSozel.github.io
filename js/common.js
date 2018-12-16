(function onWeather() {
	var weather = document.querySelector(".weather");
	var weatherCloud = weather.querySelector(".weather__cloud");

	setTimeout(function () {
		weather.classList.add("weather--on");
	}, 1000);

	weather.addEventListener('click', hiddenCloud);

	function hiddenCloud() {
		weatherCloud.classList.toggle("weather__cloud--closed");
		setTimeout(function () {
			document.body.classList.toggle("sunny");
		}, 500);
	}
	
})();

