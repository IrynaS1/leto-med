const cityUserBtn = document.querySelector('.header-block__location-city-name');
cityUserBtn.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	tooltip.classList.toggle('header-select-city');
});

const cityConfirm = document.querySelector('.header-select-city__confirm');
cityConfirm.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	cityUserBtn.innerHTML = 'Москва';
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

const cityMobUserBtn = document.querySelector('.footer__mob-location');
cityMobUserBtn.addEventListener('click', function () {
	const tooltip = document.querySelector('.footer-block__location-city-select');
	tooltip.classList.toggle('footer-select-city');
});

const cityMobConfirm = document.querySelector('.footer-select-city__confirm');
cityMobConfirm.addEventListener('click', function () {
	const mobTooltip = document.querySelector('.footer-block__location-city-select');
	cityMobUserBtn.innerHTML = 'Москва';
	mobTooltip.classList.add('footer-select-city');
});

const mobCitySelect = document.querySelector('#mob-city-select');
mobCitySelect.addEventListener('change', function () {
	let citySelectInd = mobCitySelect.selectedIndex;
	const citySelectText = mobCitySelect.options[citySelectInd].text;
	cityMobUserBtn.innerHTML = citySelectText;
	const mobTooltip = document.querySelector('.footer-block__location-city-select');
	mobTooltip.classList.add('footer-select-city');
});

const viewRow = document.querySelector('.view-row'),
	viewCell = document.querySelector('.view-cell'),
	goodsBlockRow = document.querySelector('.goods-row'),
	goodsBlockCell = document.querySelector('.goods-cell'),
	viewRowImg = document.querySelector('.view-row-btn'),
	viewCellImg = document.querySelector('.view-cell-btn'),
	viewCellDesc = document.querySelector('.view-cell-desc'),
	viewRowDesc = document.querySelector('.view-row-desc');

function changeViewCatalog() {
	viewRowImg.classList.toggle('view-btn-active');
	viewCellImg.classList.toggle('view-btn-active');
	viewCellDesc.classList.toggle('view-desc-active');
	viewRowDesc.classList.toggle('view-desc-active');
}

viewCell.addEventListener('click', function () {
	goodsBlockRow.classList.remove('view--active');
	goodsBlockCell.classList.add('view--active');
	changeViewCatalog();
});

viewRow.addEventListener('click', function () {
	goodsBlockRow.classList.add('view--active');
	goodsBlockCell.classList.remove('view--active');
	changeViewCatalog();
});

const viewCellCard = document.querySelector('.good-cell-item'),
	viewCellCardFooter = document.querySelector('.good-cell-card__footer');

viewCellCard.addEventListener('mousemove', function () {
	viewCellCardFooter.style.display = 'block';
});

viewCellCard.addEventListener('mouseleave', function () {
	viewCellCardFooter.style.display = 'none';
});

//МОДАЛЬНОЕ ОКНО РЕГИСТРАЦИИ
const regBtn = document.querySelector('.header-menu__reg'),
	overlay = document.querySelector('.overlay'),
	modalReg = document.querySelector('.modal-reg'),
	modalAuth = document.querySelector('.modal-auth'),
	authBtn = document.querySelector('.header-menu__auth'),
	mobAuth = document.querySelector('.footer__mob-item-btn_auth');

regBtn.addEventListener('click', function () {
	overlay.classList.add('overlay--open');
	modalReg.classList.add('modal--open');
});

authBtn.addEventListener('click', function () {
	overlay.classList.add('overlay--open');
	modalAuth.classList.add('modal--open');
});

mobAuth.addEventListener('click', function () {
	overlay.classList.add('overlay--open');
	modalAuth.classList.add('modal--open');
})

overlay.addEventListener('click', function () {
	overlay.classList.remove('overlay--open');
	modalReg.classList.remove('modal--open');
});