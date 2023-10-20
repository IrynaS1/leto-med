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

const newsUpBtn = document.querySelector('.news__caption-btn');
newsUpBtn.addEventListener('click', function () {
	const arrowUpNews = document.querySelector('.arrow-up-btn');
	arrowUpNews.classList.toggle('arrow-to-close');
	const arrowDownNews = document.querySelector('.arrow-down-btn');
	arrowDownNews.classList.toggle('arrow-to-open');
	const newsBlock = document.querySelector('.news__block');
	newsBlock.classList.toggle('block-close');
});

const contentAbout = document.querySelector('.about-home');
contentAbout.addEventListener('click', function (e) {
	e.preventDefault();
	console.log(e.target);
	if (e.target.classList.contains('about-block__caption-btn') || e.target.classList.contains('block__caption-btn-img')) {

		console.log('btn', e.target);
	}
	/* const arrowUpNews = document.querySelector('.arrow-up-btn');
	arrowUpNews.classList.toggle('arrow-to-close');
	const arrowDownNews = document.querySelector('.arrow-down-btn');
	arrowDownNews.classList.toggle('arrow-to-open');
	const newsBlock = document.querySelector('.news__block');
	newsBlock.classList.toggle('block-close'); */
});