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

const sortBtn = document.querySelector('.sort-btn-js');
sortBtn.addEventListener('click', function (e) {
	e.preventDefault();
	const sortItems = document.querySelector('.sort-items-js');
	sortItems.classList.toggle('sort--open');
});

const filtersBlock = document.querySelector('.filters');
filtersBlock.addEventListener('click', function (e) {
	e.preventDefault();
	if ((e.target.className === 'filter-top') ||
		(e.target.className === 'filter-top__arrow-down') ||
		(e.target.className === 'filter-top__title')) {
		const clickFilter = e.target.closest('.filter'),
			filterContent = clickFilter.querySelector('.filter-content');
		filterContent.classList.toggle('filter-content--open');
		const arrowDown = clickFilter.querySelector('.filter-top__arrow-down');
		arrowDown.classList.toggle('arrow--up');
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

function deleteViewRow() {
	const widthBody = window.innerWidth;
	if (widthBody <= 1430) {
		centralBlock.classList.add('central-block__cell');
		const optionsBlock = document.querySelector('.goods__view-block');
		optionsBlock.style.display = 'none';
		goodsBlockRow.classList.remove('view--active');
		goodsBlockCell.classList.add('view--active');
	}
}

window.addEventListener('resize', function () {
	deleteViewRow();
});

const viewCellCard = document.querySelector('.good-cell-item'),
	viewCellCardFooter = document.querySelector('.good-cell-card__footer');

viewCellCard.addEventListener('mousemove', function () {
	viewCellCardFooter.style.display = 'block';
});

viewCellCard.addEventListener('mouseleave', function () {
	viewCellCardFooter.style.display = 'none';
});
/* 
const rangePriceInputs = document.querySelectorAll('.filter-content__price-range-input');
const priceInputs = document.querySelectorAll('.filter-content__price-input');
const progressPrice = document.querySelector('.filter-content__price-slider-progress');
let priceGap = 1;
priceInputs.forEach(function (input) {
	input.addEventListener('input', function (e) {
		e.preventDefault();
		let minValue = parseInt(priceInputs[0].value),
			maxValue = parseInt(priceInputs[1].value);

		if ((maxValue - minValue) >= priceGap) {
			if (e.target.className === 'price-input-min') {
				rangePriceInputs[0].value = minValue;
				progressPrice.style.left = (minValue / rangePriceInputs[0].max) * 100 + '%';
			} else {
				rangePriceInputs[1].value = maxValue;
				progressPrice.style.right = 100 - (maxValue / rangePriceInputs[1].max) * 100 + '%';
			}
		}
	});
});

rangePriceInputs.forEach(function (input) {
	input.addEventListener('input', function (e) {
		e.preventDefault();
		let minValue = parseInt(rangePriceInputs[0].value),
			maxValue = parseInt(rangePriceInputs[1].value);

		if ((maxValue - minValue) < priceGap) {
			if (e.target.className === 'price-range-min') {
				rangePriceInputs[0].value = maxValue - priceGap;
			} else {
				rangePriceInputs[1].value = minValue + priceGap;
			}
		} else {
			priceInputs[0].value = minValue;
			priceInputs[1].value = maxValue;
			progressPrice.style.left = (minValue / rangePriceInputs[0].max) * 100 + '%';
			progressPrice.style.right = 100 - (maxValue / rangePriceInputs[1].max) * 100 + '%';
		}
	});
}); */



