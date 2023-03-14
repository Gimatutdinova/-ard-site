  
  // Определение устройсва (pc/mob)
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
}

let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('_touch');
} else {
	body.classList.add('_pc');
}

  //_______________________________________________


  // Меню бургер

const btn = document.querySelector('.header__btn');
const menu = document.querySelector('.header__menu');
const subbtn = document.querySelector('.header__link');
const submenu = document.querySelector('.sub-header__menu');

function headerBtn() {
	btn.addEventListener("click", () => {
		document.body.classList.toggle('_lock');
		btn.classList.toggle('_active');
		menu.classList.toggle('_active');
	})
	subbtn.addEventListener("click", () => {
		subbtn.classList.toggle('_active');
		submenu.classList.toggle('_active');
	})
}

  //_________________________________________________