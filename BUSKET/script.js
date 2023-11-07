/* const cityUserBtn = document.querySelector('.header-block__location-city-name');

const tooltip = document.querySelector('.modal__location-city-select');

const tooltipMob = document.querySelector('.mob-modal__location-city-select');



cityUserBtn.addEventListener('click', function () {
	tooltip.classList.toggle('select-city');
});

const cityUserBtnMob = document.querySelector('.footer__mob-location-city');
cityUserBtnMob.addEventListener('click', function () {
	tooltipMob.classList.remove('select-city');
});

const cityConfirm = document.querySelector('.select-city__confirm');
cityConfirm.addEventListener('click', function () {
	cityUserBtn.innerHTML = 'Москва';
	tooltip.classList.add('select-city');
});

const citySelect = document.querySelector('#city-select');
citySelect.addEventListener('change', function () {
	let citySelectInd = citySelect.selectedIndex;
	const citySelectText = citySelect.options[citySelectInd].text;
	cityUserBtn.innerHTML = citySelectText;
	tooltip.classList.add('select-city');
});

 */
const cityUserBtn = document.querySelector('.location-city-name');
const citySelect = document.querySelector('#city-select');
citySelect.addEventListener('change', function () {
	let citySelectInd = citySelect.selectedIndex;
	const citySelectText = citySelect.options[citySelectInd].text;
	cityUserBtn.innerHTML = citySelectText;
	const modal = document.querySelector('.modal');
	modal.classList.remove('show');
});

const cityBtnConfirm = document.querySelector('.select-city__confirm');
cityBtnConfirm.addEventListener('click', function () {
	cityUserBtn.innerHTML = 'Москва';
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