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

const regBtn = document.querySelector('.header-menu__reg'),
	overlay = document.querySelector('.overlay'),
	modalReg = document.querySelector('.modal-reg'),
	modalAuth = document.querySelector('.modal-auth'),
	modalRecovery = document.querySelector('.modal-recovery'),
	inputsPassword = document.querySelectorAll('.modal-form__input-password'),
	authBtn = document.querySelector('.header-menu__auth');

regBtn.addEventListener('click', function () {
	overlay.classList.add('overlay--open');
	modalReg.classList.add('modal--open');
});

authBtn.addEventListener('click', function () {
	overlay.classList.add('overlay--open');
	modalAuth.classList.add('modal--open');
});

const recoveryBtn = document.querySelector('.recovery-password');
recoveryBtn.addEventListener('click', function () {
	modalAuth.classList.remove('modal--open');
	modalRecovery.classList.add('modal--open');
});

const registrationBtn = document.querySelector('.registration');
registrationBtn.addEventListener('click', function () {
	modalAuth.classList.remove('modal--open');
	modalReg.classList.add('modal--open');
});

inputsPassword.forEach(function (el) {
	el.addEventListener('click', function (e) {
		const passwordEye = e.target.nextElementSibling;
		passwordEye.classList.add('show--password');
		passwordEye.addEventListener('click', function () {
			passwordEye.classList.toggle('show--password');
			passwordEye.classList.toggle('close--password');
			if (el.getAttribute('type') === 'password') {
				el.setAttribute('type', 'text');
			} else {
				el.setAttribute('type', 'password');
			}
		});
	});
});

overlay.addEventListener('click', function () {
	overlay.classList.remove('overlay--open');
	modalReg.classList.remove('modal--open');
	modalAuth.classList.remove('modal--open');
	modalRecovery.classList.remove('modal--open');
});

const footerLocationBtn = document.querySelector('.footer__mob-location');
footerLocationBtn.addEventListener('click', function () {
	const mobLocation = document.querySelector('.footer-block__location-city-select');
	mobLocation.classList.toggle('footer-select-city');
});


const sortBtn = document.querySelector('.sort-btn-js');
sortBtn.addEventListener('click', function (e) {
	e.preventDefault();
	const sortItems = document.querySelector('.sort-items-js');
	sortItems.classList.toggle('sort--open');
});

const filtersMobBtn = document.querySelector('.goods__mob-filters-btn');
filtersMobBtn.addEventListener('click', function (e) {
	e.preventDefault();
	const filters = document.querySelector('.filters-mob-items-js');
	filters.classList.toggle('filters--open');
});

function openFilter(e) {
	if ((e.target.className === 'filter-top') ||
		(e.target.className === 'filter-top__arrow-down') ||
		(e.target.className === 'filter-top__title')) {
		const clickFilter = e.target.closest('.filter'),
			filterContent = clickFilter.querySelector('.filter-content');
		filterContent.classList.toggle('filter-content--open');
		const arrowDown = clickFilter.querySelector('.filter-top__arrow-down');
		arrowDown.classList.toggle('arrow--up');
	}
}

const filtersBlock = document.querySelector('.filters');
filtersBlock.addEventListener('click', function (e) {
	e.preventDefault();
	openFilter(e);

	if (e.target.className === 'filter-checkbox-label') {
		const inputChekbox = e.target.previousElementSibling;
		if (!inputChekbox.hasAttribute('checked')) {
			inputChekbox.setAttribute('checked', '');
		} else {
			inputChekbox.removeAttribute('checked');
		}
	}
});

const filtersMobBlock = document.querySelector('.filters-mob-items-js');
filtersMobBlock.addEventListener('click', function (e) {
	e.preventDefault();
	openFilter(e);

	if (e.target.className === 'filter-checkbox-label') {
		const inputChekbox = e.target.previousElementSibling;
		if (!inputChekbox.hasAttribute('checked')) {
			inputChekbox.setAttribute('checked', '');
		} else {
			inputChekbox.removeAttribute('checked');
		}
	}
});

const centralBlock = document.querySelector('.central-block'),
	viewRow = document.querySelector('.view-row'),
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
	centralBlock.classList.add('central-block__cell');
	goodsBlockRow.classList.remove('view--active');
	goodsBlockCell.classList.add('view--active');
	changeViewCatalog();
});

viewRow.addEventListener('click', function () {
	centralBlock.classList.remove('central-block__cell');
	goodsBlockRow.classList.add('view--active');
	goodsBlockCell.classList.remove('view--active');
	changeViewCatalog();
});

const viewCellCard = document.querySelector('.good-cell-item'),
	viewCellCardFooter = document.querySelector('.good-cell-card__footer');

function deleteViewRow() {
	const widthBody = window.innerWidth;
	if (widthBody <= 1430) {
		centralBlock.classList.add('central-block__cell');
		const optionsBlock = document.querySelector('.goods__view-block');
		optionsBlock.style.display = 'none';
		goodsBlockRow.classList.remove('view--active');
		goodsBlockCell.classList.add('view--active');
		viewCellCardFooter.style.display = 'block';
	}/* Поправить раскрытие карточки по наведению мыши
	 else {                   
		viewCellCard.addEventListener('mouseover', function () {
			viewCellCardFooter.style.display = 'block';
		});

		viewCellCard.addEventListener('mouseleave', function () {
			viewCellCardFooter.style.display = 'none';
		});
	} */
}

window.addEventListener('resize', function () {
	deleteViewRow();
});

const goodsCards = document.querySelectorAll('.good-cell-item');
goodsCards.forEach(function (el) {
	el.addEventListener('click', function () {
		el.classList.add('card--open');
		viewCellCardFooter.style.display = 'block';
	})
});
