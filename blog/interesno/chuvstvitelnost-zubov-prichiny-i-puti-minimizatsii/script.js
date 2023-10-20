const cityUserBtn = document.querySelector('.header-block__location-city-name');
cityUserBtn.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	tooltip.classList.toggle('header-select-city');
});

const cityConfirm = document.querySelector('.header-select-city__confirm');
cityConfirm.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	tooltip.classList.add('header-select-city');
});

const citySelect = document.querySelector('#city-select');
citySelect.addEventListener('change', function () {
	let citySelectInd = citySelect.selectedIndex;
	const citySelectText = citySelect.options[citySelectInd].text;
	cityUserBtn.innerHTML = citySelectText;
	const tooltip = document.querySelector('.header-block__location-city-select');
	tooltip.classList.add('header-select-city');
});
